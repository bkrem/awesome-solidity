import assert from 'node:assert/strict';
import { test } from 'node:test';

import {
  CODEX_TRIGGER,
  decide,
  diffEntries,
  evaluateRepo,
  githubRepoFromUrl,
  normalizeUrl,
  parseEntries,
  run,
} from './triage.mjs';

const NOW = new Date('2026-11-12T00:00:00Z');
const PR_CREATED = '2026-11-01T00:00:00Z';
const REPO_SLUG = 'bkrem/awesome-solidity';

const BASE_README = `# Awesome
## Resources
#### Templates
- [Scaffold](https://github.com/scaffold-eth/scaffold-eth) - Old template.
## Libraries
- [Lib](https://github.com/acme/lib) - Library for things.
## Tools
#### General
- [Site Tool](https://tool.example) - Hosted tool.
#### Audit
- [Slither](https://github.com/crytic/slither) - Static analyzer.
## License
`;

const withLine = (after, line) => BASE_README.replace(`${after}\n`, `${after}\n${line}\n`);
const AUDIT_ANCHOR = '- [Slither](https://github.com/crytic/slither) - Static analyzer.';
const NEW_TOOL = '- [newtool](https://github.com/dev/newtool) - Does a thing.';

const goodRepo = (over = {}) => ({
  stargazers_count: 50,
  created_at: '2025-01-01T00:00:00Z',
  pushed_at: '2026-10-01T00:00:00Z',
  license: { spdx_id: 'MIT' },
  archived: false,
  disabled: false,
  ...over,
});

const decideFor = (headReadme, repos = {}) =>
  decide({
    added: diffEntries(BASE_README, headReadme),
    currentReadme: BASE_README,
    repos: new Map(Object.entries(repos)),
    prCreatedAt: PR_CREATED,
    repoSlug: REPO_SLUG,
    now: NOW,
  });

test('normalizeUrl ignores scheme, www, case, trailing slash, and .git', () => {
  assert.equal(normalizeUrl('https://www.GitHub.com/Acme/Lib.git/'), normalizeUrl('http://github.com/acme/lib'));
  assert.notEqual(normalizeUrl('https://github.com/acme/lib'), normalizeUrl('https://github.com/acme/lib2'));
});

test('githubRepoFromUrl accepts repository links only', () => {
  assert.deepEqual(githubRepoFromUrl('https://github.com/acme/lib/tree/main'), { owner: 'acme', repo: 'lib' });
  assert.equal(githubRepoFromUrl('https://github.com/acme'), null);
  assert.equal(githubRepoFromUrl('https://github.com/orgs/acme'), null);
  assert.equal(githubRepoFromUrl('https://acme.dev/github.com/a/b'), null);
});

test('parseEntries assigns sections and subsections', () => {
  const entries = parseEntries(BASE_README);
  assert.equal(entries.length, 4);
  assert.deepEqual(
    entries.map((e) => [e.name, e.section, e.subsection]),
    [
      ['Scaffold', 'Resources', 'Templates'],
      ['Lib', 'Libraries', null],
      ['Site Tool', 'Tools', 'General'],
      ['Slither', 'Tools', 'Audit'],
    ],
  );
});

test('diffEntries reports additions and marks edits of existing entries', () => {
  const added = diffEntries(BASE_README, withLine(AUDIT_ANCHOR, NEW_TOOL));
  assert.equal(added.length, 1);
  assert.equal(added[0].name, 'newtool');
  assert.equal(added[0].modified, false);

  const edited = BASE_README.replace('Static analyzer.', 'Static analysis framework.');
  assert.deepEqual(diffEntries(BASE_README, edited).map((e) => [e.name, e.modified]), [['Slither', true]]);

  const removed = BASE_README.replace(`${AUDIT_ANCHOR}\n`, '');
  assert.deepEqual(diffEntries(BASE_README, removed), []);
});

test('evaluateRepo passes an eligible repository', () => {
  assert.deepEqual(evaluateRepo(goodRepo(), PR_CREATED, NOW), []);
});

test('evaluateRepo reports each failed requirement', () => {
  const failures = evaluateRepo(
    goodRepo({
      stargazers_count: 1,
      created_at: '2026-10-28T00:00:00Z',
      pushed_at: '2025-01-01T00:00:00Z',
      license: null,
      archived: true,
    }),
    PR_CREATED,
    NOW,
  );
  assert.equal(failures.length, 5);
  assert.match(failures[0], /^has 1 star \(minimum 10\)$/);
  assert.match(failures[1], /^was created 4 days before this PR opened/);
  assert.match(failures[2], /license/);
  assert.equal(failures[3], 'is archived');
  assert.match(failures[4], /no push in \d+ days/);
});

test('evaluateRepo applies thresholds at the boundary', () => {
  assert.deepEqual(evaluateRepo(goodRepo({ stargazers_count: 10 }), PR_CREATED, NOW), []);
  assert.deepEqual(evaluateRepo(goodRepo({ created_at: '2026-08-03T00:00:00Z' }), PR_CREATED, NOW), []);
  assert.equal(evaluateRepo(goodRepo({ created_at: '2026-08-04T00:00:00Z' }), PR_CREATED, NOW).length, 1);
});

test('decide closes a new tool whose repository fails eligibility', () => {
  const result = decideFor(withLine(AUDIT_ANCHOR, NEW_TOOL), {
    'dev/newtool': goodRepo({ stargazers_count: 0, created_at: '2026-10-27T00:00:00Z' }),
  });
  assert.equal(result.action, 'close');
  assert.equal(result.label, 'invalid');
  assert.match(result.comment, /^Thanks for your contribution\. New Tools entries must/);
  assert.match(result.comment, /The dev\/newtool repository has 0 stars \(minimum 10\) and was created 5 days before/);
  assert.doesNotMatch(result.comment, /@codex/);
});

test('decide sends an eligible new tool to review', () => {
  const result = decideFor(withLine(AUDIT_ANCHOR, NEW_TOOL), { 'dev/newtool': goodRepo() });
  assert.equal(result.action, 'review');
  assert.equal(result.comment, CODEX_TRIGGER);
});

test('decide exempts Resources entries from repository eligibility', () => {
  const head = withLine('#### Templates', '- [fresh](https://github.com/dev/fresh) - Template.');
  const result = decideFor(head, { 'dev/fresh': goodRepo({ stargazers_count: 0 }) });
  assert.equal(result.action, 'review');
});

test('decide leaves non-GitHub links and unreadable repositories to the maintainer', () => {
  const site = decideFor(withLine(AUDIT_ANCHOR, '- [Scanner](https://scanner.example) - Scans tokens.'));
  assert.equal(site.action, 'review');
  assert.match(site.notes.join('\n'), /isn't a GitHub repository link/);

  const missing = decideFor(withLine(AUDIT_ANCHOR, NEW_TOOL), { 'dev/newtool': null });
  assert.equal(missing.action, 'review');
  assert.match(missing.notes.join('\n'), /couldn't read dev\/newtool/);
});

test('decide closes a PR that adds an already-listed URL', () => {
  const head = withLine(AUDIT_ANCHOR, '- [crytic/slither](https://github.com/crytic/slither/) - Analyzer.');
  const result = decideFor(head, { 'crytic/slither': goodRepo() });
  assert.equal(result.action, 'close');
  assert.equal(result.label, 'duplicate');
  assert.match(result.comment, /already listed in README\.md/);
});

test('decide does not treat an edit or a removal as a duplicate or a new entry', () => {
  const edited = BASE_README.replace('Static analyzer.', 'Static analysis framework.');
  assert.equal(decideFor(edited, { 'crytic/slither': goodRepo({ archived: true }) }).action, 'review');

  const removed = BASE_README.replace(`${AUDIT_ANCHOR}\n`, '');
  const result = decideFor(removed);
  assert.equal(result.action, 'review');
  assert.match(result.notes.join('\n'), /No new list entries/);
});

test('decide keeps a PR open when one of several new entries is sound', () => {
  const head = withLine(AUDIT_ANCHOR, `${NEW_TOOL}\n- [oldtool](https://github.com/dev/oldtool) - Old thing.`);
  const result = decideFor(head, {
    'dev/newtool': goodRepo(),
    'dev/oldtool': goodRepo({ archived: true }),
  });
  assert.equal(result.action, 'review');
  assert.match(result.notes.join('\n'), /dev\/oldtool is archived/);
});

test('decide states the facts once when a PR adds the same failing entry twice', () => {
  const head = withLine(AUDIT_ANCHOR, `${NEW_TOOL}\n${NEW_TOOL}`);
  const result = decideFor(head, { 'dev/newtool': goodRepo({ stargazers_count: 0 }) });
  assert.equal(result.action, 'close');
  assert.equal(result.comment.match(/The dev\/newtool repository/g).length, 1);
});

// Fake GitHub API: serves one PR and records every write.
function fakeGitHub({ headReadme, repo, pr = {} }) {
  const calls = [];
  const json = (body, status = 200) => new Response(JSON.stringify(body), { status });
  const fetchImpl = async (url, init) => {
    const path = url.replace('https://api.github.com', '');
    const token = init.headers.authorization.replace('Bearer ', '');
    if (init.method !== 'GET') {
      calls.push({ method: init.method, path, token, body: JSON.parse(init.body) });
      return json({});
    }
    if (path === `/repos/${REPO_SLUG}/pulls/7`) {
      return json({
        state: 'open',
        created_at: PR_CREATED,
        author_association: 'FIRST_TIME_CONTRIBUTOR',
        base: { sha: 'basesha', ref: 'gh-pages' },
        head: { sha: 'headsha' },
        ...pr,
      });
    }
    if (path.includes('/compare/')) return json({ merge_base_commit: { sha: 'mergebase' } });
    if (path.includes('/contents/README.md')) {
      return new Response(path.endsWith('ref=headsha') ? headReadme : BASE_README);
    }
    if (path === '/repos/dev/newtool') return repo ? json(repo) : json({}, 404);
    return json({}, 500);
  };
  return { calls, fetchImpl };
}

const runWith = (api, over = {}) =>
  run({
    token: 'repo-token',
    repoSlug: REPO_SLUG,
    prNumber: 7,
    dryRun: false,
    now: NOW,
    fetchImpl: api.fetchImpl,
    log: () => {},
    ...over,
  });

test('run comments, labels, and closes an ineligible PR without triggering a review', async () => {
  const api = fakeGitHub({ headReadme: withLine(AUDIT_ANCHOR, NEW_TOOL), repo: goodRepo({ stargazers_count: 0 }) });
  const result = await runWith(api);
  assert.equal(result.action, 'close');
  assert.deepEqual(
    api.calls.map((c) => [c.method, c.path]),
    [
      ['POST', `/repos/${REPO_SLUG}/issues/7/comments`],
      ['POST', `/repos/${REPO_SLUG}/issues/7/labels`],
      ['PATCH', `/repos/${REPO_SLUG}/issues/7`],
    ],
  );
  assert.deepEqual(api.calls[1].body, { labels: ['invalid'] });
  assert.deepEqual(api.calls[2].body, { state: 'closed' });
  assert.ok(api.calls.every((c) => !JSON.stringify(c.body).includes('@codex')));
});

test('run posts only the review trigger for an eligible PR', async () => {
  const api = fakeGitHub({ headReadme: withLine(AUDIT_ANCHOR, NEW_TOOL), repo: goodRepo() });
  await runWith(api);
  assert.equal(api.calls.length, 1);
  assert.deepEqual(api.calls[0].body, { body: CODEX_TRIGGER });
  assert.equal(api.calls[0].token, 'repo-token');
});

test('run posts the review trigger with the comment token when one is set', async () => {
  const api = fakeGitHub({ headReadme: withLine(AUDIT_ANCHOR, NEW_TOOL), repo: goodRepo() });
  await runWith(api, { commentToken: 'user-token' });
  assert.equal(api.calls[0].token, 'user-token');
});

test('run writes nothing in a dry run', async () => {
  const api = fakeGitHub({ headReadme: withLine(AUDIT_ANCHOR, NEW_TOOL), repo: goodRepo({ stargazers_count: 0 }) });
  const result = await runWith(api, { dryRun: true });
  assert.equal(result.action, 'close');
  assert.deepEqual(api.calls, []);
});

test('run skips a PR that is not open', async () => {
  const api = fakeGitHub({ headReadme: withLine(AUDIT_ANCHOR, NEW_TOOL), repo: goodRepo(), pr: { state: 'closed' } });
  const result = await runWith(api);
  assert.equal(result.action, 'skip');
  assert.deepEqual(api.calls, []);
});

test("run never closes a maintainer's PR", async () => {
  const api = fakeGitHub({
    headReadme: withLine(AUDIT_ANCHOR, NEW_TOOL),
    repo: goodRepo({ stargazers_count: 0 }),
    pr: { author_association: 'OWNER' },
  });
  const result = await runWith(api);
  assert.equal(result.action, 'review');
  assert.equal(api.calls.length, 1);
  assert.deepEqual(api.calls[0].body, { body: CODEX_TRIGGER });
});

test('run treats a repository the API cannot find as a maintainer decision', async () => {
  const api = fakeGitHub({ headReadme: withLine(AUDIT_ANCHOR, NEW_TOOL), repo: null });
  const result = await runWith(api);
  assert.equal(result.action, 'review');
});

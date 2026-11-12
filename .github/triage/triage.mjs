#!/usr/bin/env node
// Triage for pull requests that change README.md.
// Reads PR data through the GitHub API only; never checks out or runs PR code.

import { appendFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export const ELIGIBILITY_SECTIONS = ['Libraries', 'Tools', 'Languages', 'Editor Plugins'];
export const MIN_STARS = 10;
export const MIN_AGE_DAYS = 90;
export const MAX_INACTIVE_DAYS = 365;
export const CODEX_TRIGGER = '@codex review';

const DAY_MS = 24 * 60 * 60 * 1000;
const ENTRY_RE = /^\s*[-*]\s+\[([^\]]+)\]\(([^)\s]+)\)/;
const HEADING_RE = /^(#{2,6})\s+(.+?)\s*$/;
// First path segments on github.com that are not user or organization names.
const GITHUB_RESERVED = new Set([
  'orgs', 'sponsors', 'topics', 'marketplace', 'apps', 'features', 'about', 'collections', 'search',
]);

export function normalizeUrl(url) {
  return url
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\/(www\.)?/, '')
    .replace(/[#?].*$/, '')
    .replace(/\/+$/, '')
    .replace(/\.git$/, '');
}

// Returns {owner, repo} for a github.com repository URL, or null.
export function githubRepoFromUrl(url) {
  const m = /^https?:\/\/(?:www\.)?github\.com\/([^/?#]+)\/([^/?#]+)/i.exec(url.trim());
  if (!m || GITHUB_RESERVED.has(m[1].toLowerCase())) return null;
  return { owner: m[1], repo: m[2].replace(/\.git$/, '') };
}

// Returns one {name, url, section, subsection, line, raw} per list entry.
export function parseEntries(readme) {
  const entries = [];
  let section = null;
  let subsection = null;
  readme.split(/\r?\n/).forEach((raw, i) => {
    const heading = HEADING_RE.exec(raw);
    if (heading) {
      if (heading[1].length === 2) {
        section = heading[2];
        subsection = null;
      } else {
        subsection = heading[2];
      }
      return;
    }
    const entry = ENTRY_RE.exec(raw);
    if (entry && section) {
      entries.push({ name: entry[1], url: entry[2], section, subsection, line: i + 1, raw: raw.trim() });
    }
  });
  return entries;
}

// Entries that head adds relative to base. An added entry whose name matches a
// removed entry is an edit of that entry and is marked `modified`.
export function diffEntries(baseReadme, headReadme) {
  const base = parseEntries(baseReadme);
  const head = parseEntries(headReadme);
  const remaining = new Map();
  for (const e of base) remaining.set(e.raw, (remaining.get(e.raw) ?? 0) + 1);
  const added = [];
  for (const e of head) {
    const n = remaining.get(e.raw) ?? 0;
    if (n > 0) remaining.set(e.raw, n - 1);
    else added.push(e);
  }
  const removedNames = new Set(
    base.filter((e) => (remaining.get(e.raw) ?? 0) > 0).map((e) => e.name.toLowerCase()),
  );
  return added.map((e) => ({ ...e, modified: removedNames.has(e.name.toLowerCase()) }));
}

function plural(n, word) {
  return `${n} ${word}${n === 1 ? '' : 's'}`;
}

// Eligibility failures for a repository object from `GET /repos/{owner}/{repo}`.
// Each failure is a fact the API states outright; judgment calls stay with the reviewer.
export function evaluateRepo(repo, prCreatedAt, now = new Date()) {
  const failures = [];
  if (repo.stargazers_count < MIN_STARS) {
    failures.push(`has ${plural(repo.stargazers_count, 'star')} (minimum ${MIN_STARS})`);
  }
  const ageDays = Math.floor((new Date(prCreatedAt) - new Date(repo.created_at)) / DAY_MS);
  if (ageDays < MIN_AGE_DAYS) {
    const age = ageDays < 1 ? 'less than a day' : plural(ageDays, 'day');
    failures.push(`was created ${age} before this PR opened (minimum ${MIN_AGE_DAYS} days)`);
  }
  if (!repo.license) failures.push("doesn't declare a license");
  if (repo.archived) failures.push('is archived');
  if (repo.disabled) failures.push('is disabled');
  const idleDays = Math.floor((now - new Date(repo.pushed_at)) / DAY_MS);
  if (idleDays > MAX_INACTIVE_DAYS) failures.push(`has had no push in ${idleDays} days (maximum ${MAX_INACTIVE_DAYS})`);
  return failures;
}

function joinFacts(facts) {
  if (facts.length <= 1) return facts.join('');
  if (facts.length === 2) return facts.join(' and ');
  return `${facts.slice(0, -1).join(', ')}, and ${facts.at(-1)}`;
}

// Decides what to do with a PR.
//   added:        output of diffEntries(mergeBaseReadme, headReadme)
//   currentReadme: README.md at the tip of the base branch
//   repos:        Map of "owner/repo" (lowercase) -> repository object, or null if the lookup failed
// Returns {action: 'close'|'review', label, comment, notes}. Closes only when
// every new entry fails; a PR with at least one sound entry goes to review.
export function decide({ added, currentReadme, repos, prCreatedAt, repoSlug, now = new Date() }) {
  const notes = [];
  const duplicates = [];
  const ineligible = [];
  let sound = 0;
  const listed = new Set(parseEntries(currentReadme).map((e) => normalizeUrl(e.url)));
  const seen = new Set();

  for (const entry of added) {
    if (entry.modified) {
      notes.push(`\`${entry.name}\`: edit of an existing entry; eligibility not checked.`);
      sound += 1;
      continue;
    }
    const key = normalizeUrl(entry.url);
    if (seen.has(key)) {
      notes.push(`\`${entry.name}\`: the PR adds ${entry.url} more than once.`);
      continue;
    }
    seen.add(key);
    if (listed.has(key)) {
      duplicates.push(entry);
      notes.push(`\`${entry.name}\`: ${entry.url} is already listed in README.md.`);
      continue;
    }
    sound += 1;
    if (!ELIGIBILITY_SECTIONS.includes(entry.section)) {
      notes.push(`\`${entry.name}\`: new entry in ${entry.section}; exempt from repository eligibility.`);
      continue;
    }
    const gh = githubRepoFromUrl(entry.url);
    if (!gh) {
      notes.push(`\`${entry.name}\`: ${entry.url} isn't a GitHub repository link; needs a maintainer decision.`);
      continue;
    }
    const slug = `${gh.owner}/${gh.repo}`;
    const repo = repos.get(slug.toLowerCase());
    if (!repo) {
      notes.push(`\`${entry.name}\`: couldn't read ${slug} through the GitHub API; needs a maintainer decision.`);
      continue;
    }
    const failures = evaluateRepo(repo, prCreatedAt, now);
    if (failures.length) {
      ineligible.push({ entry, slug, failures });
      sound -= 1;
      notes.push(`\`${entry.name}\`: ${slug} ${joinFacts(failures)}.`);
    } else {
      notes.push(`\`${entry.name}\`: ${slug} passes the repository checks (${plural(repo.stargazers_count, 'star')}, license ${repo.license.spdx_id}).`);
    }
    if (repo.license?.spdx_id === 'NOASSERTION') {
      notes.push(`\`${entry.name}\`: GitHub doesn't recognize the license of ${slug}; check it by hand.`);
    }
  }
  if (!added.length) notes.push('No new list entries found in README.md.');

  const guide = `https://github.com/${repoSlug}/blob/HEAD/CONTRIBUTING.md#project-eligibility`;
  if (sound > 0 || (!ineligible.length && !duplicates.length)) {
    return { action: 'review', label: null, comment: CODEX_TRIGGER, notes };
  }
  if (ineligible.length) {
    const sections = [...new Set(ineligible.map((i) => i.entry.section))].join(' and ');
    const facts = ineligible.map((i) => `The ${i.slug} repository ${joinFacts(i.failures)}.`).join(' ');
    return {
      action: 'close',
      label: 'invalid',
      notes,
      comment:
        `Thanks for your contribution. New ${sections} entries must come from projects that meet the ` +
        `[project eligibility requirements](${guide}). ${facts} Closing this PR. ` +
        'You can resubmit after the project meets the contribution requirements.',
    };
  }
  if (duplicates.length) {
    const urls = joinFacts(duplicates.map((d) => d.url));
    return {
      action: 'close',
      label: 'duplicate',
      notes,
      comment:
        `Thanks for your contribution. ${urls} ${duplicates.length === 1 ? 'is' : 'are'} already listed in ` +
        'README.md, so this PR duplicates an existing entry. Closing this PR.',
    };
  }
}

function client(token, fetchImpl = fetch) {
  return async function gh(method, path, { body, raw = false } = {}) {
    const res = await fetchImpl(`https://api.github.com${path}`, {
      method,
      headers: {
        authorization: `Bearer ${token}`,
        accept: raw ? 'application/vnd.github.raw' : 'application/vnd.github+json',
        'x-github-api-version': '2022-11-28',
        'user-agent': 'awesome-list-triage',
        ...(body ? { 'content-type': 'application/json' } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) {
      const err = new Error(`${method} ${path} -> ${res.status}`);
      err.status = res.status;
      throw err;
    }
    return raw ? res.text() : res.json();
  };
}

// Fetches everything `decide` needs for one PR.
export async function gather({ gh, repoSlug, prNumber }) {
  const pr = await gh('GET', `/repos/${repoSlug}/pulls/${prNumber}`);
  const compare = await gh('GET', `/repos/${repoSlug}/compare/${pr.base.sha}...${pr.head.sha}`);
  const readme = (ref) => gh('GET', `/repos/${repoSlug}/contents/README.md?ref=${ref}`, { raw: true });
  const [mergeBaseReadme, headReadme, currentReadme] = await Promise.all([
    readme(compare.merge_base_commit.sha),
    readme(pr.head.sha),
    readme(encodeURIComponent(pr.base.ref)),
  ]);
  const added = diffEntries(mergeBaseReadme, headReadme);
  const repos = new Map();
  for (const entry of added) {
    const target = githubRepoFromUrl(entry.url);
    if (!target) continue;
    const slug = `${target.owner}/${target.repo}`.toLowerCase();
    if (repos.has(slug)) continue;
    try {
      repos.set(slug, await gh('GET', `/repos/${target.owner}/${target.repo}`));
    } catch (err) {
      if (err.status !== 404 && err.status !== 451) throw err;
      repos.set(slug, null);
    }
  }
  return { pr, added, mergeBaseReadme, currentReadme, repos };
}

export async function run({ token, commentToken, repoSlug, prNumber, dryRun, now = new Date(), fetchImpl = fetch, log = console.log }) {
  const gh = client(token, fetchImpl);
  const { pr, added, currentReadme, repos } = await gather({ gh, repoSlug, prNumber });
  if (pr.state !== 'open') {
    log(`PR ${prNumber} is ${pr.state}; nothing to do.`);
    return { action: 'skip', notes: [`PR is ${pr.state}.`] };
  }
  const result = decide({ added, currentReadme, repos, prCreatedAt: pr.created_at, repoSlug, now });
  // Never close a maintainer's own PR.
  if (result.action === 'close' && ['OWNER', 'MEMBER', 'COLLABORATOR'].includes(pr.author_association)) {
    result.notes.push(`Would close, but the author is a ${pr.author_association}: ${result.comment}`);
    result.action = 'review';
    result.label = null;
    result.comment = CODEX_TRIGGER;
  }
  log(`PR ${prNumber}: ${result.action}${dryRun ? ' (dry run)' : ''}`);
  for (const note of result.notes) log(`  note: ${note}`);
  log(`  comment: ${result.comment}`);
  if (dryRun) return result;

  const issue = `/repos/${repoSlug}/issues/${prNumber}`;
  if (result.action === 'close') {
    await gh('POST', `${issue}/comments`, { body: { body: result.comment } });
    await gh('POST', `${issue}/labels`, { body: { labels: [result.label] } });
    await gh('PATCH', issue, { body: { state: 'closed' } });
  } else {
    const commenter = commentToken ? client(commentToken, fetchImpl) : gh;
    await commenter('POST', `${issue}/comments`, { body: { body: result.comment } });
  }
  return result;
}

function summarize(prNumber, dryRun, result) {
  const lines = [`### PR ${prNumber}: ${result.action}${dryRun ? ' (dry run)' : ''}`, ''];
  for (const note of result.notes) lines.push(`- ${note}`);
  if (result.comment) lines.push('', '**Comment**', '', `> ${result.comment}`);
  return `${lines.join('\n')}\n`;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const { GITHUB_TOKEN, CODEX_TRIGGER_TOKEN, GITHUB_REPOSITORY, PR_NUMBER, DRY_RUN, GITHUB_STEP_SUMMARY } = process.env;
  if (!GITHUB_TOKEN || !GITHUB_REPOSITORY || !/^\d+$/.test(PR_NUMBER ?? '')) {
    console.error('Set GITHUB_TOKEN, GITHUB_REPOSITORY, and a numeric PR_NUMBER.');
    process.exit(2);
  }
  const dryRun = DRY_RUN !== 'false';
  const result = await run({
    token: GITHUB_TOKEN,
    commentToken: CODEX_TRIGGER_TOKEN || undefined,
    repoSlug: GITHUB_REPOSITORY,
    prNumber: Number(PR_NUMBER),
    dryRun,
  });
  if (GITHUB_STEP_SUMMARY) appendFileSync(GITHUB_STEP_SUMMARY, summarize(PR_NUMBER, dryRun, result));
}

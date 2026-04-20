# AGENTS.md

This file provides guidance to AI coding agents working with code in this repository.

## Repository purpose

`awesome-solidity` is a curated "awesome list" of Solidity resources, libraries, and tools. The entire content of the list lives in a single file: `README.md`. There is no application code — PRs almost always add, remove, re-order, or re-categorize one line in `README.md`.

The repo is served as a GitHub Pages Jekyll site (`_config.yml` sets `theme: jekyll-theme-cayman`). The default branch is `gh-pages` (not `main`/`master`); open PRs against `gh-pages`.

## CI: link validation

The only CI check is `.github/workflows/build.yml` (workflow name: `URLs`). On every push and PR it runs [`awesome_bot`](https://github.com/dkhamsing/awesome_bot) against `README.md`:

```bash
gem install awesome_bot
awesome_bot README.md --allow-redirect --request-delay 0.2
```

Run that command locally before committing when adding/changing links — a single dead URL fails the build. `awesome_bot` occasionally flags transient 4xx/5xx from rate limiting; re-running usually clears it.

## Entry format and ordering (enforced by review, not CI)

From `CONTRIBUTING.md` — match these exactly or reviewers will push back:

- Format: `- [name](link) - Description.`
- Description starts with a capital letter and ends with a period.
- Entries are **alphabetical** within their category. When adding one, find its slot by name (case-insensitive, ignoring leading `@`/punctuation) rather than appending to the end.
- One suggestion per PR.
- New categories are allowed but should mirror the existing two-level structure (H2 category, H4 sub-category) visible in the TOC near the top of `README.md`.

## Section structure

Top-level sections in `README.md` (kept in sync with the TOC at the top of the file):

- `Resources` — Official, Tutorials, Articles, Security (+ Audits), Examples (Educational, Deployed on Ethereum Mainnet), Templates, Books, Practice, Jobs
- `Libraries`
- `Tools` — General, Utility, Audit, DevOps
- `Languages` — JavaScript, TypeScript, Rust, OCaml (bindings/tooling written in these host languages)
- `Editor Plugins` — Eclipse, Emacs, IntelliJ, Sublime, Vim, Visual Studio Code

When placing a new entry, pick the most specific existing sub-category; only create a new one if nothing fits. The TOC anchors must stay in sync with section headings.

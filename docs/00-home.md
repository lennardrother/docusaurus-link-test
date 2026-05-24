---
sidebar_position: 0
id: home
---

# Link Test

This page lives at `docs/00-home.md` with `id: home`.

Its **file path** is `docs/00-home.md` but its **URL** is `/home` (the `id` replaces the filename segment `00-home`).

This mismatch is what causes broken links: a relative URL like `./page-a` is resolved by the browser against the current URL `/home/`, producing `/home/page-a` instead of `/page-a`.

## Links to Page A

`page-a.md` has `id: page-a` and lives at `docs/page-a.md`. Its URL is `/page-a`.

| Style | Example | Works? |
|-------|---------|--------|
| Relative URL (no extension) | `[link](./page-a)` | ❌ breaks in production (resolves to `/home/page-a`) |
| Absolute URL | `[link](/page-a)` | ✅ works, but no build-time validation |
| Relative file path (.md) | `[link](./page-a.md)` | ✅ works, build-time validated |
| Linking by `id` | not possible in Markdown | ❌ `id` is not a link target syntax |

## Try them

- [relative-url](./page-a) ← breaks in prod
- [absolute-url](/page-a)
- [relative-file](./page-a.md)

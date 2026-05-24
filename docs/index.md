---
sidebar_position: 0
id: index
---

# Link Test — Index

This repo demonstrates how Docusaurus resolves inline Markdown links differently depending on the link style used.

The key scenario: a page whose `id:` differs from its filename (e.g. `00-home.md` with `id: home`) gets a URL that doesn't match its file location. This causes relative URL links (no `.md` extension) to break in production.

Go to the **[Link Test page](./00-home.md)** to see all variants.

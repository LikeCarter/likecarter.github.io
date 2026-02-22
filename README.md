# LikeCarter

Personal blog built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages. There is no CSS -- this is deliberate. The site renders as plain, unstyled HTML.

## Getting started

```
git clone https://github.com/likecarter/likecarter.github.io.git
cd likecarter.github.io
npm install
npm start
```

`npm start` runs a local dev server with live reload at `http://localhost:8080`.

`npm run build` generates the static site into `_site/`.

## Fork this

1. Fork this repo
2. Rename it to `<your-username>.github.io`
3. In your repo settings, go to **Pages** and set the source to **GitHub Actions**
4. Push to `main` -- the site deploys automatically

Add new posts as markdown files in `src/blog/`. Include front matter:

```yaml
---
title: "Your Post Title"
date: 2025-01-01
layout: post.njk
tags: post
---
```

Inline math is supported via KaTeX: `$E = mc^2$`.
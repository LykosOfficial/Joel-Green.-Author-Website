# Joel Green — author website

**Live site:** [joelgreenauthor.com](https://joelgreenauthor.com)

The home page of Joel Green, *world architect, mythologist, aspiring novelist*, currently writing **The Halo**, book one of the Astroseed Trilogy: a near-future sci-fi thriller about corporate power, survival, and a truth that costs everything.

It's a single, minimal dark page: the "JOEL GREEN." wordmark, a short introduction, a biography, and a **live writing-progress bar** showing how far along *The Halo* is.

Its companion site is Joel's writing blog, [The Creative Panel](https://joelgreen.studio) ([repo](https://github.com/LykosOfficial/The-Creative-Panel---Blog)).

## Features

- **Live word count.** The progress bar reads *The Halo*'s word count and target from the project's API, which Joel updates in his admin portal. The number is built into the page, then refreshed in the visitor's browser, so a new count shows up straight away without redeploying. If the API is unreachable, the page keeps the last known numbers.
- **SEO basics**: title, description, canonical URL, Open Graph/Twitter tags and a sitemap.
- **JG. monogram favicon** in the brand's gold and teal, with PNG versions for older browsers and iPhone home screens.

## Tech

- [Astro](https://astro.build) 7 (static output), [Tailwind CSS](https://tailwindcss.com) v4
- Hosted on **Cloudflare Pages**; every push to `main` rebuilds and deploys

## Running it locally

```bash
pnpm install
pnpm dev          # http://localhost:4322
```

The word count comes from `PUBLIC_API_URL`, which defaults to the live API (`https://api.joelgreen.studio`). Point it at a local API in a `.env` file if needed.

## Credits

Designed, written and directed by **Joel Green**: the concept, look and feel, content and product decisions are his.

Parts of the code, including the live word count and the favicon, were written with **[Claude Code](https://claude.com/claude-code)**, Anthropic's AI coding assistant, working as a pair programmer under Joel's direction. Commits made with its help are marked with a `Co-Authored-By: Claude` line.

Claude Code's role was to help get this first build designed, built and launched. **From here on, all updates to the site go through Joel**, who owns and maintains it.

## License

The code is released under the [MIT License](LICENSE). The writing, book titles, characters and other creative content are © Joel Green and are not covered by that license.

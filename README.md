# Phenotract

Website for Phenotract (Eric Shans), built with Astro and Tailwind CSS.

## Editing

Everything you'd normally change is in `src/data/site.ts`:

- **Bio:** the `bio` list, one string per paragraph.
- **Releases:** add an entry to `releases` (newest first) and drop the cover into `src/assets/releases/`.
- **Photos:** add an entry to `photos` and drop the image into `src/assets/photos/`.
- **Social links:** `socials`.

Images are resized and converted to WebP automatically when the site is built.

## Commands

```
npm install       # once
npm run dev       # local preview at http://localhost:4321
npm run build     # type-check and build into dist/
npm run deploy    # build and upload to Cloudflare Pages
```

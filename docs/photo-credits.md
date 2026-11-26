# Photo credits

All photography on this site is Jonathan's own. There is no stock imagery.

| File | Subject | Where it is used |
| --- | --- | --- |
| `public/photos/founder/jonathan-about.jpg` | Portrait | Home hero, about hero, `Person.image` and the practice `image` in JSON-LD |
| `public/photos/frames/cartier-panther-detail.webp` | Gold rimless Cartier frame, panther temple detail | Optical page, via `src/content/photos.ts` |
| `public/photos/frames/rayban-temple-markings.webp` | Black Ray-Ban acetate frame, temple markings | Optical page, via `src/content/photos.ts` |
| `public/photos/frames/cartier-rimless-symmetry.webp` | Gold rimless Cartier frame, symmetry | Via `src/content/photos.ts` |
| `public/photos/frames/cartier-rimless-angle.webp` | Gold rimless Cartier frame, angle | Via `src/content/photos.ts` |
| `public/photos/frames/cartier-rimless-front.webp`, `cartier-rimless-overhead.webp`, `rayban-acetate-shadow.webp` | Further frame photographs | In the repo, not yet placed on a page |

The frame photographs date from the optical years. They were normalized before
committing: sRGB, EXIF and ICC stripped, longest edge capped at 2400px,
re-encoded to WebP.

Several frames carry visible maker marks. They are photographs of product
handled during that job, not a claim of any current relationship with either
brand.

The share cards (`/opengraph-image`, `/twitter-image`) are drawn in code from
`src/lib/og-card.tsx` and use no photograph.

Earlier versions of this file listed a story photo set and a screenshot of the
On-Sight Optics home page. Both were dropped with the redesign merge and are no
longer in the repo.

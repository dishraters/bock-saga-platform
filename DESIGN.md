# Design

## Visual Direction

Mood: northern field archive at dusk, lichen, granite, dark water, and hand-labeled evidence tables.

The site should look like a serious learning archive with a mythic charge underneath it. It should not look like a fantasy game, wellness brand, or paranormal blog. Visitors should feel that the material has been organized with care, that claims are labeled responsibly, and that the site can grow into a searchable knowledge system.

## Color System

Use OKLCH tokens only.

```css
:root {
  --bg: oklch(0.985 0.006 130);
  --surface: oklch(0.955 0.012 130);
  --surface-deep: oklch(0.180 0.028 130);
  --ink: oklch(0.160 0.018 130);
  --muted: oklch(0.430 0.024 130);
  --primary: oklch(0.390 0.118 130);
  --primary-bright: oklch(0.550 0.142 130);
  --accent: oklch(0.620 0.145 42);
  --accent-dark: oklch(0.300 0.090 42);
  --line: oklch(0.830 0.018 130);
  --warn: oklch(0.580 0.115 64);
}
```

Strategy: restrained archive surfaces with committed olive and ochre accents. Use dark moss as the main brand color, ochre for wayfinding and emphasis, and pure readability for body text.

## Typography

- Display: `Cormorant Garamond` for hero and major editorial headings.
- Body: `Inter` for readable explanatory text.
- Mono: `IBM Plex Mono` for labels, chronology, metadata, and search results.

Use large display type sparingly. The page should feel curated, not theatrical.

## Layout

- Header: compact, sticky, with direct routes to Learn, Timeline, Blog, Search, and Ask.
- Home: editorial hero, guided topic paths, book feature, timeline strip, learning modules, search entry, AI assistant placeholder.
- Learning Center: topic cards grouped by concept, history, mythology, people, language, and resources.
- Blog: scalable article grid with tags and metadata.
- Search: client-side search over seeded content for the first version.
- AI Assistant: placeholder interface that explains what the assistant will do later.

## Components

- Evidence note: small callout that labels content as "Bock Saga tradition", "Carl's memoir", "Press / media", or "Mainstream context needed".
- Topic card: compact learning entry with title, summary, category, and suggested next link.
- Timeline row: chronological, scan-friendly, no decorative numbering unless the date carries the order.
- Search result: title, type, excerpt, tags.
- Assistant panel: question input placeholder, example prompts, and integration note.

## Motion

Use subtle reveal and hover states only. Respect reduced motion. Do not hide content behind animation.

## Image Direction

Use original generated or abstract assets. Visual themes: northern landscapes, stone, old maps, roots, sound marks, oral transmission, sacred geometry, and archive material. Avoid copied book covers or existing artwork unless permission exists.

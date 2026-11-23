## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Styling

- Lean on Tailwind utility classes as much as possible for styling.
- Use semantic design tokens for colors and other themed values instead of raw palette values or hard-coded colors.
- Use `cn` to combine and Tailwind-merge class names. Split long class strings into readable groups passed to `cn`.
- Avoid Astro `class:list` when combining classes that may conflict; use `cn` so Tailwind utilities are merged consistently.
- Do not make unrequested typography changes. When using typography CVA variants, keep their configured leading; do not override or adjust line-height with additional classes.
- Use scoped component CSS for component-specific keyframes or behavior that does not fit Tailwind utilities; use `src/styles/global.css` for shared styles and animation definitions.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

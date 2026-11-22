---
name: add-bookmark
description: Turn a supplied web link into a complete bookmark entry and add it to this repository's bookmark collection.
---

# Add a bookmark from a link

Use this skill when the user shares a link and wants it added to the site's bookmarks.

The site stores bookmarks in `src/data/bookmarks.json`. Each entry has exactly these fields, as defined in `src/data/bookmarks.types.ts`:

```json
{
  "title": "Page title",
  "url": "https://example.com/page",
  "description": "A concise description of the linked resource."
}
```

For each supplied link:

1. Open the page and use its content and metadata to identify what it is. Prefer the page's own title, cleaned up for readability. Write a concise, specific description of the resource based on the page itself; do not invent features or copy a generic site-wide tagline when it does not describe the linked page.
2. Keep the supplied destination URL, including its path and query parameters. Do not replace it with a guessed canonical URL. If the link cannot be opened, use reliable information visible in the URL or search results and leave unknown details out rather than guessing.
3. Read `src/data/bookmarks.json`. If that URL is already present, update its title or description only when the new information is clearly better; otherwise leave the existing entry alone. For a new link, insert its object at the beginning of the array so the newest bookmark appears first, using the existing formatting and field order. For multiple new links, preserve the order the user supplied, with the first supplied link at the top.
4. Preserve every other bookmark and ensure the file remains valid JSON with all three string fields present.

When multiple links are supplied, create one entry for each. Report which links were added or already present, and mention any link whose details could not be verified.

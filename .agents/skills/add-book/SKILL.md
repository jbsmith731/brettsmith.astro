---
name: add-book
description: Find book metadata from an ISBN or title, save a sourced book record, and download its cover into the site.
---

# Add a book

Use this skill when the user wants to add a book to this site's collection. Accept an ISBN or title; a title may be accompanied by an author or edition clue. Assume the status is `not started` unless the user specifies otherwise.

Store records in `src/data/books.json` as a JSON object grouped by the calendar year the book is added. Each year key maps to an array of book records. Put a new book at the beginning of the current year's array, and keep year keys ordered newest first. Save downloaded cover images under `public/books/` and reference them from the record using a root-relative path such as `/books/9780123456789.jpg`. Create these paths when needed; preserve existing records and their order when adding or updating a book.

## Find and verify the book

1. For an ISBN, query Google Books using the exact ISBN. For a title, search Google Books by title and author when available. Use `GOOGLE_BOOKS_API_KEY` from the environment if configured; never print or save the key. The API can return title, subtitle, authors, description, categories, identifiers, publication details, and cover image links.
2. Use Open Library's ISBN/edition API as a fallback for missing metadata or cover art. Its edition records can provide ISBNs, publishers, publication details, subjects, and cover identifiers. Prefer the source's own categories/subjects; do not invent genres. If the sources disagree or candidate editions are ambiguous, ask the user to choose before saving.
3. Clean HTML from descriptions while preserving readable paragraph breaks. Omit fields that could not be verified instead of guessing. Keep metadata concise and faithful to the source.
4. Download the best available cover image to `public/books/`. Prefer the edition matching the supplied ISBN; use a stable filename based on ISBN-13, then ISBN-10, then a normalized title. Verify the download is an image and is non-empty. Record its local path, original URL, and provider. If downloading fails, leave the cover path empty and report that; never hotlink it as the site's image.

Use the small Node helpers in this skill's `scripts/` directory for repeatable API and image requests:

- `node .agents/skills/add-book/scripts/lookup-book.mjs isbn <ISBN>` or `title <title>` prints up to ten Google Books candidates as JSON. Set `GOOGLE_BOOKS_API_KEY` in the environment when available.
- After confirming the edition, run `node .agents/skills/add-book/scripts/download-cover.mjs <image-url> <filename>` to save its cover under `public/books/`. Use a filename based on the confirmed ISBN when available.

Inspect the candidate JSON and verify the edition before using it. The helpers do not write or update the books JSON file.

## Record shape

Each year group contains records with this shape, omitting unknown optional properties. Keep author and genre/category values as arrays. Keep provider terms as returned and record their sources rather than silently translating them.

```json
{
  "2026": [
    {
      "title": "Book title",
      "subtitle": "Optional subtitle",
      "authors": ["Author Name"],
      "genres": ["Source category or subject"],
      "description": "Verified synopsis",
      "identifiers": {
        "isbn10": "Optional ISBN-10",
        "isbn13": "Optional ISBN-13"
      },
      "publication": {
        "publisher": "Optional publisher",
        "date": "Optional publication date as provided",
        "format": "Optional format",
        "pages": 0,
        "language": "Optional language code",
        "series": "Optional series",
        "seriesNumber": "Optional series position"
      },
      "status": "not started",
      "cover": {
        "path": "/books/9780123456789.jpg",
        "sourceUrl": "Original cover URL",
        "source": "Google Books or Open Library"
      },
      "sources": [
        { "provider": "Google Books", "url": "Source record URL" }
      ],
      "retrievedAt": "ISO 8601 date"
    }
  ]
}
```

Use one of these status values: `not started`, `reading`, `did not finish`, or `complete`. Preserve a user-specified status. Optional reading dates or notes may be added only when the user supplies them. Do not add ratings or personal opinions on the user's behalf.

Determine the current calendar year when adding a book; do not use its publication year for grouping. When adding a duplicate, match across all year groups by ISBN-13, ISBN-10, or a verified title/author/edition combination. Update only with better verified information and retain user-entered status, notes, and reading dates; do not move an existing record between year groups. After saving, summarize the match, selected edition, year group, position, status, cover path, and any metadata that could not be found.

#!/usr/bin/env node

const [kind, ...inputParts] = process.argv.slice(2);
const input = inputParts.join(" ").trim();

if (kind === "--help") {
	console.log("Usage: node lookup-book.mjs <isbn|title> <value>");
	process.exit(0);
}

if (!["isbn", "title"].includes(kind) || !input) {
	console.error("Usage: node lookup-book.mjs <isbn|title> <value>");
	process.exit(1);
}

const query = kind === "isbn" ? `isbn:${input}` : `intitle:${input}`;
const url = new URL("https://www.googleapis.com/books/v1/volumes");
url.searchParams.set("q", query);
url.searchParams.set("maxResults", "10");

if (process.env.GOOGLE_BOOKS_API_KEY) {
	url.searchParams.set("key", process.env.GOOGLE_BOOKS_API_KEY);
}

const response = await fetch(url);
if (!response.ok) {
	console.error(`Google Books request failed: ${response.status} ${response.statusText}`);
	process.exit(1);
}

const data = await response.json();
const books = (data.items ?? []).map(({ id, volumeInfo = {} }) => ({
	googleBooksId: id,
	title: volumeInfo.title,
	subtitle: volumeInfo.subtitle,
	authors: volumeInfo.authors,
	description: volumeInfo.description,
	categories: volumeInfo.categories,
	identifiers: volumeInfo.industryIdentifiers,
	publisher: volumeInfo.publisher,
	publishedDate: volumeInfo.publishedDate,
	pageCount: volumeInfo.pageCount,
	language: volumeInfo.language,
	imageLinks: volumeInfo.imageLinks,
	infoLink: volumeInfo.infoLink,
	canonicalVolumeLink: volumeInfo.canonicalVolumeLink,
}));

console.log(JSON.stringify({ totalItems: data.totalItems ?? 0, books }, null, 2));

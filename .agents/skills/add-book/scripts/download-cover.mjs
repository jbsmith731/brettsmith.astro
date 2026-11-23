#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const [imageUrl, filename] = process.argv.slice(2);

if (imageUrl === "--help") {
	console.log("Usage: node download-cover.mjs <image-url> <filename.jpg|png|webp>");
	process.exit(0);
}

if (!imageUrl || !filename || !/^[\w.-]+\.(?:jpe?g|png|webp)$/i.test(filename)) {
	console.error("Usage: node download-cover.mjs <image-url> <filename.jpg|png|webp>");
	process.exit(1);
}

const response = await fetch(imageUrl);
if (!response.ok) {
	console.error(`Cover request failed: ${response.status} ${response.statusText}`);
	process.exit(1);
}

if (!response.headers.get("content-type")?.startsWith("image/")) {
	console.error("The response is not an image.");
	process.exit(1);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const publicBooksDir = resolve(scriptDir, "../../../../public/books");
const coverPath = resolve(publicBooksDir, filename);
const bytes = Buffer.from(await response.arrayBuffer());

if (bytes.length === 0) {
	console.error("The downloaded image is empty.");
	process.exit(1);
}

await mkdir(publicBooksDir, { recursive: true });
await writeFile(coverPath, bytes);
console.log(`/books/${filename}`);

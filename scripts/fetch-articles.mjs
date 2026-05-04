import Parser from "rss-parser";
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FEED_URL = "https://medium.com/feed/@faizhameed";
const ARTICLES_PATH = resolve(__dirname, "../src/data/articles.json");

function extractImage(content) {
  const imgRegex = /<img[^>]*src="([^"]+)"[^>]*>/g;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const tag = match[0];
    const src = match[1];
    // Skip 1x1 tracking pixels
    if (tag.includes('width="1"') || src.includes("/_/stat")) continue;
    return src;
  }
  return null;
}

function decodeEntities(str) {
  return str
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(code))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function extractExcerpt(content, maxLength = 200) {
  const text = decodeEntities(
    content?.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() ?? ""
  );
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

function cleanUrl(url) {
  return url?.split("?")[0] ?? url;
}

async function main() {
  const parser = new Parser();

  // Load existing articles
  let existing = [];
  try {
    existing = JSON.parse(readFileSync(ARTICLES_PATH, "utf-8"));
  } catch {
    // File doesn't exist yet — that's fine
  }

  const existingUrls = new Set(existing.map((a) => a.url));

  // Fetch RSS feed
  console.log("Fetching Medium RSS feed...");
  const feed = await parser.parseURL(FEED_URL);

  let added = 0;
  for (const item of feed.items) {
    const url = cleanUrl(item.link);
    if (existingUrls.has(url)) continue;

    existing.push({
      title: item.title,
      url,
      publishedDate: new Date(item.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      date: item.pubDate,
      excerpt: extractExcerpt(item["content:encoded"] || item.content),
      image: extractImage(item["content:encoded"] || item.content),
    });
    added++;
  }

  // Sort newest first
  existing.sort((a, b) => new Date(b.date) - new Date(a.date));

  writeFileSync(ARTICLES_PATH, JSON.stringify(existing, null, 2) + "\n");
  console.log(
    `Done. ${added} new article(s) added. Total: ${existing.length}.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
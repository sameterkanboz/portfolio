import { readFileSync } from "node:fs";

const PAGES = { en: ".next/server/app/index.html" };
const BANNED = [/—/, /–(?! \d)/, /\[your /i, /lorem ipsum/i];
const errors = [];

for (const [lang, file] of Object.entries(PAGES)) {
  const html = readFileSync(file, "utf8");
  const fail = (message) => errors.push(`${lang}: ${message}`);
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  const description =
    html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  const text = html
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, " ");

  if (!html.includes(`<html lang="${lang}"`)) fail("wrong html lang");
  if ((html.match(/<h1[ >]/g) ?? []).length !== 1) fail("needs exactly one h1");
  if (title.length < 20 || title.length > 60) fail(`title is ${title.length} chars`);
  if (description.length < 120 || description.length > 160)
    fail(`description is ${description.length} chars`);
  if (!html.includes("mailto:")) fail("no email link");
  for (const pattern of BANNED) {
    if (pattern.test(text)) fail(`banned text ${pattern}`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("check-build: ok");

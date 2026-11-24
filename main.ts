/**
 * Hands the gate the one thing it reads from this repository: the address of the
 * X post this entry is.
 *
 * Everything that decides the place — the replies, reposts and quotes — is read
 * by the house from X itself, so the program has no work beyond publishing
 * POST.json where the grader looks for it (MAKEFUN_OUTPUT_DIR, `/output` inside
 * the container). It reads no clock, opens no socket and writes no second file,
 * which is what lets the grader's two runs agree byte for byte.
 *
 * Node 22, standard library only.
 */
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const manifest = join(botDir, "POST.json");

/**
 * Reads POST.json and proves it names a post before anything is published.
 *
 * The gate refuses a placeholder, an empty string and a bare handle, and a
 * refusal costs the account its one entry for this bounty, so the shape is
 * checked here rather than discovered there. The address may be x.com or
 * twitter.com and must carry a numeric id of at least fifteen digits — the
 * shortest id X has issued in years.
 */
function readAddress(): string {
  const raw = readFileSync(manifest, "utf8");
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`POST.json is not JSON: ${(error as Error).message}`);
  }
  if (typeof parsed !== "object" || parsed === null) {
    throw new Error("POST.json is not a JSON object");
  }
  const url = (parsed as { url?: unknown }).url;
  if (typeof url !== "string" || url.trim() === "") {
    throw new Error("POST.json carries no url");
  }
  const match = /^https?:\/\/(?:www\.)?(?:x|twitter)\.com\/[A-Za-z0-9_]{1,15}\/status\/(\d{15,25})\/?(?:\?.*)?$/.exec(url.trim());
  if (!match) {
    throw new Error(`POST.json names no X post: ${url}`);
  }
  return url.trim();
}

function main(): void {
  const url = readAddress();
  mkdirSync(outDir, { recursive: true });
  copyFileSync(manifest, join(outDir, "POST.json"));
  process.stderr.write(`published ${url}\n`);
}

try {
  main();
} catch (error) {
  process.stderr.write(`entry: ${error instanceof Error ? error.message : error}\n`);
  process.exit(1);
}

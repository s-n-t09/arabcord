import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const args = process.argv.slice(2);
const siteIndex = args.indexOf("--site");
const siteDir = siteIndex === -1 ? null : resolve(projectRoot, args[siteIndex + 1]);

function fail(message) {
  console.error(`Verification failed: ${message}`);
  process.exit(1);
}

function requireFile(path) {
  if (!existsSync(path)) fail(`missing file: ${path}`);
}

function sha256(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

const distDir = join(projectRoot, "dist", "arabcord");
const distIndex = join(distDir, "index.js");
const distManifest = join(distDir, "manifest.json");
requireFile(distIndex);
requireFile(distManifest);

let manifest;
try {
  manifest = JSON.parse(readFileSync(distManifest, "utf8"));
} catch (error) {
  fail(`manifest is not valid JSON: ${error.message}`);
}

if (manifest.main !== "index.js") fail(`manifest.main must be index.js, got ${manifest.main}`);
if (!manifest.hash || !/^[a-f0-9]{64}$/.test(manifest.hash)) {
  fail("manifest.hash must be a 64-character SHA-256 hex digest");
}

const actualHash = sha256(distIndex);
if (manifest.hash !== actualHash) {
  fail(`manifest hash mismatch: expected ${manifest.hash}, actual ${actualHash}`);
}

if (siteDir) {
  const allowed = new Set(["index.html", "index.js", "manifest.json", "SHA256SUMS.txt"]);
  for (const entry of readdirSync(siteDir, { withFileTypes: true })) {
    if (!allowed.has(entry.name) || !entry.isFile()) {
      fail(`unexpected item in Pages output: ${entry.name}`);
    }
  }

  const siteIndexJs = join(siteDir, "index.js");
  const siteManifest = join(siteDir, "manifest.json");
  requireFile(siteIndexJs);
  requireFile(siteManifest);

  if (sha256(siteIndexJs) !== manifest.hash) {
    fail("Pages index.js does not match the manifest hash");
  }

  const siteManifestData = JSON.parse(readFileSync(siteManifest, "utf8"));
  if (siteManifestData.hash !== manifest.hash) {
    fail("Pages manifest hash does not match the built manifest");
  }
}

console.log(`Verified ArabCord ${manifest.name} (${manifest.hash})`);

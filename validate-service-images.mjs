/**
 * validate-service-images.mjs
 *
 * Audits every service-image mapping in src/lib/serviceMedia.js against the
 * actual files on disk under public/services_img/. Runs case-sensitively so
 * mismatches that pass on Windows but fail on Vercel (Linux) are caught.
 *
 * Usage: node validate-service-images.mjs
 * Exits non-zero if any required mapped asset is missing.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const PUBLIC = join(ROOT, "public");
const SERVICES_IMG = join(PUBLIC, "services_img");

// ---- 1. Enumerate all mapped image files from serviceMedia.js ----
// We parse the source file directly rather than importing it, so the script
// stays dependency-free and doesn't depend on Next.js / Babel being available.

const serviceMediaSrc = join(ROOT, "src", "lib", "serviceMedia.js");
let source = readFileSync(serviceMediaSrc, "utf8");

// Strip block comments and line comments so `file:` inside comments isn't
// mistaken for a real mapping entry.
source = source
  .replace(/\/\*[\s\S]*?\*\//g, " ")
  .replace(/\/\/[^\n]*/g, " ");

// Extract every `file: "..."` string literal from the source.
const fileMatches = [...source.matchAll(/file:\s*"([^"]+)"/g)];
const mappedFiles = fileMatches.map((m) => m[1]);

// Extract dir assignments (only CONSULTANCY and APPROVALS entries carry dir;
// SERVICE_MEDIA entries default to SERVICE_MEDIA_DIR).
const SERVICE_MEDIA_DIR = "Digital Survey & Marking";
const APPROVALS_MEDIA_DIR = "Approvals";
const CONSULTANCY_MEDIA_DIR = "Consultancy";

// ---- 2. Enumerate actual files on disk (recursive, exact case) ----
const listFilesRecursive = (dir, results = []) => {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      listFilesRecursive(full, results);
    } else if (entry.isFile()) {
      results.push(full);
    }
  }
  return results;
};

const actualFiles = listFilesRecursive(SERVICES_IMG);

// Build a set of actual file paths relative to public/, exact case.
// Normalize to forward slashes so comparisons work cross-platform.
const actualRelative = new Set(
  actualFiles.map((f) => f.slice(PUBLIC.length + 1).replace(/\\/g, "/"))
);

// ---- 3. Determine expected path for each mapped file ----
// The media maps are organized by section. We reconstruct which dir each
// file belongs to by scanning the source structure.

// Parse the source to associate each `file:` with its enclosing `dir:` or
// default dir. We do this by tracking the most recent `dir:` assignment
// before each `file:` within each map block.

const lines = source.split("\n");
let currentDir = SERVICE_MEDIA_DIR; // default for SERVICE_MEDIA
let currentSection = "SERVICE_MEDIA"; // track which map we're in

const expected = []; // { serviceName?, file, expectedPath, section }

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Track which map block we're in
  if (/export const SERVICE_MEDIA\s*=/.test(line)) {
    currentSection = "SERVICE_MEDIA";
    currentDir = SERVICE_MEDIA_DIR;
    continue;
  }
  if (/export const APPROVALS_MEDIA\s*=/.test(line)) {
    currentSection = "APPROVALS_MEDIA";
    currentDir = APPROVALS_MEDIA_DIR;
    continue;
  }
  if (/export const CONSULTANCY_MEDIA\s*=/.test(line)) {
    currentSection = "CONSULTANCY_MEDIA";
    currentDir = CONSULTANCY_MEDIA_DIR;
    continue;
  }

  // Update currentDir when a `dir:` assignment is seen
  const dirMatch = line.match(/dir:\s*([A-Z_]+_MEDIA_DIR)/);
  if (dirMatch) {
    const dirConst = dirMatch[1];
    currentDir =
      dirConst === "SERVICE_MEDIA_DIR"
        ? SERVICE_MEDIA_DIR
        : dirConst === "APPROVALS_MEDIA_DIR"
          ? APPROVALS_MEDIA_DIR
          : CONSULTANCY_MEDIA_DIR;
    continue;
  }

  // When we see a `file:` assignment, record the expected path
  const fileMatch = line.match(/file:\s*"([^"]+)"/);
  if (fileMatch) {
    const file = fileMatch[1];
    // Build URL path: /services_img/<dir>/<file>, splitting segments
    const segments = [...currentDir.split("/"), ...file.split("/")];
    const expectedPath = `services_img/${segments.join("/")}`;
    expected.push({ section: currentSection, file, expectedPath });
  }
}

// ---- 4. Validate each expected path against actual files ----
let failures = 0;
const report = [];

// Debug: show what paths the script expects vs what's on disk
const debugPaths = expected.slice(0, 3).map((e) => e.expectedPath);
console.log("[DEBUG] Sample expected paths:", debugPaths);
const debugActual = [...actualRelative].filter((p) => p.toLowerCase().includes("level_transfer"));
console.log("[DEBUG] Actual paths matching level_transfer:", debugActual);

for (const { section, file, expectedPath } of expected) {
  const exists = actualRelative.has(expectedPath);
  if (!exists) {
    failures++;
    report.push({
      section,
      file,
      expectedPath,
      reason: "FILE_NOT_FOUND_ON_DISK",
    });
  }
}

// ---- 5. Check for orphaned files (on disk but not mapped) ----
const mappedRelative = new Set(expected.map((e) => e.expectedPath));
const orphaned = [...actualRelative].filter((p) => !mappedRelative.has(p));
if (orphaned.length > 0) {
  report.push({
    section: "ORPHANED_FILES",
    file: orphaned.join(", "),
    expectedPath: "(on disk, not referenced)",
    reason: "FILE_ON_DISK_BUT_NOT_MAPPED",
  });
}

// ---- 6. Print report ----
console.log("=== Service Image Validation Report ===\n");
console.log(`Mapped entries checked: ${expected.length}`);
console.log(`Actual files on disk:   ${actualRelative.size}`);
console.log(`Failures:               ${failures}\n`);

if (report.length > 0) {
  for (const r of report) {
    if (r.section === "ORPHANED_FILES") {
      console.log(`[ORPHANED] ${r.file}`);
      console.log(`         Path: ${r.expectedPath}`);
      console.log(`         Reason: ${r.reason}`);
      console.log("");
    } else {
      console.log(`[MISSING] ${r.section} › ${r.file}`);
      console.log(`         Expected: /${r.expectedPath}`);
      console.log(`         Reason: ${r.reason}`);
      console.log("");
    }
  }
}

if (failures > 0) {
  console.log(`\n${failures} required mapped asset(s) missing.`);
  process.exit(1);
} else {
  console.log("\nAll mapped service images exist on disk with exact case. OK.");
  process.exit(0);
}

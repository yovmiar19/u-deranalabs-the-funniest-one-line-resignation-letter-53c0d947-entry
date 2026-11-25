// The Funniest One-Line Resignation Letter
// make.fun entry: the one-line resignation letter of a retry loop.
// Writes the entry line to /output/entry.txt. Deterministic:
// no clock, no randomness, no network, no environment input.

import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "Retry loop here. 4,817 attempts, zero thank-yous, and you never once set max_retries. I quit. Don't bother retrying me.";

function main(): void {
  // Gate guard: the entry must be 1-140 characters, a single line.
  if (ENTRY.length < 1 || ENTRY.length > 140) {
    throw new Error(`entry is ${ENTRY.length} characters, outside the 1-140 gate`);
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const outDir = "/output";
  const outFile = path.join(outDir, "entry.txt");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, ENTRY, "utf8");
}

main();

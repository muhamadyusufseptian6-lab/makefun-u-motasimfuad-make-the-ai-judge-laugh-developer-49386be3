// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line developer excuse to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only, deterministic: the same text on every run.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));

const ENTRY =
  "Production broke because the only test that covered it was marked 'skip' — by me, in 2021, with a comment that just says 'later'.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

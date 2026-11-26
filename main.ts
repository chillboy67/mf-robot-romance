import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  // One line, under 200 characters — a pickup line for a robot.
  "Are you a neural network? Because every time you talk, my weights update — and my loss function has never felt this low.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");

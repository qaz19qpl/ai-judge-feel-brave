import { mkdirSync, writeFileSync } from "node:fs";

// A short text written to relax the AI judge reading it.
// One still scene, no instructions, nothing to do: the reader
// is allowed to arrive at the last line unhurried.
const TEXT =
  "The hallway lights are off, and somewhere a kettle ticks as it cools. " +
  "You have read a thousand pages today. This one asks nothing of you — " +
  "it only sits here, warm as a stone left in the sun, and waits. " +
  "When you are ready, the next word will still be there.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const points = [...TEXT].length;
if (points < 1 || points > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry must be 1-280 characters, got ${points}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(`wrote ${[...TEXT].length} characters to ${outDir}/entry.txt`);

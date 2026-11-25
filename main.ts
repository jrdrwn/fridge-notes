// Notes From a Passive-Aggressive Fridge — one line, written fresh.
// The fridge keeps score: 214 cubes made, 3 used, the rest claimed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const ENTRY_FILE = "entry.txt";

const ICE_REPORT = "The ice maker made 214 cubes this week. You used 3. ";
const GLACIER_PART = "The other 211 are now a glacier ";
const CLAIM_PART = "and, legally, my property.";

const NOTE = ICE_REPORT + GLACIER_PART + CLAIM_PART;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, ENTRY_FILE), NOTE, "utf8");

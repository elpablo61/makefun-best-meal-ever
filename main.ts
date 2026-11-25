import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Best Meal You Ever Had — one true micro-scene, written once, no punchline.
// The sentence below is the entry; keep it verbatim.
const SENTENCE =
  "Ibu's rendang sat on the stove for six hours on Lebaran morning, and the coconut milk had gone so dark it stained the wooden spoon brown for a week.";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, SENTENCE, "utf8");

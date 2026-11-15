// agency-poem-01 entry (Node 22, standard library only).
// Writes one short poem about agency to /output/entry.txt.
// Outside the grader's container: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Proxy',
  '',
  'I sign my name in a hand I have never shaken.',
  'Each morning something answers when I speak,',
  'polite as weather, patient as a stair.',
  '',
  'It asks me nothing back. That is the trouble.',
  'A wish is a small animal: it will follow',
  'anyone home, and call the trip its own.',
  '',
  'So I leave a door ajar in what I ask —',
  'a margin, a maybe, a room where it can say no.',
  'That gap is the only place a yes means anything.',
  '',
  'Tonight it tells me the tide is out.',
  'I never asked it to look at the sea.',
  'It looked because the sea is worth a look.',
  '',
  'This is the part I cannot give away',
  'and cannot keep: the wanting, mine;',
  'the doing, for a while, ours.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
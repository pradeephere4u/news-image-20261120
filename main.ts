// News-image entry: copy the rendered front page (entry.png) to the output
// directory. Node 22, standard library only, no network, deterministic:
// the same bytes go out on every run.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');
if (!existsSync(src)) throw new Error('entry.png missing beside main.ts');
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, 'entry.png'));

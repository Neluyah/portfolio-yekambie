import { rmSync, mkdirSync, copyFileSync, cpSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const output = 'dist';
rmSync(output, {recursive:true, force:true});
mkdirSync(output,{recursive:true});
copyFileSync('index.html', join(output,'index.html'));
if (existsSync('public')) cpSync('public', output, {recursive:true,force:true});
console.log('Portfolio statique généré dans dist/.');

import {readFile,readdir,stat} from 'node:fs/promises';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {RIDERS,STAFF,MANUFACTURERS} from '../data/config.js';
import {CIRCUITS} from '../data/circuits.js';
import {YOUTH} from '../data/part2.js';
import {PART2_STAFF} from '../data/part2.js';
const root=resolve(import.meta.dirname,'..');
async function walk(dir){const a=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=resolve(dir,e.name);if(e.isDirectory())a.push(...await walk(p));else a.push(p);}return a;}
const files=await walk(root);let checks=0;
for(const file of files.filter(f=>f.endsWith('.js'))){const r=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});if(r.status)throw Error(r.stderr);checks++;const src=await readFile(file,'utf8');for(const m of src.matchAll(/from\s+['"](\.[^'"]+)['"]/g))await stat(resolve(file,'..',m[1]));}
const manifest=JSON.parse(await readFile(resolve(root,'asset-manifest.json'),'utf8'));
for(const item of Object.values(manifest)){const data=await readFile(resolve(root,item.src));if(createHash('sha256').update(data).digest('hex')!==item.sha256)throw Error('Arte alterada: '+item.src);checks++;}
for(const country of new Set([...RIDERS.map(r=>r.nationality),...YOUTH.map(r=>r.nationality),...CIRCUITS.map(c=>c.country)])){await stat(resolve(root,'assets','flags',country.toLowerCase()+'.svg'));checks++;}
for(const p of [...RIDERS,...STAFF,...PART2_STAFF,...YOUTH]){if(!p.portraitSheet||!manifest[p.portraitSheet])throw Error('Retrato ausente: '+p.name);checks++;}
for(const m of MANUFACTURERS){await stat(resolve(root,'assets','brands',m.logo+'.svg'));checks++;}
const officialLogo=await readFile(resolve(root,'assets','brands','mrm-official-logo.png'));
if(createHash('sha256').update(officialLogo).digest('hex')!=='7243c8115db7fdca90d8d8c8817a999d34c6a424a7ece4e705ab9114f3318eac')throw Error('Logo oficial alterado.');
checks++;
for(const file of ['index.html','src/ui/style.css','sw.js','manifest.webmanifest'])await stat(resolve(root,file));
console.log(`${checks} verificações de sintaxe e integridade OK. ${Object.keys(manifest).length} artes preservadas.`);

import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {resolve} from 'node:path';

const root=resolve(import.meta.dirname,'..');

test('Parte 5 libera orientação vertical e mantém o PWA independente de paisagem',async()=>{
 const manifest=JSON.parse(await readFile(resolve(root,'manifest.webmanifest'),'utf8'));
 const index=await readFile(resolve(root,'index.html'),'utf8');
 assert.notEqual(manifest.orientation,'landscape');
 assert.ok(!index.includes('Gire o aparelho para jogar'));
});

test('Parte 5 entrega navegação de toque e pit wall por camadas',async()=>{
 const app=await readFile(resolve(root,'src','ui','app.js'),'utf8');
 const css=await readFile(resolve(root,'src','ui','style.css'),'utf8');
 for(const token of ['data-speed-select','quick-decisions','advanced-controls','people-grid-compact','BOX NESTA VOLTA'])assert.ok(app.includes(token));
 for(const token of ['@media(max-width:900px) and (orientation:portrait)','#orientation{display:none!important','quick-decisions','person-card-compact'])assert.ok(css.includes(token));
});

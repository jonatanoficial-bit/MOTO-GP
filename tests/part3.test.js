import {test} from 'node:test';
import assert from 'node:assert/strict';
import {access,readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {RIDERS,STAFF,MANUFACTURERS} from '../data/config.js';
import {PART2_STAFF,YOUTH} from '../data/part2.js';
import {createCareer,lineup} from '../src/state/career.js';
import {quote,negotiate} from '../src/systems/contracts.js';
import {decode} from '../src/services/save.js';
import {enterWeekend,startSession,command,factors,tick,currentCircuit} from '../src/simulation/engine.js';

function prepared(seed='part3'){const s=createCareer({seed});for(const [kind,id] of [['rider','r0'],['rider','r1'],['staff','s0'],['staff','s1'],['supplier','aurora'],['sponsor','orbit']])assert.ok(negotiate(s,{kind,id,value:quote(s,kind,id)}).accepted);return s;}

test('todos os 44 personagens têm retrato estável e diverso',()=>{
 const people=[...RIDERS,...STAFF,...PART2_STAFF,...YOUTH];
 assert.equal(people.length,44);
 for(const p of people){assert.ok(p.portraitSheet);assert.ok(Number.isInteger(p.portraitIndex));assert.ok(p.portraitCols>=3);assert.ok(p.portraitRows>=2);}
 assert.equal(new Set(RIDERS.map(p=>p.portraitSheet+':'+p.portraitIndex)).size,24);
 assert.equal(new Set([...STAFF,...PART2_STAFF].map(p=>p.portraitIndex)).size,12);
});

test('seis fabricantes reais têm identidade visual e pacotes distintos',async()=>{
 assert.equal(MANUFACTURERS.length,6);
 assert.equal(new Set(MANUFACTURERS.map(m=>JSON.stringify(m.bike))).size,6);
 for(const m of MANUFACTURERS){assert.ok(m.engine&&m.character&&m.logo);await access(resolve(import.meta.dirname,'..','assets','brands',m.logo+'.svg'));}
});

test('Parte 3 migra save V2 e restaura retratos sem alterar a carreira',()=>{
 const old=createCareer({seed:'migrate-v2',name:'Equipe Legado'});old.schemaVersion=2;delete old.part3;for(const r of old.riders)delete r.portraitSheet;for(const s of old.staff)delete s.portraitSheet;
 const migrated=decode(JSON.stringify(old));
 assert.equal(migrated.schemaVersion,3);assert.equal(migrated.team.name,'Equipe Legado');assert.ok(migrated.part3.flags.portraits);assert.ok(migrated.riders.every(r=>r.portraitSheet));assert.ok(migrated.staff.every(r=>r.portraitSheet));
});

test('mapa de motor, eletrônica, freio e combustível afetam a simulação',()=>{
 const s=prepared('technical-controls');enterWeekend(s);s.phase='race';startSession(s,'race');
 const [a,b]=s.session.entries.filter(e=>e.teamId==='player');
 command(s,a.riderId,'engineMode','attack');command(s,a.riderId,'electronics','aggressive');command(s,a.riderId,'brakeBias',55);
 command(s,b.riderId,'engineMode','save');command(s,b.riderId,'electronics','safe');command(s,b.riderId,'brakeBias',52);
 const c=currentCircuit(s),seg=c.segments.find(x=>x.type==='corner')||c.segments[0];
 const attack=factors(a,c,s.session,seg),safe=factors(b,c,s.session,seg);
 assert.ok(attack.engine<safe.engine);assert.ok(attack.electronics<safe.electronics);assert.ok(attack.brake>safe.brake);
 for(let i=0;i<160;i++)tick(s);
 assert.ok(a.fuel<102&&b.fuel<102);assert.ok(a.fuel<b.fuel);
 assert.throws(()=>command(s,a.riderId,'brakeBias',60));
});

test('interface expõe controles técnicos e retratos por sprite',async()=>{
 const app=await readFile(resolve(import.meta.dirname,'..','src','ui','app.js'),'utf8');
 const pages=await readFile(resolve(import.meta.dirname,'..','src','ui','part2-pages.js'),'utf8');
 for(const token of ['data-engine','data-electronics','data-brake','portrait-sprite','brand-lockup'])assert.ok(app.includes(token));
 assert.ok(pages.includes('portraitSprite'));
});

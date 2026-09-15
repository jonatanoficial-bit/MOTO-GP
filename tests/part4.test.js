import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {createCareer} from '../src/state/career.js';
import {quote,negotiate} from '../src/systems/contracts.js';
import {decode,encode} from '../src/services/save.js';
import {enterWeekend,startSession,command,factors,currentCircuit,tick} from '../src/simulation/engine.js';

function prepared(seed='part4'){
 const s=createCareer({seed});
 for(const [kind,id] of [['rider','r0'],['rider','r1'],['staff','s0'],['staff','s1'],['supplier','aurora'],['sponsor','orbit']])assert.ok(negotiate(s,{kind,id,value:quote(s,kind,id)}).accepted);
 return s;
}

test('Parte 4 migra carreira Parte 3 sem perder elenco, histórico ou retratos',()=>{
 const before=createCareer({seed:'migration',name:'Equipe Arquivo'});
 before.schemaVersion=3;delete before.part4;
 const migrated=decode(JSON.stringify(before));
 assert.equal(migrated.schemaVersion,4);
 assert.equal(migrated.team.name,'Equipe Arquivo');
 assert.ok(migrated.part4.flags.liveBroadcast);
 assert.ok(migrated.riders.every(r=>r.nationality&&r.portraitSheet));
});

test('plano de pit e gestão de pneus alteram a corrida e persistem no save',()=>{
 const s=prepared('pit-plan');enterWeekend(s);s.phase='race';startSession(s,'race');
 const [a,b]=s.session.entries.filter(e=>e.teamId==='player');
 command(s,a.riderId,'pitPlan','wet');command(s,a.riderId,'pitMode','fast');command(s,a.riderId,'tyreMode','push');
 command(s,b.riderId,'pitPlan','hard');command(s,b.riderId,'pitMode','safe');command(s,b.riderId,'tyreMode','conserve');
 const c=currentCircuit(s),seg=c.segments[0],aggressive=factors(a,c,s.session,seg),conservative=factors(b,c,s.session,seg);
 assert.ok(aggressive.tyre<conservative.tyre);
 command(s,a.riderId,'box');for(let i=0;i<400&&a.status!=='IN_GARAGE';i++)tick(s);
 assert.equal(a.pitTyre,'wet');assert.equal(a.pitMode,'fast');
 const restored=decode(encode(s));
 const restoredA=restored.session.entries.find(e=>e.riderId===a.riderId);
 assert.equal(restoredA.tyreMode,'push');assert.equal(restoredA.pitTyre,'wet');
});

test('interface contém transmissão, bandeiras, pit plan, caixa de mensagens e tutorial',async()=>{
 const app=await readFile(resolve(import.meta.dirname,'..','src','ui','app.js'),'utf8');
 const css=await readFile(resolve(import.meta.dirname,'..','src','ui','style.css'),'utf8');
 for(const token of ['MRM RACE CONTROL','data-pit-plan','data-tyre-mode','result-avatar','tutorialContent','mailbox'])assert.ok(app.includes(token));
 for(const token of ['tv-race-layout','broadcast-driver','grid-avatar','result-broadcast','@media(max-width:740px) and (orientation:portrait)'])assert.ok(css.includes(token));
});

import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createCareer,lineup} from '../src/state/career.js';
import {quote,negotiate,terminate} from '../src/systems/contracts.js';
import {cash} from '../src/systems/finance.js';
import {decode} from '../src/services/save.js';
import {enterWeekend,startSession} from '../src/simulation/engine.js';
import {operations,academy,mediaCenter,worldCenter} from '../src/ui/part2-pages.js';
import {
 p2,facilityLevel,facilityCost,upgradeFacility,orderComponent,startAdvancedProject,
 scoutProspect,signAcademy,promoteProspect,runMediaAction,valuation,
 createInvestorOffer,decideInvestor,qualifyingPenalties,resolveWorldEvent,processPart2Round
} from '../src/systems/part2.js';

function prepared(seed='part2'){
 const s=createCareer({seed,category:'inter'});
 for(const [kind,id] of [['rider','r0'],['rider','r1'],['staff','s0'],['staff','s1'],['supplier','aurora'],['sponsor','orbit']]){
  assert.ok(negotiate(s,{kind,id,value:quote(s,kind,id)}).accepted);
 }
 return s;
}
function resultFor(s,incidents=[]){
 return {entries:lineup(s).map((r,i)=>({riderId:r.id,teamId:'player',position:i+4,status:'FINISHED'})),incidents};
}

test('save da Parte 1 migra para a Parte 2 sem perder a carreira',()=>{
 const legacy=createCareer({seed:'legacy'}),name=legacy.team.name;
 legacy.schemaVersion=1;
 delete legacy.part2;
 legacy.staff=legacy.staff.filter(x=>Number(x.id.slice(1))<6);
 const migrated=decode(JSON.stringify(legacy));
 assert.equal(migrated.schemaVersion,2);
 assert.equal(migrated.team.name,name);
 assert.ok(migrated.part2);
 assert.ok(migrated.staff.some(x=>x.role==='scout'));
});

test('sede, estoque e logística alteram caixa e operação',()=>{
 const s=prepared('facility'),before=cash(s),cost=facilityCost(s,'workshop');
 upgradeFacility(s,'workshop');
 assert.equal(facilityLevel(s,'workshop'),2);
 assert.equal(cash(s),before-cost);
 const stock=p2(s).inventory.fairing;
 orderComponent(s,'fairing',2);
 assert.equal(p2(s).shipments.at(-1).status,'IN_TRANSIT');
 processPart2Round(s,resultFor(s));
 assert.equal(p2(s).inventory.fairing,stock+2);
 assert.equal(p2(s).shipments.at(-1).status,'DELIVERED');
});

test('P&D avançado percorre fases e termina em ganho ou reprovação',()=>{
 const s=prepared('advanced-project');
 startAdvancedProject(s,'aeroPackage');
 for(let i=0;i<12&&p2(s).projects[0].status==='ACTIVE';i++){s.round=i%10;processPart2Round(s,resultFor(s));}
 const project=p2(s).projects[0];
 assert.ok(['COMPLETE','FAILED'].includes(project.status));
 if(project.status==='COMPLETE')assert.ok(s.upgrades.agility>=3);
});

test('scout reduz incerteza; academia contrata e promove talento',()=>{
 const s=prepared('academy-scout');
 scoutProspect(s,'y0');
 const first=p2(s).scouting.reports.y0.level;
 assert.ok(negotiate(s,{kind:'staff',id:'s6',value:quote(s,'staff','s6')}).accepted);
 scoutProspect(s,'y0');
 const second=p2(s).scouting.reports.y0.level;
 assert.ok(second[1]-second[0]<first[1]-first[0]);
 upgradeFacility(s,'academy');
 signAcademy(s,'y0');
 terminate(s,s.contracts.find(c=>c.kind==='rider'&&c.entityId==='r1'&&c.status==='ACTIVE').id);
 const promoted=promoteProspect(s,'y0');
 assert.equal(promoted.id,'y0');
 assert.ok(lineup(s).some(r=>r.id==='y0'));
});

test('mídia e investimento modificam marca, controle e avaliação',()=>{
 const s=prepared('board'),state=p2(s),fans=state.fans,brand=state.brandReputation;
 runMediaAction(s,'behindScenes');
 assert.ok(state.fans>fans);
 assert.ok(state.brandReputation>brand);
 const before=cash(s),value=valuation(s),offer=createInvestorOffer(s);
 decideInvestor(s,offer.id,true);
 assert.ok(cash(s)>before);
 assert.ok(state.equityOwned<100);
 assert.ok(value>0);
});

test('eventos e comissários aplicam consequências persistentes',()=>{
 const s=prepared('rules'),state=p2(s);
 state.worldEvents.push({id:'manual',templateId:'mediaQuestion',title:'Entrevista',body:'Resposta necessária',choices:[['honest','Reconhecer'],['bold','Prometer']],status:'OPEN'});
 const brand=state.brandReputation;
 resolveWorldEvent(s,'manual','honest');
 assert.equal(state.worldEvents.at(-1).status,'RESOLVED');
 assert.equal(state.brandReputation,brand+2);
 state.regulation.penaltyChance=1;
 const penalties=qualifyingPenalties(s,resultFor(s).entries.map((e,i)=>({...e,best:90+i})));
 assert.equal(penalties.length,1);
 assert.ok([1,3].includes(penalties[0].places));
});

test('lesão, estado mental e clima avançado entram na sessão',()=>{
 const healthy=prepared('session-effect'),hurt=decode(JSON.stringify(healthy));
 p2(hurt).riderStates.r0.injurySeverity=30;
 p2(hurt).riderStates.r0.pressure=90;
 enterWeekend(healthy);enterWeekend(hurt);
 startSession(healthy,'practice');startSession(hurt,'practice');
 const a=healthy.session.entries.find(x=>x.riderId==='r0'),b=hurt.session.entries.find(x=>x.riderId==='r0');
 assert.ok(b.attributes.speed<a.attributes.speed);
 for(const key of ['air','track','wind','forecast'])assert.ok(Object.hasOwn(hurt.session.weather,key));
});

test('as quatro centrais avançadas renderizam controles funcionais',()=>{
 const s=prepared('pages'),asset=id=>'assets/art/'+id+'.png';
 const pages=[operations(s,asset),academy(s),mediaCenter(s,asset),worldCenter(s,asset)];
 for(const html of pages){assert.ok(html.length>500);assert.match(html,/data-action=/);}
 assert.match(pages[0],/advanced-start/);
 assert.match(pages[1],/academy-sign/);
 assert.match(pages[2],/media-action/);
 assert.match(pages[3],/investor-create/);
});

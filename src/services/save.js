import {CATEGORIES,MANUFACTURERS,SPONSORS} from '../../data/config.js';
import {CIRCUITS} from '../../data/circuits.js';
import {ensurePart2,migrateFromPart1} from '../state/part2.js';

const PREFIX='mrm-v2-';
const LEGACY_PREFIX='mrm-v1-';

export function validate(s){
 if(!s||s.schemaVersion!==2)throw Error('Versão de save não compatível. O arquivo original foi preservado.');
 if(!s.team||typeof s.team.name!=='string'||s.team.name.length>100||!/^#[a-f\d]{6}$/i.test(s.team.color))throw Error('Identidade da equipe inválida.');
 if(!CATEGORIES.some(c=>c.id===s.category)||!Number.isInteger(s.round)||s.round<0||s.round>10||!Number.isInteger(s.season)||s.season<1)throw Error('Temporada inválida.');
 for(const key of ['riders','staff','teams','contracts','ledger','calendar','results','history','news','projects','audit'])if(!Array.isArray(s[key]))throw Error('Save incompleto: '+key);
 if(s.calendar.length!==10||s.calendar.some(id=>!CIRCUITS.some(c=>c.id===id)))throw Error('Calendário inválido.');
 if(!['management','practice','qualifying','grid','race','result','seasonEnd'].includes(s.phase))throw Error('Fase inválida.');
 if(!s.settings||!s.upgrades||!s.standings||!s.teamStandings||!s.negotiations||!s.part2)throw Error('Estado incompleto.');
 for(const key of ['shipments','projects','injuries','rivalries','worldEvents','sportsDecisions','mediaHistory','investorOffers','history'])if(!Array.isArray(s.part2[key]))throw Error('Parte 2 incompleta: '+key);
 if(!s.part2.facilities||!s.part2.inventory||!s.part2.academy||!s.part2.staffStates||!s.part2.riderStates)throw Error('Gestão avançada incompleta.');
 for(const r of s.riders)if(typeof r.id!=='string'||typeof r.name!=='string'||!r.attributes||!Object.values(r.attributes).every(v=>Number.isFinite(v)&&v>=0&&v<=110))throw Error('Piloto inválido.');
 for(const c of s.contracts){
  const ids=c.kind==='rider'?s.riders:c.kind==='staff'?s.staff:c.kind==='sponsor'?SPONSORS:MANUFACTURERS;
  if(!ids.some(e=>e.id===c.entityId)||!Number.isFinite(c.value)||c.value<0)throw Error('Contrato inválido.');
 }
 if(s.ledger.some(x=>!Number.isFinite(x.amount)))throw Error('Ledger inválido.');
 if(s.session&&(!Array.isArray(s.session.entries)||!Number.isFinite(s.session.elapsed)||!['practice','qualifying','race'].includes(s.session.kind)))throw Error('Sessão inválida.');
 if(s.phase!=='management'&&s.phase!=='seasonEnd'&&!s.weekend)throw Error('Fim de semana ausente.');
 return s;
}

export function encode(s){return JSON.stringify(validate(ensurePart2(s)));}
export function decode(raw){
 if(typeof raw!=='string'||raw.length>12000000)throw Error('Arquivo de save inválido ou muito grande.');
 const parsed=JSON.parse(raw);
 return validate(parsed.schemaVersion===1?migrateFromPart1(parsed):ensurePart2(parsed));
}
export function save(s,slot='auto',storage=localStorage){
 const raw=encode(s),key=PREFIX+slot,previous=storage.getItem(key);
 if(previous){try{decode(previous);storage.setItem(key+'-backup',previous);}catch{/* Mantém um backup válido já existente. */}}
 storage.setItem(key,raw);
 return true;
}
export function load(slot='auto',storage=localStorage){
 const key=PREFIX+slot,legacyKey=LEGACY_PREFIX+slot,raw=storage.getItem(key)||storage.getItem(legacyKey);
 if(!raw)throw Error('Este slot está vazio.');
 try{return {state:decode(raw),recovered:false,migrated:!storage.getItem(key)&&!!storage.getItem(legacyKey)};}
 catch(error){
  const backup=storage.getItem(key+'-backup')||storage.getItem(legacyKey+'-backup');
  if(backup){try{return {state:decode(backup),recovered:true,migrated:false};}catch{}}
  throw Error('Save não pôde ser aberto. Importe um backup; os arquivos locais foram preservados.');
 }
}
export function slots(storage=localStorage){
 return ['auto','1','2','3'].map(id=>{try{const r=load(id,storage);return {id,name:r.state.team.name,season:r.state.season,round:r.state.round,recovered:r.recovered,migrated:r.migrated};}catch{return {id,name:null};}});
}

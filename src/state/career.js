import {BALANCE,RIDERS,STAFF,RIVALS,MANUFACTURERS,CATEGORIES,PHILOSOPHIES} from '../../data/config.js';
import {CIRCUITS} from '../../data/circuits.js';
import {seedOf} from '../core/random.js';
import {transaction} from '../systems/finance.js';
import {ensurePart4} from './part4.js';
export function news(s,title,body){s.news.unshift({id:s.nextNews++,season:s.season,round:s.round,title,body});s.news=s.news.slice(0,120);}
export function createCareer(options={}){const cat=CATEGORIES.find(c=>c.id===options.category)||CATEGORIES[1];const s={schemaVersion:4,seed:seedOf(options.seed||Date.now()),season:1,round:0,phase:'management',category:cat.id,team:{id:'player',name:String(options.name||'Valença Racing').slice(0,40),short:String(options.short||'VLR').slice(0,8),country:options.country||'BR',city:String(options.city||'São Paulo').slice(0,40),color:/^#[a-f0-9]{6}$/i.test(options.color)?options.color:'#ff493e',philosophy:PHILOSOPHIES.some(p=>p.id===options.philosophy)?options.philosophy:'technical',reputation:30,morale:75,manufacturer:null},riders:structuredClone(RIDERS),staff:structuredClone(STAFF),teams:structuredClone(RIVALS),contracts:[],ledger:[],debt:0,negotiations:{},calendar:CIRCUITS.map(c=>c.id),standings:{},teamStandings:{},results:[],history:[],news:[],nextNews:1,weekend:null,session:null,projects:[],upgrades:{speed:0,braking:0,traction:0,agility:0,reliability:0},settings:{guide:true,contrast:false,reducedMotion:false,graphics:'balanced',scale:1,sound:false},audit:[]};
 transaction(s,BALANCE.initialCash*cat.cost,'investment','Capital inicial');
 for(const [i,t] of s.teams.entries()){transaction(s,4200000*cat.cost,'investment','Capital de operação',t.id);for(let k=0;k<2;k++)s.contracts.push({id:'ai-'+i+'-'+k,kind:'rider',entityId:'r'+(2+i*2+k),teamId:t.id,value:s.riders[2+i*2+k].salary*cat.cost,startSeason:1,endSeason:1,status:'ACTIVE',bonus:4000});}
 ensurePart4(s);news(s,'Bem-vindo à Parte 4','Monte uma equipe diversa e viva a corrida pela transmissão ao vivo: estratégia, rádio, clima e decisões de pit wall.');return s;
}
export const activeContracts=(s,kind,team='player')=>s.contracts.filter(c=>c.kind===kind&&c.teamId===team&&c.status==='ACTIVE');
export const lineup=(s,team='player')=>activeContracts(s,'rider',team).map(c=>s.riders.find(r=>r.id===c.entityId));
export function staffSkill(s,role){const c=activeContracts(s,'staff').find(c=>s.staff.find(x=>x.id===c.entityId)?.role===role);return c?s.staff.find(x=>x.id===c.entityId).skill:40;}
export function readiness(s){const a=[];if(lineup(s).length!==2)a.push('Contratar dois pilotos');if(!activeContracts(s,'staff').some(c=>s.staff.find(x=>x.id===c.entityId).role==='engineer'))a.push('Contratar engenharia');if(!activeContracts(s,'staff').some(c=>s.staff.find(x=>x.id===c.entityId).role==='mechanic'))a.push('Contratar mecânica');if(!s.team.manufacturer)a.push('Escolher fabricante');if(!activeContracts(s,'sponsor').length)a.push('Assinar patrocínio');return a;}
export function bike(s,teamId){const team=teamId==='player'?s.team:s.teams.find(t=>t.id===teamId);const spec=structuredClone(MANUFACTURERS.find(m=>m.id===team.manufacturer)?.bike||MANUFACTURERS[0].bike);if(teamId==='player')for(const k in spec)spec[k]+=s.upgrades[k];return spec;}


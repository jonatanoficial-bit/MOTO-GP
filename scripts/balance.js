import {createCareer,lineup} from '../src/state/career.js';
import {quote,negotiate} from '../src/systems/contracts.js';
import {enterWeekend,startSession,tick} from '../src/simulation/engine.js';
const totals={races:50,starters:0,dnf:0,winners:{}};
for(let n=0;n<totals.races;n++){const s=createCareer({seed:'batch'+n});for(const [kind,id] of [['rider','r0'],['rider','r1'],['staff','s0'],['staff','s1'],['supplier','aurora'],['sponsor','orbit']])negotiate(s,{kind,id,value:quote(s,kind,id)});enterWeekend(s);s.phase='race';startSession(s,'race');while(s.session.state!=='POST_SESSION')tick(s);totals.starters+=s.session.entries.length;totals.dnf+=s.session.entries.filter(e=>e.status==='RETIRED').length;const winner=s.session.entries.filter(e=>e.finishedAt!==null).sort((a,b)=>a.finishedAt-b.finishedAt)[0];if(winner)totals.winners[winner.teamId]=(totals.winners[winner.teamId]||0)+1;}
console.log(JSON.stringify({...totals,dnfRate:totals.dnf/totals.starters},null,2));

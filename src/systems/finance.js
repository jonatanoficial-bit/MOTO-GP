import {BALANCE,CATEGORIES,PHILOSOPHIES} from '../../data/config.js';
export const category=s=>CATEGORIES.find(c=>c.id===s.category);
export const philosophy=s=>PHILOSOPHIES.find(p=>p.id===s.team.philosophy);
export const cash=(s,teamId='player')=>s.ledger.filter(x=>x.teamId===teamId).reduce((a,x)=>a+x.amount,0);
export function transaction(s,amount,category,description,teamId='player'){if(!Number.isFinite(amount))throw Error('Valor financeiro inválido.');s.ledger.push({id:s.ledger.length+1,season:s.season,round:s.round,teamId,amount:Math.round(amount),category,description});}
export function spend(s,amount,category,description,teamId='player'){if(cash(s,teamId)<amount)throw Error('Caixa insuficiente. Reveja os compromissos em Finanças.');transaction(s,-amount,category,description,teamId);}
export function commitments(s){return s.contracts.filter(c=>c.teamId==='player'&&c.status==='ACTIVE'&&c.kind!=='sponsor').reduce((a,c)=>a+c.value*Math.max(0,(c.endSeason-s.season)*s.calendar.length+s.calendar.length-s.round),0);}
export function forecast(s){const remaining=s.calendar.length-s.round; const income=s.contracts.filter(c=>c.teamId==='player'&&c.kind==='sponsor'&&c.status==='ACTIVE').reduce((a,c)=>a+c.value,0)*remaining;return cash(s)+income-commitments(s)-remaining*(BALANCE.operatingCost+BALANCE.travelCost)*category(s).cost;}
export function credit(s){if(s.debt)throw Error('Quite o crédito atual antes de contratar outro.');s.debt=BALANCE.creditLimit;transaction(s,s.debt,'loan','Crédito operacional');}
export function repay(s){if(!s.debt)throw Error('Não há dívida.');spend(s,s.debt,'loan','Quitação de crédito');s.debt=0;}

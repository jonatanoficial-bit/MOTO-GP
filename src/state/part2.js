import {PART2_STAFF,YOUTH,COMPONENTS,FACILITIES,REGULATIONS} from '../../data/part2.js';
export function createPart2State(s){
 for(const member of PART2_STAFF)if(!s.staff.some(x=>x.id===member.id))s.staff.push(structuredClone(member));
 const staffStates=Object.fromEntries(s.staff.map(x=>[x.id,{morale:72,loyalty:65,fatigue:10,satisfaction:70,development:0}]));
 const riderStates=Object.fromEntries(s.riders.map(x=>[x.id,{confidence:65,pressure:25,frustration:10,motivation:75,teamTrust:60,injuryRounds:0,injurySeverity:0}]));
 return {version:1,fans:42000,engagement:28,mediaValue:30,brandReputation:30,equityOwned:100,investorPressure:15,facilities:Object.fromEntries(FACILITIES.map(f=>[f.id,f.id==='mediaStudio'||f.id==='academy'?0:1])),inventory:Object.fromEntries(COMPONENTS.map(c=>[c.id,c.min])),shipments:[],projects:[],staffStates,riderStates,academy:{prospects:structuredClone(YOUTH),signed:[],budget:0},scouting:{reports:{}},injuries:[],rivalries:[],worldEvents:[],sportsDecisions:[],mediaHistory:[],investorOffers:[],aiStrategies:{},history:[],regulation:structuredClone(REGULATIONS[s.category]),flags:{advanced:true}};
}
export function ensurePart2(s){if(!s.part2)s.part2=createPart2State(s);else{for(const member of PART2_STAFF)if(!s.staff.some(x=>x.id===member.id))s.staff.push(structuredClone(member));for(const x of s.staff)if(!s.part2.staffStates[x.id])s.part2.staffStates[x.id]={morale:70,loyalty:60,fatigue:10,satisfaction:70,development:0};for(const x of s.riders)if(!s.part2.riderStates[x.id])s.part2.riderStates[x.id]={confidence:65,pressure:25,frustration:10,motivation:75,teamTrust:60,injuryRounds:0,injurySeverity:0};}s.schemaVersion=2;return s;}
export function migrateFromPart1(s){if(s.schemaVersion!==1)return ensurePart2(s);return ensurePart2(s);}

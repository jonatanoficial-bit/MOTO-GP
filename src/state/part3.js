import {RIDERS,STAFF} from '../../data/config.js';
import {PART2_STAFF,YOUTH} from '../../data/part2.js';
import {ensurePart2,migrateFromPart1} from './part2.js';

const visuals=[...STAFF,...PART2_STAFF];
function copyPortrait(target,source){for(const key of ['portraitSheet','portraitIndex','portraitCols','portraitRows'])if(source?.[key]!=null)target[key]=source[key];}

export function createPart3State(s){return {version:1,manufacturerRelationship:50,technical:{telemetryPoints:0,setupConfidence:0,engineMapsUsed:{save:0,balanced:0,attack:0}},debriefs:[],flags:{portraits:true,manufacturerIdentity:true,advancedControls:true}};}

export function ensurePart3(s){
 ensurePart2(s);
 for(const person of s.riders)copyPortrait(person,RIDERS.find(x=>x.id===person.id));
 for(const person of s.staff)copyPortrait(person,visuals.find(x=>x.id===person.id));
 for(const person of s.part2.academy.prospects)copyPortrait(person,YOUTH.find(x=>x.id===person.id));
 if(!s.part3)s.part3=createPart3State(s);
 s.part3.technical??={telemetryPoints:0,setupConfidence:0,engineMapsUsed:{save:0,balanced:0,attack:0}};
 s.part3.technical.engineMapsUsed??={save:0,balanced:0,attack:0};
 s.part3.debriefs??=[];
 s.part3.flags??={portraits:true,manufacturerIdentity:true,advancedControls:true};
 s.schemaVersion=3;
 return s;
}

export function migrateToPart3(s){return ensurePart3(s.schemaVersion===1?migrateFromPart1(s):s);}

import {RIDERS} from '../../data/config.js';
import {ensurePart3} from './part3.js';

const tutorialSteps=['fundacao','contratos','fim-de-semana','pitwall','resultado','inbox'];

export function createPart4State(){
 return {version:1,tutorial:{completed:[],dismissed:false},broadcast:{director:'AUTO',events:0},raceNotes:[],mailbox:{read:[]},flags:{liveBroadcast:true,pitStrategy:true,mobileFirst:true}};
}

export function ensurePart4(s){
 ensurePart3(s);
 for(const rider of s.riders){
  const reference=RIDERS.find(x=>x.id===rider.id);
  if(reference?.nationality)rider.nationality=reference.nationality;
 }
 if(!s.part4)s.part4=createPart4State();
 s.part4.tutorial??={completed:[],dismissed:false};
 s.part4.tutorial.completed=Array.isArray(s.part4.tutorial.completed)?s.part4.tutorial.completed.filter(x=>tutorialSteps.includes(x)):[];
 s.part4.broadcast??={director:'AUTO',events:0};
 s.part4.raceNotes??=[];
 s.part4.mailbox??={read:[]};
 s.part4.mailbox.read??=[];
 s.part4.flags??={liveBroadcast:true,pitStrategy:true,mobileFirst:true};
 s.schemaVersion=4;
 return s;
}

export function migrateToPart4(s){return ensurePart4(s);}

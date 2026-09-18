/**
 * Camada de apresentação: relaciona o estado da carreira ao ambiente físico.
 * Não escreve em saves e não participa de qualquer cálculo de simulação.
 */
const SCENE_ASSETS=Object.freeze({
  commandStartup:['contracts','dashboard','staff','art-031','art-032','art-033'],
  commandProfessional:['dashboard','finance','art-004','art-024','art-026','art-035','art-036'],
  commandWorld:['art-027','art-028','art-029','art-037','art-038','art-039'],
  commandElite:['art-001','podium','art-011','art-012','art-013','art-014'],
  people:['staff','art-055','art-058','art-071','rider-0','rider-1','engineer','mechanic','commercial','guide','art-075','art-077','art-078'],
  engineering:['engineering','art-098','art-095','art-002','art-003','art-017','art-085'],
  garage:['garage','art-095','art-094','art-092','art-096','art-099','art-100'],
  logistics:['art-093','art-060','art-107','art-007','art-019','art-106','art-109','art-110'],
  academy:['art-040','art-034','art-055','art-058','art-059','art-060'],
  hospitality:['art-005','art-006','art-015','art-016','art-018','art-020','art-022','art-030'],
  executive:['finance','art-004','art-026','art-008','art-009','art-010'],
  worldTour:['calendar','art-027','art-028','circuit-0','circuit-1','circuit-2','circuit-3','circuit-4','circuit-5','circuit-6','circuit-7','circuit-8','circuit-9'],
  legacyStartup:['art-011','podium','art-001','art-062','art-063'],
  legacyElite:['podium','art-001','art-011','art-063','art-064','art-065','art-066','art-067','art-069','art-070','art-070'],
  raceControl:['pitwall','art-051','art-052','art-053','art-054','art-103','art-108','art-102','art-103','art-104','art-105'],
  grid:['grid','art-063','art-064','art-065','art-066','art-067','art-069','art-070','art-070'],
  neutral:['dashboard','garage','art-004','frame','art-082','art-083','art-084','art-086','art-087','art-088','art-089','art-090']
});

const PROFILE=Object.freeze({
  dashboard:{family:'executive',scene:'command'},
  people:{family:'people',scene:'people'},
  partners:{family:'technical',scene:'engineering'},
  finance:{family:'executive',scene:'executive'},
  garage:{family:'technical',scene:'garage'},
  operations:{family:'world',scene:'logistics'},
  academy:{family:'people',scene:'academy'},
  media:{family:'people',scene:'hospitality'},
  world:{family:'executive',scene:'command'},
  calendar:{family:'world',scene:'worldTour'},
  championship:{family:'legacy',scene:'legacy'},
  inbox:{family:'executive',scene:'command'},
  settings:{family:'executive',scene:'command'},
  session:{family:'live',scene:'raceControl'},
  grid:{family:'live',scene:'grid'},
  result:{family:'legacy',scene:'legacy'}
});

const FOCAL=Object.freeze({
  commandStartup:['72% center','72% center'],commandProfessional:['68% center','70% center'],commandWorld:['66% center','70% center'],commandElite:['50% center','55% center'],
  people:['67% center','72% center'],engineering:['69% center','74% center'],garage:['62% center','69% center'],logistics:['58% center','63% center'],academy:['59% center','64% center'],hospitality:['67% center','72% center'],executive:['67% center','72% center'],worldTour:['54% center','62% center'],legacyStartup:['52% center','57% center'],legacyElite:['50% center','55% center'],raceControl:['61% center','67% center'],grid:['53% center','58% center'],neutral:['60% center','65% center']
});

const firstAvailable=(manifest,keys,offset=0)=>keys.map((_,index)=>keys[(index+offset)%keys.length]).find(key=>manifest?.[key]?.src)||'neutral';

/** A progressão visual é derivada: não precisa alterar nem versionar saves. */
export function getTeamVisualTier(state){
  const facilities=Object.values(state?.part2?.facilities||{});
  const average=facilities.length?facilities.reduce((sum,level)=>sum+Number(level||0),0)/facilities.length:0;
  const reputation=Number(state?.team?.reputation||0);
  const titles=Array.isArray(state?.history)?state.history.length:0;
  const points=Number(state?.teamStandings?.player||0);
  const score=average*13+reputation*.62+titles*15+Math.min(20,points/8);
  if(score>=95)return 'ELITE';
  if(score>=68)return 'WORLD_CLASS';
  if(score>=38)return 'PROFESSIONAL';
  return 'STARTUP';
}

function sceneName(view,tier){
  const base=PROFILE[view]||PROFILE.dashboard;
  if(base.scene==='command')return tier==='ELITE'?'commandElite':tier==='WORLD_CLASS'?'commandWorld':tier==='PROFESSIONAL'?'commandProfessional':'commandStartup';
  if(base.scene==='legacy')return tier==='ELITE'||tier==='WORLD_CLASS'?'legacyElite':'legacyStartup';
  return base.scene;
}

export function getSceneForView(view,state,manifest,{circuit=null}={}){
  const profile=PROFILE[view]||PROFILE.dashboard;
  const tier=getTeamVisualTier(state);
  let logical=sceneName(view,tier);
  let candidates=SCENE_ASSETS[logical]||SCENE_ASSETS.neutral;
  if(['grid','result'].includes(view)&&circuit?.art)candidates=[circuit.art,...candidates];
  if(view==='session'&&['practice','qualifying'].includes(state?.phase))candidates=['garage','engineering',...candidates];
  const round=Number(state?.round||state?.weekend?.round||0);
  const season=Number(state?.season||0);
  const offset=(season*7+round*3+view.length)%Math.max(1,candidates.length);
  const key=firstAvailable(manifest,candidates,offset);
  const focus=FOCAL[logical]||FOCAL.neutral;
  return {id:logical,key,src:manifest?.[key]?.src||'',family:profile.family,tier,positionDesktop:focus[0],positionMobileLandscape:focus[1]};
}

/** Só a cena atual e destinos prováveis são carregados antecipadamente. */
export function preloadSceneSet(manifest,...scenes){
  if(typeof Image==='undefined')return;
  const sources=[...new Set(scenes.filter(Boolean).map(scene=>scene.src).filter(Boolean))].slice(0,3);
  for(const src of sources){const image=new Image();image.decoding='async';image.src=new URL(src,document.baseURI).href;}
}

export function sceneStyle(scene){
  const src=scene?.src?new URL(scene.src,document.baseURI).href:'';
  return `--scene:url('${src}');--scene-position:${scene?.positionDesktop||'center'};--scene-position-mobile:${scene?.positionMobileLandscape||'center'};`;
}

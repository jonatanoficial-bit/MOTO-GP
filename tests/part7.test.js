import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createCareer} from '../src/state/career.js';
import {decode,encode} from '../src/services/save.js';
import {cash} from '../src/systems/finance.js';
import {p2,careerPlan,chooseCareerDirective,directiveProgress,reviewCareerDirective,renewCareerPlan} from '../src/systems/part2.js';

test('direção de temporada migra silenciosamente e preserva carreira existente',()=>{
 const original=createCareer({seed:'career-plan-migration'}),legacy=structuredClone(original);
 delete legacy.part2.career;
 const migrated=decode(encode(legacy));
 assert.ok(careerPlan(migrated));
 assert.equal(migrated.contracts.length,original.contracts.length);
 assert.equal(cash(migrated),cash(original));
});

test('diretoria libera uma única meta e recompensa ao atingir a condição',()=>{
 const s=createCareer({seed:'technical-directive',category:'inter'}),before=cash(s);
 const directive=chooseCareerDirective(s,'technical');
 assert.equal(directive.target,7);
 assert.throws(()=>chooseCareerDirective(s,'sport'));
 p2(s).facilities.workshop=4;
 p2(s).facilities.data=3;
 const progress=reviewCareerDirective(s);
 assert.equal(progress.complete,true);
 assert.equal(careerPlan(s).directive.status,'COMPLETE');
 assert.equal(cash(s),before+directive.reward);
 reviewCareerDirective(s);
 assert.equal(cash(s),before+directive.reward);
});

test('progresso esportivo e comercial usa dados persistentes da carreira',()=>{
 const sport=createCareer({seed:'sport-directive',category:'inter'});
 const sportDirective=chooseCareerDirective(sport,'sport');
 sport.teamStandings.player=18;
 assert.equal(directiveProgress(sport).value,18);
 assert.ok(directiveProgress(sport).percent>0);
 const commercial=createCareer({seed:'commercial-directive',category:'inter'});
 chooseCareerDirective(commercial,'commercial');
 p2(commercial).fans=62000;
 assert.equal(reviewCareerDirective(commercial).complete,true);
 commercial.season=2;
 renewCareerPlan(commercial);
 assert.equal(careerPlan(commercial).season,2);
 assert.equal(careerPlan(commercial).directive,null);
 assert.equal(careerPlan(commercial).history.length,1);
});

test('central apresenta meta, progresso e escolha acessível para toque',async()=>{
 const [app,css]=await Promise.all([readFile(new URL('../src/ui/app.js',import.meta.url),'utf8'),readFile(new URL('../src/ui/style.css',import.meta.url),'utf8')]);
 for(const token of ['careerBrief','career-directive','DIREÇÃO DA TEMPORADA','TRABALHAR NESTA META'])assert.ok(app.includes(token));
 for(const token of ['.career-brief','.career-directives','min-height:48px'])assert.ok(css.includes(token));
});

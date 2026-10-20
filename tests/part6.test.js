import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createCareer} from '../src/state/career.js';
import {decode,encode} from '../src/services/save.js';

test('Parte 6 atribui identidade completa a todo o staff e migra saves existentes',()=>{
 const career=createCareer({seed:'people-v6'});
 assert.ok(career.staff.length>=12);
 assert.ok(career.staff.every(person=>person.nationality&&person.biography));
 const legacy=structuredClone(career);
 for(const person of legacy.staff){delete person.nationality;delete person.biography;}
 const migrated=decode(encode(legacy));
 assert.ok(migrated.staff.every(person=>person.nationality&&person.biography));
 assert.equal(migrated.contracts.length,career.contracts.length);
});

test('Parte 6 renderiza dossiês humanos e estados operacionais',async()=>{
 const app=await readFile(new URL('../src/ui/app.js',import.meta.url),'utf8');
 const css=await readFile(new URL('../src/ui/style.css',import.meta.url),'utf8');
 for(const token of ['peopleV6','identityDossier','peopleCondition','data-action="identity"','FORMA MÉDIA'])assert.ok(app.includes(token));
 for(const token of ['people-grid-identity','person-card-identity','dossier-hero','identity-meters'])assert.ok(css.includes(token));
});

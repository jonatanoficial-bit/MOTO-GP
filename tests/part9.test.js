import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

test('cada comando das centrais avançadas possui ligação com a carreira',async()=>{
 const [pages,app]=await Promise.all([
  readFile(new URL('../src/ui/part2-pages.js',import.meta.url),'utf8'),
  readFile(new URL('../src/ui/app.js',import.meta.url),'utf8')
 ]);
 const actions=[...pages.matchAll(/button\([^,]+,'([^']+)'/g)].map(match=>match[1]);
 for(const action of actions){
  assert.match(app,new RegExp(`(?:'${action}'|\\b${action}:)`),`ação ${action} sem ligação na interface`);
 }
 for(const token of ['managementActions','upgradeFacility(state','orderComponent(state','runMediaAction(state','resolveWorldEvent(state','createInvestorOffer(state'])assert.ok(app.includes(token));
});

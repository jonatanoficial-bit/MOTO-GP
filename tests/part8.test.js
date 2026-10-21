import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {CIRCUITS} from '../data/circuits.js';

test('todos os circuitos oferecem dados que alimentam o briefing de etapa',()=>{
 for(const circuit of CIRCUITS){
  assert.ok(Array.isArray(circuit.segments)&&circuit.segments.length>0);
  assert.ok(circuit.segments.every(segment=>segment.weight>0));
  assert.ok(circuit.abrasion>=.85&&circuit.abrasion<=1.15);
 }
});

test('briefing pré-sessão reúne pista, clima, presets e controles de estratégia',async()=>{
 const [app,css]=await Promise.all([
  readFile(new URL('../src/ui/app.js',import.meta.url),'utf8'),
  readFile(new URL('../src/ui/style.css',import.meta.url),'utf8')
 ]);
 for(const token of ['circuitProfile','recommendedCompound','applyBriefPreset','preSessionV8','preSession=preSessionV8','ASSINATURA DO TRAÇADO','JANELA METEOROLÓGICA','PLANO DE SAÍDA','brief-preset','pre-electronics'])assert.ok(app.includes(token));
 for(const token of ['.weekend-brief-hero','.briefing-grid','.briefing-presets','.briefing-inputs','min-height:48px'])assert.ok(css.includes(token));
});

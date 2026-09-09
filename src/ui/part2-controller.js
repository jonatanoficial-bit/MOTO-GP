import {FACILITIES,COMPONENTS,ADVANCED_PROJECTS,MEDIA_ACTIONS} from '../../data/part2.js';
import {facilityCost,upgradeFacility,orderComponent,startAdvancedProject,staffAction,scoutProspect,signAcademy,promoteProspect,runMediaAction,createInvestorOffer,decideInvestor,resolveWorldEvent} from '../systems/part2.js';
import {money} from './text.js';

export function installPart2Controller({getState,render,persist,toast,confirmAction,closeDialog}){
 document.addEventListener('click',event=>{
  const el=event.target.closest('[data-action]');
  if(!el)return;
  const action=el.dataset.action,id=el.dataset.id;
  try{
   const s=getState();
   if(!s)return;
   if(action==='facility-upgrade'){
    const item=FACILITIES.find(x=>x.id===id);
    confirmAction('Ampliar '+item.name+'?',`O investimento será de ${money(facilityCost(s,id))}. A capacidade entra em operação imediatamente.`,'facility-upgrade-confirm',`data-id="${id}"`);
   }else if(action==='facility-upgrade-confirm'){
    upgradeFacility(s,id);closeDialog();persist();render();toast('Instalação ampliada.');
   }else if(action==='component-order'){
    const item=COMPONENTS.find(x=>x.id===id);
    confirmAction('Emitir pedido?',`1 × ${item.name} por ${money(item.cost)} base. O prazo depende da estrutura logística.`,'component-order-confirm',`data-id="${id}"`);
   }else if(action==='component-order-confirm'){
    orderComponent(s,id,1);closeDialog();persist();render();toast('Pedido colocado na fila logística.');
   }else if(action==='advanced-start'){
    const project=ADVANCED_PROJECTS.find(x=>x.id===id);
    confirmAction('Autorizar dossiê técnico?',`${project.name} exige ${project.stages.length} fases e custa ${money(project.cost)} base. O ganho e o efeito colateral serão revelados na validação.`,'advanced-start-confirm',`data-id="${id}"`);
   }else if(action==='advanced-start-confirm'){
    startAdvancedProject(s,id);closeDialog();persist();render();toast('Projeto avançado iniciado.');
   }else if(action==='staff-action'){
    staffAction(s,id,el.dataset.mode);persist();render();toast(el.dataset.mode==='rest'?'Plano de recuperação aplicado.':'Treinamento registrado.');
   }else if(action==='scout'){
    scoutProspect(s,id);persist();render();toast('Relatório de scouting atualizado.');
   }else if(action==='academy-sign'){
    confirmAction('Assinar bolsa de formação?','O talento passará a evoluir após cada etapa concluída.','academy-sign-confirm',`data-id="${id}"`);
   }else if(action==='academy-sign-confirm'){
    signAcademy(s,id);closeDialog();persist();render();toast('Talento integrado à academia.');
   }else if(action==='academy-promote'){
    confirmAction('Promover ao elenco principal?','A promoção cria um contrato profissional de duas temporadas e ocupa uma vaga de piloto.','academy-promote-confirm',`data-id="${id}"`);
   }else if(action==='academy-promote-confirm'){
    promoteProspect(s,id);closeDialog();persist();render();toast('Piloto promovido ao elenco principal.');
   }else if(action==='media-action'){
    const campaign=MEDIA_ACTIONS.find(x=>x.id===id);
    confirmAction('Publicar campanha?',`${campaign.name} custa ${money(campaign.cost)} base e terá efeito imediato sobre a marca.`,'media-action-confirm',`data-id="${id}"`);
   }else if(action==='media-action-confirm'){
    runMediaAction(s,id);closeDialog();persist();render();toast('Campanha concluída.');
   }else if(action==='investor-create'){
    createInvestorOffer(s);persist();render();toast('A proposta chegou à diretoria.');
   }else if(action==='investor-decision'){
    decideInvestor(s,id,el.dataset.accept==='true');persist();render();toast('Decisão de investimento registrada.');
   }else if(action==='world-event'){
    resolveWorldEvent(s,id,el.dataset.choice);persist();render();toast('Consequência aplicada à carreira.');
   }else return;
   event.preventDefault();
  }catch(error){toast(error.message);}
 });
}

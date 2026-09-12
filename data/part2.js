export const FACILITIES=[
 {id:'workshop',name:'Oficina avançada',art:'garage',baseCost:220000,max:5,effect:'Reduz reparos e acelera projetos de chassi.'},
 {id:'dataCenter',name:'Centro de dados',art:'art-059',baseCost:260000,max:5,effect:'Melhora análise, previsão e projetos eletrônicos.'},
 {id:'performance',name:'Performance humana',art:'art-034',baseCost:190000,max:5,effect:'Acelera recuperação e evolução de pilotos.'},
 {id:'mediaStudio',name:'Estúdio de mídia',art:'art-039',baseCost:160000,max:5,effect:'Amplia alcance de campanhas e valor comercial.'},
 {id:'logistics',name:'Centro logístico',art:'art-060',baseCost:210000,max:5,effect:'Reduz prazo de peças e risco de atraso.'},
 {id:'academy',name:'Academia de pilotos',art:'art-040',baseCost:240000,max:5,effect:'Permite formar jovens e acelerar seu desenvolvimento.'}
];
export const COMPONENTS=[
 {id:'engine',name:'Motor',cost:72000,lead:3,min:3},
 {id:'fairing',name:'Carenagem',cost:18000,lead:1,min:5},
 {id:'brakes',name:'Kit de freios',cost:26000,lead:2,min:4},
 {id:'suspension',name:'Suspensão',cost:34000,lead:2,min:4},
 {id:'electronics',name:'Eletrônica',cost:42000,lead:2,min:3}
];
export const ADVANCED_PROJECTS=[
 {id:'aeroPackage',name:'Pacote aerodinâmico',attribute:'agility',facility:'workshop',cost:185000,stages:['PESQUISA','DESIGN','VALIDAÇÃO','FABRICAÇÃO'],gain:[3,6],risk:.18,sideEffect:'traction'},
 {id:'engineMap',name:'Mapa de potência adaptativo',attribute:'speed',facility:'dataCenter',cost:155000,stages:['PESQUISA','MODELAGEM','VALIDAÇÃO'],gain:[2,5],risk:.12,sideEffect:'reliability'},
 {id:'cooling',name:'Sistema de refrigeração',attribute:'reliability',facility:'workshop',cost:140000,stages:['PESQUISA','PROTÓTIPO','TESTE'],gain:[3,5],risk:.1,sideEffect:'speed'},
 {id:'tractionControl',name:'Controle de tração preditivo',attribute:'traction',facility:'dataCenter',cost:205000,stages:['DADOS','ALGORITMO','SIMULAÇÃO','VALIDAÇÃO'],gain:[3,6],risk:.2,sideEffect:'agility'},
 {id:'brakeCooling',name:'Refrigeração de freios',attribute:'braking',facility:'workshop',cost:165000,stages:['PESQUISA','DESIGN','VALIDAÇÃO'],gain:[2,5],risk:.13,sideEffect:'reliability'}
];
export const MEDIA_ACTIONS=[
 {id:'behindScenes',name:'Bastidores da garagem',cost:22000,fans:5200,brand:2,risk:0,description:'Conteúdo técnico aproxima fãs e patrocinadores.'},
 {id:'riderStory',name:'Perfil de piloto',cost:38000,fans:9000,brand:3,risk:.05,description:'Campanha centrada na trajetória de um piloto.'},
 {id:'globalLaunch',name:'Lançamento internacional',cost:95000,fans:22000,brand:6,risk:.12,description:'Grande exposição com risco de repercussão negativa.'},
 {id:'community',name:'Ação comunitária',cost:46000,fans:7500,brand:5,risk:.02,description:'Fortalece reputação e afinidade da equipe.'}
];
export const PART2_STAFF=[
 {id:'s6',name:'Sofia Mendonça',role:'scout',portraitSheet:'portraits-staff',portraitIndex:6,portraitCols:3,portraitRows:4,skill:78,salary:15000,personality:'Observadora',attributes:{precision:82,communication:73,pressure:70,innovation:76}},
 {id:'s7',name:'Laila Okafor',role:'physio',portraitSheet:'portraits-staff',portraitIndex:7,portraitCols:3,portraitRows:4,skill:81,salary:17000,personality:'Protetora',attributes:{precision:79,communication:84,pressure:77,innovation:68}},
 {id:'s8',name:'Matteo Rinaldi',role:'strategist',portraitSheet:'portraits-staff',portraitIndex:8,portraitCols:3,portraitRows:4,skill:83,salary:21000,personality:'Calculista',attributes:{precision:86,communication:76,pressure:88,innovation:80}},
 {id:'s9',name:'Jun Park',role:'logistics',portraitSheet:'portraits-staff',portraitIndex:9,portraitCols:3,portraitRows:4,skill:75,salary:14000,personality:'Metódico',attributes:{precision:84,communication:68,pressure:73,innovation:70}},
 {id:'s10',name:'Amélie Laurent',role:'media',portraitSheet:'portraits-staff',portraitIndex:10,portraitCols:3,portraitRows:4,skill:79,salary:16000,personality:'Carismática',attributes:{precision:70,communication:90,pressure:77,innovation:82}},
 {id:'s11',name:'Dandara Costa',role:'engineer',portraitSheet:'portraits-staff',portraitIndex:11,portraitCols:3,portraitRows:4,skill:76,salary:15500,personality:'Analítica',attributes:{precision:80,communication:77,pressure:74,innovation:83}}
];
export const YOUTH=[
 ['y0','Joana Avelar','BR',18,61,88,'Suave'],['y1','Thiago Nunes','PT',17,58,91,'Técnico'],['y2','Aiko Fujimori','JP',18,64,86,'Agilidade'],['y3','Samir El-Hadi','MA',19,65,84,'Frenagem'],
 ['y4','Noa Vermeer','NL',17,59,93,'Chuva'],['y5','Chiara Bassi','IT',18,63,89,'Classificação'],['y6','Kwame Mensah','GH',19,62,87,'Tração'],['y7','Lucía Serrano','ES',17,60,92,'Agressivo']
].map(([id,name,nationality,age,level,potential,style],i)=>({id,name,nationality,age,level,potential,style,cost:30000+level*500,portraitSheet:'portraits-youth',portraitIndex:i,portraitCols:4,portraitRows:2,attributes:{speed:level,qualifying:level+(i%5)-2,braking:level+2,traction:level-1,wet:55+i*6%30,tyre:60+i*4%25,consistency:57+i*5%28,overtaking:level+1,defence:level-2,feedback:58+i*3%24,riskControl:56+i*7%30,start:level}}));
export const REGULATIONS={
 light:{name:'Regulamento formação',parcFerme:true,penaltyChance:.04,redRestart:'volta anterior',engineAllocation:5,tyreSets:7},
 inter:{name:'Regulamento protótipo',parcFerme:true,penaltyChance:.07,redRestart:'ordem da volta anterior',engineAllocation:4,tyreSets:6},
 super:{name:'Regulamento produção',parcFerme:true,penaltyChance:.09,redRestart:'ordem da última passagem',engineAllocation:4,tyreSets:6},
 elite:{name:'Regulamento elite',parcFerme:true,penaltyChance:.11,redRestart:'ordem da última passagem',engineAllocation:3,tyreSets:5}
};
export const EVENT_TEMPLATES=[
 {id:'staffFatigue',title:'Equipe no limite',body:'A sequência de viagens elevou a fadiga do staff.',choices:[['rest','Dar folga programada'],['push','Manter o ritmo de trabalho']]},
 {id:'sponsorActivation',title:'Ativação comercial',body:'O patrocinador pede presença em um evento antes da próxima etapa.',choices:[['attend','Enviar pilotos e equipe de mídia'],['decline','Recusar para preservar preparação']]},
 {id:'technicalAlert',title:'Alerta de componente',body:'A inspeção detectou desgaste acima do previsto em peças de reposição.',choices:[['replace','Comprar lote emergencial'],['risk','Assumir o risco técnico']]},
 {id:'rivalApproach',title:'Sondagem no paddock',body:'Uma equipe rival procurou discretamente um integrante do seu staff.',choices:[['raise','Oferecer bônus de retenção'],['trust','Confiar no contrato atual']]},
 {id:'mediaQuestion',title:'Pressão da imprensa',body:'Uma entrevista exige resposta sobre a fase esportiva da equipe.',choices:[['honest','Reconhecer os desafios'],['bold','Prometer reação imediata']]}
];

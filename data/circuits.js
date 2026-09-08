// Original fictional layouts. Coordinates and physical microsegments share the same order.
const rows=[
 ['desert','Al Qamar','QA','Doha','Oriente Médio',5.2,31,.08,[ [120,290],[610,290],[700,230],[650,130],[460,110],[420,200],[310,190],[260,85],[110,95],[65,180] ]],
 ['neon','Marina Lights','AE','Marina','Oriente Médio',4.8,29,.04,[[90,290],[640,290],[710,240],[710,100],[590,65],[510,140],[550,220],[330,225],[310,80],[190,65],[190,210],[70,200]]],
 ['coast','Costa Azzurra','IT','Riviera','Europa',4.3,23,.2,[[80,260],[290,285],[420,260],[660,290],[720,220],[620,150],[670,80],[480,60],[350,170],[230,80],[100,100]]],
 ['alpine','Alpenring','AT','Tirol','Europa',5.5,17,.48,[[110,290],[690,290],[680,170],[580,70],[440,90],[450,180],[330,220],[290,120],[180,60],[70,140]]],
 ['tuscany','Colline Rosse','IT','Toscana','Europa',5.1,25,.18,[[85,280],[390,310],[650,270],[700,180],[620,70],[500,70],[490,170],[400,120],[280,75],[240,200],[120,180],[65,220]]],
 ['sakura','Sakura Park','JP','Nagano','Ásia',4.7,20,.58,[[90,280],[650,280],[700,210],[610,180],[660,95],[520,60],[420,130],[330,90],[270,180],[160,110],[60,170]]],
 ['tropical','Selat Circuit','MY','Selat','Ásia',5.4,32,.65,[[65,290],[695,290],[700,210],[410,210],[390,160],[660,110],[560,50],[340,90],[210,60],[110,120],[200,190],[70,215]]],
 ['texas','Red Mesa','US','Austin','América do Norte',5.6,28,.2,[[85,290],[600,310],[710,250],[660,160],[520,210],[480,130],[560,80],[360,55],[290,130],[220,85],[150,145],[90,95],[55,200]]],
 ['rio','Baía do Sol','BR','Rio de Janeiro','América do Sul',4.6,29,.4,[[70,260],[600,300],[710,230],[620,170],[660,80],[480,65],[410,130],[330,70],[210,80],[240,190],[90,170]]],
 ['ocean','Southern Cape','AU','Victoria','Oceania',4.4,19,.32,[[90,270],[490,300],[680,260],[715,170],[600,100],[490,70],[420,140],[310,70],[170,100],[70,175]]]
];
export const CIRCUITS=rows.map(([id,name,country,city,continent,length,temp,rain,path],i)=>{const lengths=path.map((p,j)=>Math.hypot(p[0]-path[(j+1)%path.length][0],p[1]-path[(j+1)%path.length][1]));const sum=lengths.reduce((a,b)=>a+b,0);return {id,name,country,city,continent,length,temp,rain,art:'circuit-'+i,baseLap:83+i%4*4,abrasion:.85+i%4*.1,path,segments:lengths.map((l,j)=>({id:j,weight:l/sum,type:l>230?'straight':j%2?'corner':'traction',opportunity:l>200?.9:.25,risk:j%3===0?1.4:.8})),setup:[30+i*17%50,25+i*11%55,35+i*13%45]};});

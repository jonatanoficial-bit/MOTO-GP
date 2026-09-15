# Moto Racing Manager — Parte 4

Jogo de gestão de motovelocidade em HTML, CSS e JavaScript modular. A Parte 4 preserva as Partes 1–3 e transforma a etapa de corrida em uma transmissão ao vivo, com comandos de pit wall e visual otimizado para telas verticais.

## Executar

Requer Node.js 20 ou superior e não possui dependências externas.

```bash
npm start
```

Abra `http://127.0.0.1:4173`. O projeto deve ser aberto por servidor HTTP por usar módulos ES e PWA.

## Destaques da Parte 4

- Transmissão de corrida com circuito animado, motos em pista, cronômetro, bandeiras, rádio, ranking, gaps, melhor volta e clima ao vivo.
- Grid de largada com avatar, bandeira nacional, número, equipe e volta de classificação de todos os pilotos.
- Resultado oficial com avatar e bandeira dos pilotos, tempo, posição de largada, pontos, ocorrências e impacto financeiro.
- Comandos por piloto no pit wall: mapa de motor, ritmo, eletrônica, balanço de freio, uso conservador/normal/forte de pneus, pneu do próximo pit e parada segura/normal/rápida.
- Clima dinâmico, pista molhada, vento, temperatura do ar e asfalto, combustível, desgaste, temperatura, integridade, risco e pneus conectados ao motor de simulação.
- Navegação móvel vertical: controles grandes, barra inferior rolável, corrida sem bloqueio por orientação e cards compactos para tomada de decisão.
- Central de mensagens que registra acontecimentos de gestão; tutorial completo em seis etapas, disponível na criação da carreira e pelo botão **GUIA**.
- Saves V4 com migração automática de carreiras V1, V2 e V3. Os slots antigos ficam intactos no navegador.

## Conteúdo preservado

Continuam disponíveis criação de equipe, contratos, finanças, instalações, estoque, logística, P&D, gestão humana, scouting, academia, mídia, investidores, eventos, regulamentos, IA rival, dez circuitos, treino, classificação, campeonato e renovação de temporada.

Também permanecem os 44 personagens com retratos, os seis fabricantes com pacotes técnicos, o emblema fornecido para o jogo e o acervo de cenários das Partes anteriores.

## Validar

```bash
npm test
npm run check
npm run balance
```

- `npm test` cobre carreira, gestão, saves, migrações, pneus, clima, pit strategy, retratos e interface.
- `npm run check` verifica sintaxe, imports, bandeiras, marcas e SHA-256 das artes.
- `npm run balance` executa 50 corridas determinísticas sem interface.

## Publicar no GitHub Pages

Extraia o ZIP e publique o conteúdo da pasta como repositório. Em **Settings → Pages**, selecione **Deploy from a branch**, branch `main` e pasta `/ (root)`.

O arquivo `.nojekyll`, o manifest PWA e o service worker V4 já estão incluídos.

## Estrutura

```text
assets/                 artes, retratos, marcas, bandeiras e logo do jogo
data/                   configuração, circuitos e conteúdo avançado
src/state/              schemas V1–V4 e migrações
src/simulation/         motor de corrida determinístico e telemetria
src/ui/                 pit wall, transmissão, gestão, tutorial e mobile
tests/                  testes funcionais e de integração
docs/                   escopo e roteiro de QA
```

## Conteúdo e marcas

Pilotos, staff, equipes rivais, patrocinadores e circuitos são fictícios. Nomes e marcas de fabricantes pertencem aos respectivos titulares. Os wordmarks são uma apresentação vetorial criada para esta experiência independente, sem afiliação, endosso ou licença oficial.
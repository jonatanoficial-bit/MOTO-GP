# Relatório de validação — Parte 1

Data: 8 de setembro de 2026.

## Resultado automatizado

- 9 de 9 testes aprovados.
- Temporada completa de dez etapas iniciada, simulada, encerrada e renovada.
- Mesmo seed reproduz o mesmo estado e resultado.
- Save exportado e reaberto preserva sessão em andamento.
- Backup anterior é recuperado quando o slot principal está corrompido.
- Contratos, rescisão, patrocínios, ledger e compromissos são reconciliados.
- Pneu gasto piora performance; chuva favorece o composto adequado; acerto distante custa tempo.
- Penalidade altera o grid sem duplicar posições.
- Bandeira vermelha interrompe a sessão e a classificação respeita o cronômetro.
- IA mantém dois pilotos por equipe na nova temporada e movimenta o mercado.
- 128 verificações de sintaxe e integridade do código e das artes aprovadas, além das bandeiras de todos os países referenciados; 110 artes com SHA-256 confirmado.
- Simulação em lote: 50 corridas, 800 largadas e 0,375% de abandonos na seed do teste.
- Servidor local respondeu HTTP 200 para a página e o manifesto.

## Cobertura funcional

Criação de equipe, elenco, staff, fabricante, patrocínio, treino, setup, pneus, classificação, grid, corrida 2D, clima, incidentes, resultados, pontuação, finanças, notícias, P&D, IA, save, autosave, slots, fim e renovação da temporada estão conectados ao estado central.

## Validação visual pendente

A interface possui regras responsivas para 640×360, mobile horizontal, tablet e desktop, além do bloqueio em retrato. Esta sessão não executou uma inspeção visual manual em aparelhos físicos. Antes de um lançamento público, faça uma rodada manual em celular e PC, com atenção a notch, fullscreen e desempenho das imagens no primeiro carregamento.

## Comandos de reprodução

```bash
npm test
npm run check
npm run balance
npm start
```

# QA — Parte 3

Execute na raiz do projeto:

```bash
npm test
npm run check
npm run balance
```

Critérios de aceite:

- todos os testes funcionais aprovados;
- sintaxe e imports válidos;
- 114 imagens verificadas por SHA-256;
- 44 personagens associados a retratos;
- seis arquivos vetoriais de fabricantes disponíveis;
- saves V1 e V2 migrados para V3;
- menu, pessoas, academia, parceiros, garagem, grid e pit wall inspecionados em navegador;
- controles de mapa, eletrônica e freio respondendo durante a sessão;
- nenhuma requisição de recurso local retorna erro.

## Resultado da validação final — 10/09/2026

- `node --test tests/*.test.js`: 22 aprovados, 0 falhas.
- `node scripts/check.js`: 212 verificações de sintaxe, arquivos e integridade aprovadas; 114 artes catalogadas.
- `node scripts/balance.js`: 50 corridas, 800 largadas e taxa de abandono de 0,5%.
- Navegador: menu com emblema oficial, dashboard, cards de pilotos/staff, academia, fabricantes e garagem revisados sem erro de console.

# Auditoria de imersão visual

## Objetivo aplicado

A interface agora opera como uma camada sobre ambientes físicos e não como uma página plana com wallpaper. A cena preenche a tela, recebe uma proteção de contraste localizada e permanece visível nas bordas, no centro e nas áreas de respiro. Painéis, barra superior, navegação e modal usam vidro escuro translúcido; o texto ganha área de leitura sem esconder o local.

## Decisões implementadas

- **Centro de comando:** o dashboard prioriza a próxima etapa, o traçado e decisões executivas sobre uma sala de direção, com métricas e mensagens em placas de vidro.
- **Pessoas e contratos:** cards usam avatares; abrir perfil ou negociação cria uma composição contextual de maior escala, em vez de uma caixa genérica.
- **Garagem e engenharia:** motos, bancada, telemetria e projetos recebem ambientes técnicos próprios por meio de `engineering` e `garage`.
- **Operações e calendário:** logística, paddock, mapa e destinos trocam o ambiente conforme a área acessada.
- **Sessão, grid e resultado:** pit wall e transmissão mantêm dados densos como exceção funcional, enquanto grid e pódio preservam o circuito ao fundo com gradientes localizados.
- **Evolução de equipe:** `getTeamVisualTier` deriva `STARTUP`, `PROFESSIONAL`, `WORLD_CLASS` e `ELITE` de instalações, reputação, títulos e pontos sem escrever em save ou interferir na simulação.
- **Acessibilidade e desempenho:** contraste reforçado, preferência de movimento reduzido, redução automática de transparência em telas estreitas e orientação de retrato bloqueada pelo `OrientationGuard`; o jogo permanece em paisagem no celular.

## Verificação visual

| Cenário | Antes | Depois |
|---|---|---|
| Dashboard | bloco de informações com imagem localizada | centro de comando com o próximo evento e o traçado integrados ao ambiente |
| Contrato | diálogo textual | mesa de negociação com avatar ou identidade visual do parceiro |
| Engenharia | cards técnicos isolados | bancada/garage de engenharia como cena de fundo e painéis translúcidos |
| Pré-largada | cartões sobre fundo fortemente coberto | grid transmitido sobre o circuito atual, com bandeiras e estratégia legíveis |
| Resultado | banner escuro tradicional | pódio e vencedor contextualizados com leitura localizada para a classificação |

## Limites preservados

Esta entrega não muda fórmulas de corrida, lógica de pneus, consumo, IA, economia, contrato, banco de dados local ou versão de save. A cena é uma camada de apresentação sem side effects. A transição só remove o frame anterior depois de a imagem seguinte carregar, e o fallback `neutral` evita uma tela vazia se um arquivo não estiver disponível.

## Checagens necessárias

- `node --check src/ui/app.js`
- `node --check src/ui/scenes.js`
- `node --test tests/*.test.js`
- `node scripts/check.js`
- `node scripts/balance.js`

A execução técnica deve ser acompanhada pela inspeção manual de dashboard, pessoas, garagem, operações, calendário, sessão, grid e resultado em paisagem.

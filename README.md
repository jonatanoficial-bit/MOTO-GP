# Moto Racing Manager

Jogo de gestão de motovelocidade em HTML, CSS e JavaScript modular. Gerencie pessoas, fabricantes, orçamento, engenharia, operações e corridas com uma transmissão ao vivo que reage às decisões da equipe.

## Executar

Requer Node.js 20 ou superior e não possui dependências externas.

```bash
node scripts/serve.js
```

Abra `http://127.0.0.1:4173`. O projeto deve ser aberto por servidor HTTP por usar módulos ES e PWA.

## Experiência de gestão e corrida

- Centro de comando cinematográfico, com ambientes que evoluem de startup a equipe de elite.
- Gestão de pilotos, staff, parceiros, finanças, instalações, estoque, logística, P&D, academia, mídia, investidores, eventos e regulamentos.
- Avatares multiculturais em perfis, negociações, grid, controle de corrida e resultados; cada piloto mantém bandeira e identidade visual.
- Corrida transmitida ao vivo com motos na pista, ranking, gaps, melhor volta, rádio, clima e telemetria.
- Pit wall por piloto: mapa de motor, ritmo, eletrônica, balanço de freio, uso de pneus, composto do próximo pit e velocidade da parada.
- Grid e pódio integrados ao circuito atual, com estratégia pré-largada, ocorrências, pontos e impacto financeiro.
- Tutorial em seis etapas, central de mensagens e saves com migração de carreiras antigas preservando os slots anteriores.
- Interface adaptada para celular em **paisagem**, com controles grandes e orientação de retrato bloqueada durante o jogo.

## Imersão visual

A camada `src/ui/scenes.js` escolhe cenários locais por área, etapa e maturidade da equipe. Ela faz pré-carga enxuta, troca o cenário sem tela vazia e usa fallback seguro. Painéis usam superfícies translúcidas para manter a leitura sem apagar o ambiente.

A auditoria completa está em [docs/VISUAL-ASSET-AUDIT.md](docs/VISUAL-ASSET-AUDIT.md) e [docs/VISUAL-IMMERSION-AUDIT.md](docs/VISUAL-IMMERSION-AUDIT.md). A prancha [docs/asset-contact-sheet.jpg](docs/asset-contact-sheet.jpg) permite revisar visualmente o acervo inteiro.

## Validar

```bash
node --test tests/*.test.js
node scripts/check.js
node scripts/balance.js
```

- O teste cobre carreira, gestão, saves, migrações, pneus, clima, pit strategy, retratos e interface.
- A checagem valida sintaxe, imports, bandeiras, marcas e SHA-256 das artes.
- O balanceamento executa 50 corridas determinísticas sem interface.

## Publicar no GitHub Pages

Publique o conteúdo desta pasta no repositório. Em **Settings → Pages**, selecione **Deploy from a branch**, branch `main` e pasta `/ (root)`.

O arquivo `.nojekyll`, o manifest PWA e o service worker já estão incluídos.

## Estrutura

```text
assets/                 artes, retratos, marcas, bandeiras e logo do jogo
data/                   configuração, circuitos e conteúdo avançado
src/state/              schemas e migrações de carreira
src/simulation/         motor de corrida determinístico e telemetria
src/ui/                 transmissão, gestão, tutorial e cenas visuais
tests/                  testes funcionais e de integração
docs/                   auditorias, escopo e roteiro de QA
```

## Conteúdo e marcas

Pilotos, staff, equipes rivais, patrocinadores e circuitos são fictícios. Nomes e marcas de fabricantes pertencem aos respectivos titulares. Os wordmarks são uma apresentação vetorial criada para esta experiência independente, sem afiliação, endosso ou licença oficial.

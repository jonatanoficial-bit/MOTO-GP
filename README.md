# Moto Racing Manager — Parte 2

Jogo de gestão de uma equipe fictícia de motovelocidade feito em HTML, CSS e JavaScript modular. A Parte 2 mantém toda a temporada jogável da Parte 1 e acrescenta gestão avançada da organização, do paddock e da marca.

## Jogar

Requer Node.js 20 ou superior. Não há dependências para instalar.

```bash
npm start
```

Abra `http://127.0.0.1:4173`. O projeto usa módulos ES e precisa de um servidor HTTP; abrir `index.html` diretamente não habilita toda a aplicação nem a PWA.

## Novidades da Parte 2

- Seis instalações com cinco níveis, custos de ampliação e manutenção.
- Estoque de motores, carenagens, freios, suspensão e eletrônica.
- Pedidos com custo, prazo, rastreamento e bônus de logística.
- Cinco projetos avançados de P&D com fases, riscos, ganhos e efeitos colaterais.
- Cinco novas funções de staff, além de moral, lealdade, fadiga, treino e descanso.
- Oito jovens fictícios, scouting com intervalos de incerteza, academia e promoção.
- Confiança, pressão, frustração, motivação, lesões e rivalidades entre pilotos.
- Campanhas de mídia, audiência, engajamento, valor de mídia, marca e crises.
- Avaliação da equipe, participação societária, ofertas e pressão de investidores.
- Eventos contextuais com escolhas, consequências e registro no histórico.
- Regulamento por categoria, decisões esportivas e penalidades de grid.
- Clima com temperatura do ar e pista, vento, tendência e evolução durante a sessão.
- IA rival com foco estratégico e desenvolvimento progressivo.
- Quatro novas áreas funcionais: Operações, Academia, Mídia e Mundo.

## Conteúdo preservado da Parte 1

Criação de equipe, 24 pilotos, contratos, fabricantes, patrocinadores, finanças, dez circuitos, treino, acerto, pneus, classificação, grid, corrida 2D, clima, incidentes, pontuação, notícias, P&D básico, autosave, slots, exportação, fim e renovação de temporada continuam disponíveis.

Carreiras exportadas pela Parte 1 migram automaticamente para o formato da Parte 2. Os slots da Parte 2 usam um namespace separado e a origem antiga serve apenas como fonte de migração.

## Testar

```bash
npm test
npm run check
npm run balance
```

- `npm test` valida a carreira e os sistemas das duas partes.
- `npm run check` verifica sintaxe, imports, bandeiras e SHA-256 das 110 artes.
- `npm run balance` executa corridas sem interface para medir o comportamento do motor.

## Publicar no GitHub Pages

O ZIP completo ultrapassa 100 MiB porque contém 110 artes. Extraia o pacote antes de publicá-lo; não adicione o ZIP dentro do repositório.

1. Extraia a pasta.
2. Adicione a pasta como repositório pelo GitHub Desktop ou Git.
3. Faça o primeiro commit e publique a branch `main`.
4. Em **Settings → Pages**, selecione **Deploy from a branch**, branch `main` e pasta `/ (root)`.

O arquivo `.nojekyll` e o service worker versão 2 já estão incluídos.

## Estrutura

```text
assets/                 110 artes, bandeiras e ícone
data/                   configuração, circuitos e conteúdo avançado
src/state/              carreira e migração da Parte 2
src/systems/            finanças, contratos, temporada e sistemas avançados
src/simulation/         motor determinístico de sessão
src/race/               TrackMap ligado à simulação
src/services/           saves, backup e áudio
src/ui/                 interface principal e centrais da Parte 2
tests/                  testes funcionais e de integração
docs/                   bíblia, catálogo, escopo e relatório de validação
```

## Conteúdo e direitos

Pilotos, equipes, fabricantes, patrocinadores e circuitos desta versão são fictícios. As artes e a bíblia foram fornecidas pelo proprietário do projeto e permanecem sob os direitos definidos por ele. Nenhuma licença de terceiros é concedida por este pacote.

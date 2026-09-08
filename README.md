# Moto Racing Manager — Parte 1

Jogo de gestão de uma equipe fictícia de motovelocidade feito em HTML, CSS e JavaScript modular. Esta entrega cobre o ciclo de uma temporada completa e usa as artes oficiais fornecidas pelo criador do projeto.

## Jogar

Requer Node.js 20 ou superior. Não há dependências para instalar.

```bash
npm start
```

Abra `http://127.0.0.1:4173`. O jogo precisa de um servidor HTTP; abrir `index.html` diretamente não habilita todos os módulos nem a PWA.

## O que funciona

- Criação de equipe com categoria, país, cidade, cor e filosofia.
- Mercado com 24 pilotos fictícios, seis profissionais de staff, agentes e atributos separados.
- Contratos com contraproposta, duração, luvas, parcelas por etapa e rescisão.
- Três fabricantes, três patrocinadores, metas, bônus e reputação mínima.
- Ledger financeiro, projeção, compromissos, crédito, juros, premiação e reparos.
- Dez circuitos fictícios internacionais, bandeiras vetoriais, fundos e TrackMaps próprios.
- Treino com runs, pneus, desgaste, acerto, trabalho de garagem e feedback do engenheiro.
- Classificação ao vivo, grid derivado dos tempos e apresentação pré-largada.
- Corrida 2D com largada, ritmo, box, clima, ultrapassagens, incidentes, falhas e bandeiras.
- IA rival, pontos, contagem de desempate, notícias, P&D, fim e renovação de temporada.
- Autosave, três slots manuais, backup automático, importação e exportação JSON.
- PWA base, cache progressivo, orientação horizontal, fullscreen e opções de acessibilidade.

## Publicar no GitHub Pages

O ZIP completo tem mais de 100 MiB porque contém 110 artes. Não envie o próprio ZIP como um arquivo do repositório. Extraia-o e envie a pasta usando Git ou GitHub Desktop. Cada arquivo individual do projeto fica abaixo do limite de 100 MiB do GitHub.

1. Crie um repositório vazio no GitHub.
2. Extraia o ZIP.
3. No GitHub Desktop, escolha **Add an Existing Repository from your Hard Drive**. Se necessário, use **create a repository** para a pasta extraída.
4. Faça o primeiro commit e publique o repositório.
5. No GitHub, abra **Settings → Pages**.
6. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.

O arquivo `.nojekyll` já está incluído. Como há mais de 100 arquivos, o envio pelo navegador precisaria ser dividido; GitHub Desktop ou Git são mais adequados.

## Testar

```bash
npm test
npm run check
npm run balance
```

`npm test` valida os sistemas e uma temporada completa. `npm run check` verifica sintaxe, caminhos e o SHA-256 de todas as artes. `npm run balance` executa 50 corridas sem interface e mostra as métricas.

## Estrutura

```text
assets/                 110 artes, bandeiras e ícone
data/                   categorias, pessoas, parceiros e circuitos
src/core/               seed e utilitários numéricos
src/state/              estado central da carreira
src/systems/            contratos, finanças e temporada
src/simulation/         motor determinístico de sessão
src/race/               TrackMap ligado à simulação
src/services/           save, backup e áudio
src/ui/                 interface e textos em PT-BR
tests/                  testes funcionais e de integração
docs/                   bíblia, catálogo e relatórios
```

## Adicionar novas artes

Consulte [docs/ASSETS.md](docs/ASSETS.md). A interface usa chaves do `asset-manifest.json`, mantendo a arte separada da lógica.

## Conteúdo e direitos

Pilotos, equipes, fabricantes, patrocinadores e circuitos desta versão são fictícios. As artes e a bíblia foram fornecidas pelo proprietário do projeto e permanecem sob os direitos definidos por ele. Nenhuma licença de terceiros é concedida por este pacote.

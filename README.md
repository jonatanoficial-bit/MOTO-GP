# Moto Racing Manager — Parte 3

Jogo de gestão de motovelocidade em HTML, CSS e JavaScript modular. A Parte 3 preserva integralmente as Partes 1 e 2 e acrescenta retratos para todo o elenco, direção visual premium, fabricantes reais e decisões técnicas durante a corrida.

## Executar

Requer Node.js 20 ou superior e não possui dependências externas.

```bash
npm start
```

Abra `http://127.0.0.1:4173`. O projeto usa módulos ES e deve ser aberto por um servidor HTTP.

## Destaques da Parte 3

- 44 personagens com retratos: 24 pilotos, 12 profissionais e 8 jovens da academia.
- Elenco multirracial com diferentes gêneros, idades adultas e origens culturais.
- Menu cinematográfico com o emblema oficial fornecido, navegação maior, botões destacados e telas baseadas no acervo visual.
- Ducati Corse, Yamaha Racing, Honda Racing, KTM Factory Racing, Aprilia Racing e BMW Motorrad Motorsport.
- Pacotes de fabricante com preço, arquitetura de motor e atributos próprios.
- Mapa de motor, eletrônica, balanço de freio e combustível em tempo real.
- Telemetria de pneus, temperatura, integridade da moto, combustível, mapa e volta.
- Dados de treino, confiança de acerto e histórico de debriefs técnicos.
- Saves V3 com migração automática de carreiras V1 e V2.

## Conteúdo preservado

Continuam disponíveis criação de equipe, contratos, finanças, instalações, estoque, logística, P&D, gestão humana, scouting, academia, mídia, investidores, eventos, regulamentos, clima dinâmico, IA rival, dez circuitos, treino, classificação, grid, corrida, resultados, campeonato e renovação de temporada.

As Partes 1 e 2 permanecem em pastas e ZIPs independentes. A Parte 3 usa o namespace `mrm-v3-`, deixando os slots antigos intactos.

## Controles técnicos

- **Ritmo:** conservar, equilibrado ou atacar.
- **Mapa do motor:** economia reduz consumo e falhas; potência melhora ritmo com maior consumo e risco.
- **Eletrônica:** segura reduz risco; direta melhora resposta e aumenta exposição a incidentes.
- **Freio dianteiro:** de 48% a 56%; afastar-se da janela ideal custa tempo nas curvas.
- **Pneus:** composto, desgaste e temperatura reagem à pista e ao clima.

## Validar

```bash
npm test
npm run check
npm run balance
```

- `npm test` valida carreira, gestão, migrações, retratos, fabricantes e simulação.
- `npm run check` verifica sintaxe, imports, bandeiras, marcas e SHA-256 das artes.
- `npm run balance` executa corridas determinísticas sem interface.

## Publicar no GitHub Pages

O pacote completo ultrapassa 100 MiB por conter todas as artes. Extraia o ZIP antes de publicar e não adicione o próprio ZIP ao repositório.

1. Extraia a pasta.
2. Publique o conteúdo como repositório pelo GitHub Desktop ou Git.
3. Em **Settings → Pages**, selecione **Deploy from a branch**, branch `main` e pasta `/ (root)`.

O arquivo `.nojekyll`, o manifest PWA e o service worker V3 já estão incluídos.

## Estrutura

```text
assets/art/             110 cenários e imagens originais
assets/portraits/       4 folhas de retratos geradas para a Parte 3
assets/brands/          emblema MRM, identidade e seis wordmarks vetoriais
data/                   configuração, circuitos e conteúdo avançado
src/state/              estado V3 e migrações
src/systems/            finanças, contratos, temporada e gestão
src/simulation/         motor determinístico com controles técnicos
src/ui/                 interface premium e centrais de gestão
tests/                  testes funcionais e de integração
docs/                   bíblia, catálogo, escopo e QA
```

## Conteúdo e marcas

Pilotos, staff, equipes rivais, patrocinadores e circuitos são fictícios. Os nomes e marcas de fabricantes pertencem aos respectivos titulares. Os wordmarks incluídos são uma apresentação vetorial criada para esta experiência independente, sem afiliação, endosso ou licença oficial.

Os quatro conjuntos de retratos foram produzidos com o gerador de imagens integrado a partir de especificações de retratos fotográficos adultos, enquadramento uniforme de paddock, roupas sem marca e diversidade multirracial. Os arquivos finais estão catalogados e protegidos por SHA-256.

# Auditoria de ativos visuais

## Inventário verificado

A inspeção visual foi feita com a prancha [asset-contact-sheet.jpg](asset-contact-sheet.jpg), e a integridade foi conferida contra `asset-manifest.json`. O pacote contém **114 recursos rasterizados**: 110 artes ambientais/originais e quatro folhas de retratos. Cada linha abaixo aponta para o arquivo versionado, sua chave de produção e um trecho do SHA-256 registrado; portanto o catálogo também é a trilha de integridade para uma futura troca de arte.

O jogo não depende de nomes de arquivos do sistema operacional. A camada `src/ui/scenes.js` resolve chaves lógicas no manifesto, carrega apenas uma cena por vez e mantém a cena anterior até a nova imagem concluir o carregamento. Se uma chave faltar, a cena usa `neutral`, sem interromper a tela nem a carreira.

## Mapa de utilização

| Área | Ambientes em rotação | Foco visual |
|---|---|---|
| Centro de comando | `commandStartup`, `commandProfessional`, `commandWorld`, `commandElite` | sala de comando, diretoria, calendário e conquistas |
| Pessoas e contratos | `people`, `academy`, `hospitality` | retratos, negociação e relações humanas |
| Engenharia e garagem | `engineering`, `garage` | moto, ferramentas, CAD, dados e trabalho de box |
| Operações e calendário | `logistics`, `worldTour` | transporte, paddock, mapa e destinos da temporada |
| Corrida | `raceControl`, `grid`, `legacyStartup`, `legacyElite` | pit wall, transmissão, grid, pódio e resultado |
| Avatares | `portraits-*`, `rider-*`, `engineer`, `mechanic`, `commercial`, `guide` | pilotos e staff multicultural em cards, grid, resultado e diálogos |

A escolha muda de forma determinística por temporada, etapa e tela. Assim a mesma carreira mantém continuidade, enquanto ambientes elegíveis entram em rotação ao longo do campeonato. A pré-carga é limitada à cena atual e até dois destinos prováveis; não há carregamento de toda a biblioteca na inicialização.

## Registro completo

| Chave lógica | Arquivo | Papel concreto | SHA-256 |
|---|---|---|---|
| `art-001` | `assets/art/art-09-34-46-1-v01.png` | Cena elegível: commandElite, legacyStartup, legacyElite | `b55eb62b8db6af9d…` |
| `art-002` | `assets/art/art-09-34-47-2-v01.png` | Cena elegível: engineering | `2c636dae500eb2b0…` |
| `art-003` | `assets/art/art-09-34-47-3-v01.png` | Cena elegível: engineering | `a93ef56ed893630f…` |
| `art-004` | `assets/art/art-09-34-47-4-v01.png` | Cena elegível: commandProfessional, executive, neutral | `73a8f72f3bf8d7c0…` |
| `art-005` | `assets/art/art-09-34-47-5-v01.png` | Cena elegível: hospitality | `9777c68b1e2ff0ad…` |
| `art-006` | `assets/art/art-09-34-47-6-v01.png` | Cena elegível: hospitality | `ded31d9a51ae0f82…` |
| `art-007` | `assets/art/art-09-34-48-10-v01.png` | Cena elegível: logistics | `b2df67e4ef822269…` |
| `art-008` | `assets/art/art-09-34-48-7-v01.png` | Cena elegível: executive | `e6f9d50a8f89e1ee…` |
| `art-009` | `assets/art/art-09-34-48-8-v01.png` | Cena elegível: executive | `33f92bafa3c26d56…` |
| `art-010` | `assets/art/art-09-34-48-9-v01.png` | Cena elegível: executive | `230fb6fd21cfd01d…` |
| `art-011` | `assets/art/art-09-35-06-1-v01.png` | Cena elegível: commandElite, legacyStartup, legacyElite | `c74974692af5bf82…` |
| `art-012` | `assets/art/art-09-35-07-10-v01.png` | Cena elegível: commandElite | `fe88ad2198f2cafb…` |
| `art-013` | `assets/art/art-09-35-07-2-v01.png` | Cena elegível: commandElite | `32c1686baf165e04…` |
| `art-014` | `assets/art/art-09-35-07-3-v01.png` | Cena elegível: commandElite | `7e4435503bde38cc…` |
| `art-015` | `assets/art/art-09-35-07-4-v01.png` | Cena elegível: hospitality | `dedd8b2d6e1507a7…` |
| `art-016` | `assets/art/art-09-35-07-5-v01.png` | Cena elegível: hospitality | `287ab633264b3c2c…` |
| `art-017` | `assets/art/art-09-35-07-6-v01.png` | Cena elegível: engineering | `4353d17f8a7d5cbb…` |
| `art-018` | `assets/art/art-09-35-07-7-v01.png` | Cena elegível: hospitality | `aceb15d8d5a31d2e…` |
| `art-019` | `assets/art/art-09-35-07-8-v01.png` | Cena elegível: logistics | `cc66490222346c11…` |
| `art-020` | `assets/art/art-09-35-07-9-v01.png` | Cena elegível: hospitality | `1be39b389ffbfcfe…` |
| `finance` | `assets/art/art-09-35-16-1-v01.png` | Cena elegível: commandProfessional, executive | `7ce496470c8ce2c4…` |
| `art-022` | `assets/art/art-09-35-17-10-v01.png` | Cena elegível: hospitality | `3d1dd83d045a4371…` |
| `calendar` | `assets/art/art-09-35-17-2-v01.png` | Cena elegível: worldTour | `cf04b56850d2c23d…` |
| `art-024` | `assets/art/art-09-35-17-3-v01.png` | Cena elegível: commandProfessional | `dd8929dea023f59d…` |
| `dashboard` | `assets/art/art-09-35-17-4-v01.png` | Cena elegível: commandStartup, commandProfessional, neutral | `a3871ee977ed15cd…` |
| `art-026` | `assets/art/art-09-35-17-5-v01.png` | Cena elegível: commandProfessional, executive | `717b83015ed0ef50…` |
| `art-027` | `assets/art/art-09-35-17-6-v01.png` | Cena elegível: commandWorld, worldTour | `d1bd5895506f41f2…` |
| `art-028` | `assets/art/art-09-35-17-7-v01.png` | Cena elegível: commandWorld, worldTour | `ff3ceaf140b88f60…` |
| `art-029` | `assets/art/art-09-35-17-8-v01.png` | Cena elegível: commandWorld | `9bd8577b75cec5c5…` |
| `art-030` | `assets/art/art-09-35-17-9-v01.png` | Cena elegível: hospitality | `fb2670dd6e89ca5d…` |
| `art-031` | `assets/art/art-09-35-43-1-v01.png` | Cena elegível: commandStartup | `8f2b95f746624932…` |
| `art-032` | `assets/art/art-09-35-44-10-v01.png` | Cena elegível: commandStartup | `78ed8862f0a616ea…` |
| `art-033` | `assets/art/art-09-35-44-2-v01.png` | Cena elegível: commandStartup | `74385e481f95b7fa…` |
| `art-034` | `assets/art/art-09-35-44-3-v01.png` | Cena elegível: academy | `687f9661c9aa62fd…` |
| `art-035` | `assets/art/art-09-35-44-4-v01.png` | Cena elegível: commandProfessional | `8f0721a1c9936235…` |
| `art-036` | `assets/art/art-09-35-44-5-v01.png` | Cena elegível: commandProfessional | `daf5bf9e1f3f3b76…` |
| `art-037` | `assets/art/art-09-35-44-6-v01.png` | Cena elegível: commandWorld | `842f6be64362b97d…` |
| `art-038` | `assets/art/art-09-35-44-7-v01.png` | Cena elegível: commandWorld | `21b92d4d0c8f6732…` |
| `art-039` | `assets/art/art-09-35-44-8-v01.png` | Cena elegível: commandWorld | `1132ff7ae7ca4c4d…` |
| `art-040` | `assets/art/art-09-35-44-9-v01.png` | Cena elegível: academy | `e7d4248cf66dd85b…` |
| `circuit-0` | `assets/art/art-09-35-59-1-v01.png` | Cenário de calendário, grid e circuito atual | `1a214013de00aeeb…` |
| `circuit-1` | `assets/art/art-09-35-59-2-v01.png` | Cenário de calendário, grid e circuito atual | `cc17ae333f79ee49…` |
| `circuit-2` | `assets/art/art-09-35-59-3-v01.png` | Cenário de calendário, grid e circuito atual | `7f992cc43b62f92c…` |
| `circuit-9` | `assets/art/art-09-36-00-10-v01.png` | Cenário de calendário, grid e circuito atual | `e868aeff7c03053e…` |
| `circuit-3` | `assets/art/art-09-36-00-4-v01.png` | Cenário de calendário, grid e circuito atual | `a89a4bc0f1bac172…` |
| `circuit-4` | `assets/art/art-09-36-00-5-v01.png` | Cenário de calendário, grid e circuito atual | `db0ee449b5e57e6a…` |
| `circuit-5` | `assets/art/art-09-36-00-6-v01.png` | Cenário de calendário, grid e circuito atual | `d24f8fc206ff3bfb…` |
| `circuit-6` | `assets/art/art-09-36-00-7-v01.png` | Cenário de calendário, grid e circuito atual | `2075e130df69e07a…` |
| `circuit-7` | `assets/art/art-09-36-00-8-v01.png` | Cenário de calendário, grid e circuito atual | `3f65328263da2fbb…` |
| `circuit-8` | `assets/art/art-09-36-00-9-v01.png` | Cenário de calendário, grid e circuito atual | `0eef573b08169af9…` |
| `art-051` | `assets/art/art-09-36-11-1-v01.png` | Cena elegível: raceControl | `93b3b8be82645828…` |
| `art-052` | `assets/art/art-09-36-12-10-v01.png` | Cena elegível: raceControl | `ff274e6af3cfc00a…` |
| `art-053` | `assets/art/art-09-36-12-2-v01.png` | Cena elegível: raceControl | `42934fe7e978353d…` |
| `art-054` | `assets/art/art-09-36-12-3-v01.png` | Cena elegível: raceControl | `334128221c6d4c65…` |
| `art-055` | `assets/art/art-09-36-12-4-v01.png` | Cena elegível: people, academy | `cbe9fad63bddefa3…` |
| `staff` | `assets/art/art-09-36-12-5-v01.png` | Cena elegível: commandStartup, people | `44913e0f28045cba…` |
| `contracts` | `assets/art/art-09-36-12-6-v01.png` | Cena elegível: commandStartup | `496846c2759a079d…` |
| `art-058` | `assets/art/art-09-36-12-7-v01.png` | Cena elegível: people, academy | `285825de8680fc96…` |
| `art-059` | `assets/art/art-09-36-12-8-v01.png` | Cena elegível: academy | `4d1970eade5fb57f…` |
| `art-060` | `assets/art/art-09-36-12-9-v01.png` | Cena elegível: logistics, academy | `125eb31e5c4d9fe8…` |
| `grid` | `assets/art/art-09-36-23-1-v01.png` | Cena elegível: grid | `5d3ba82adc2744e3…` |
| `art-062` | `assets/art/art-09-36-23-10-v01.png` | Cena elegível: legacyStartup | `b28338e879ffd667…` |
| `art-063` | `assets/art/art-09-36-23-2-v01.png` | Cena elegível: legacyStartup, legacyElite, grid | `821576c9206f98ab…` |
| `art-064` | `assets/art/art-09-36-23-3-v01.png` | Cena elegível: legacyElite, grid | `8ba1abda13a53281…` |
| `art-065` | `assets/art/art-09-36-23-4-v01.png` | Cena elegível: legacyElite, grid | `8d4849f53683bc00…` |
| `art-066` | `assets/art/art-09-36-23-5-v01.png` | Cena elegível: legacyElite, grid | `ea54ecbabb2eeb14…` |
| `art-067` | `assets/art/art-09-36-23-6-v01.png` | Cena elegível: legacyElite, grid | `80e4cdf3a772ccde…` |
| `podium` | `assets/art/art-09-36-23-7-v01.png` | Cena elegível: commandElite, legacyStartup, legacyElite | `24fca7d09f071134…` |
| `art-069` | `assets/art/art-09-36-23-8-v01.png` | Cena elegível: legacyElite, grid | `0eec7f71b33f9f47…` |
| `art-070` | `assets/art/art-09-36-23-9-v01.png` | Cena elegível: legacyElite, grid | `c4c55df8adea27b2…` |
| `art-071` | `assets/art/art-09-36-35-1-v01.png` | Cena elegível: people | `4bdb325576f09807…` |
| `engineer` | `assets/art/art-09-36-35-2-v01.png` | Retrato contextual de pessoas e negociações | `ec2ec3f61978d434…` |
| `rider-1` | `assets/art/art-09-36-36-10-v01.png` | Retrato contextual de pessoas e negociações | `94aef77131cdf0ac…` |
| `mechanic` | `assets/art/art-09-36-36-3-v01.png` | Retrato contextual de pessoas e negociações | `784c2eaad4b6450a…` |
| `art-075` | `assets/art/art-09-36-36-4-v01.png` | Cena elegível: people | `cfcb8cf764dd9e25…` |
| `commercial` | `assets/art/art-09-36-36-5-v01.png` | Retrato contextual de pessoas e negociações | `73fc231c1a25cf39…` |
| `art-077` | `assets/art/art-09-36-36-6-v01.png` | Cena elegível: people | `00f726ccbf38386f…` |
| `art-078` | `assets/art/art-09-36-36-7-v01.png` | Cena elegível: people | `2d65793b4e32b727…` |
| `guide` | `assets/art/art-09-36-36-8-v01.png` | Retrato contextual de pessoas e negociações | `2ecd93e80167aca7…` |
| `rider-0` | `assets/art/art-09-36-36-9-v01.png` | Retrato contextual de pessoas e negociações | `af96d9d9e1db1f4e…` |
| `frame` | `assets/art/art-09-37-00-1-v01.png` | Cena elegível: neutral | `2d09815ce7bac1cb…` |
| `art-082` | `assets/art/art-09-37-01-10-v01.png` | Cena elegível: neutral | `cd89950ac058d46d…` |
| `art-083` | `assets/art/art-09-37-01-2-v01.png` | Cena elegível: neutral | `f515edc61f5f3ffd…` |
| `art-084` | `assets/art/art-09-37-01-3-v01.png` | Cena elegível: neutral | `52773f4024c8c253…` |
| `art-085` | `assets/art/art-09-37-01-4-v01.png` | Cena elegível: engineering | `45d8d598f66c706a…` |
| `art-086` | `assets/art/art-09-37-01-5-v01.png` | Cena elegível: neutral | `8bab01acdde53bfb…` |
| `art-087` | `assets/art/art-09-37-01-6-v01.png` | Cena elegível: neutral | `d6e0db8d97ae9b87…` |
| `art-088` | `assets/art/art-09-37-01-7-v01.png` | Cena elegível: neutral | `ab74bb0750f83c80…` |
| `art-089` | `assets/art/art-09-37-01-8-v01.png` | Cena elegível: neutral | `325b8633c2d683b9…` |
| `art-090` | `assets/art/art-09-37-01-9-v01.png` | Cena elegível: neutral | `f516f225b35ed36d…` |
| `garage` | `assets/art/art-09-37-16-1-v01.png` | Cena elegível: garage, neutral | `a93ef47200000c20…` |
| `art-092` | `assets/art/art-09-37-17-10-v01.png` | Cena elegível: garage | `061a5d2829768ec6…` |
| `art-093` | `assets/art/art-09-37-17-2-v01.png` | Cena elegível: logistics | `2fa96856069689d3…` |
| `art-094` | `assets/art/art-09-37-17-3-v01.png` | Cena elegível: garage | `eab1e68c97a66e11…` |
| `art-095` | `assets/art/art-09-37-17-4-v01.png` | Cena elegível: engineering, garage | `98d2061ef02bc4e1…` |
| `art-096` | `assets/art/art-09-37-17-5-v01.png` | Cena elegível: garage | `d11bbf093c9b078d…` |
| `engineering` | `assets/art/art-09-37-17-6-v01.png` | Cena elegível: engineering, partners | `47c23a0705d18f82…` |
| `art-098` | `assets/art/art-09-37-17-7-v01.png` | Cena elegível: engineering | `d11b6c3553a8e485…` |
| `art-099` | `assets/art/art-09-37-17-8-v01.png` | Cena elegível: garage | `6d4988a63742944a…` |
| `art-100` | `assets/art/art-09-37-17-9-v01.png` | Cena elegível: garage | `741d058407d1524e…` |
| `pitwall` | `assets/art/art-09-59-02-1-v01.png` | Cena elegível: raceControl | `d16094a68bb8e0fc…` |
| `art-102` | `assets/art/art-09-59-03-2-v01.png` | Cena elegível: raceControl | `7041052a34c8de4c…` |
| `art-103` | `assets/art/art-09-59-03-3-v01.png` | Cena elegível: raceControl | `2dd00fac4a15ed96…` |
| `art-104` | `assets/art/art-09-59-04-4-v01.png` | Cena elegível: raceControl | `83e5748972ad4d80…` |
| `art-105` | `assets/art/art-09-59-04-5-v01.png` | Cena elegível: raceControl | `425bec1f8b825d45…` |
| `art-106` | `assets/art/art-09-59-05-6-v01.png` | Cena elegível: logistics | `8d61175a6a29583a…` |
| `art-107` | `assets/art/art-09-59-05-7-v01.png` | Cena elegível: logistics | `c8b245525fe8aca7…` |
| `art-108` | `assets/art/art-09-59-06-8-v01.png` | Cena elegível: raceControl | `d4f3e222f46f22e2…` |
| `art-109` | `assets/art/art-09-59-08-9-v01.png` | Cena elegível: logistics | `bcb35fe16498dc70…` |
| `art-110` | `assets/art/art-09-59-09-10-v01.png` | Cena elegível: logistics | `7110576963b7f24c…` |
| `portraits-riders-a` | `assets/portraits/riders-a-v01.png` | Folha de avatares recortada por piloto/staff/academia | `53f3766d5ff5e4e0…` |
| `portraits-riders-b` | `assets/portraits/riders-b-v01.png` | Folha de avatares recortada por piloto/staff/academia | `99d54bae91cc93c5…` |
| `portraits-staff` | `assets/portraits/staff-v01.png` | Folha de avatares recortada por piloto/staff/academia | `9f5948c27e5eb8dd…` |
| `portraits-youth` | `assets/portraits/youth-v01.png` | Folha de avatares recortada por piloto/staff/academia | `d06081b7ae256504…` |

## Critérios de substituição

Uma arte nova deve entrar em `assets/art/` ou `assets/portraits/`, receber chave e SHA-256 no manifesto e ser associada a uma família em `src/ui/scenes.js`. A resolução da chave nunca é salva no estado da carreira: substituir uma cena não migra, invalida ou altera saves. A verificação `node scripts/check.js` protege caminhos e hashes antes de publicação.

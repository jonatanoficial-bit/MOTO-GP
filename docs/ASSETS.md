# Catálogo e atualização das artes

O pacote contém 110 PNGs originais preservados byte a byte e quatro folhas de retratos criadas para a Parte 3. `asset-manifest.json` registra as 114 imagens com chave lógica, caminho padronizado, nome original, resolução, versão e SHA-256. `docs/art-catalog.json` contém a mesma lista em formato de catálogo.

As chaves de produção incluem `dashboard`, `garage`, `engineering`, `contracts`, `staff`, `grid`, `podium`, `calendar`, `finance`, `pitwall`, `guide`, `circuit-0` a `circuit-9` e as folhas `portraits-riders-a`, `portraits-riders-b`, `portraits-staff` e `portraits-youth`. As demais imagens continuam catalogadas para novas telas.

Os SVGs em `assets/brands/` são recursos vetoriais locais e não entram no contador de PNGs. A checagem de integridade confirma a presença de cada fabricante. O arquivo `mrm-official-logo.png` é o emblema raster fornecido para a identidade visual do jogo; ele é usado no menu e na barra lateral e tem SHA-256 `7243C8115DB7FDCA90D8D8C8817A999D34C6A424A7ECE4E705AB9114F3318EAC`.

Para adicionar uma arte pronta:

1. Copie o arquivo para `assets/art/` com nome minúsculo e versionado, por exemplo `garage-night-v02.png`.
2. Acrescente uma entrada em `asset-manifest.json` usando uma nova chave ou atualizando a versão.
3. Informe `src`, `version`, `width`, `height`, `fallback`, `original` e `sha256`.
4. Se substituir uma chave já usada, nenhuma alteração no JavaScript é necessária.
5. Execute `npm run check` para validar os caminhos e a integridade.

Use uma nova versão quando a composição da arte mudar. Preserve as versões anteriores enquanto saves ou telas publicadas puderem depender delas.

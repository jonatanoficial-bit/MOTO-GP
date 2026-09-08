# Catálogo e atualização das artes

O pacote contém 110 PNGs preservados byte a byte. `asset-manifest.json` registra chave lógica, caminho padronizado, nome original, resolução, versão e SHA-256. `docs/art-catalog.json` contém a mesma lista em formato de catálogo.

As chaves de produção atualmente usadas incluem `dashboard`, `garage`, `engineering`, `contracts`, `staff`, `grid`, `podium`, `calendar`, `finance`, `pitwall`, `guide`, `rider-0`, `rider-1`, retratos de staff e `circuit-0` a `circuit-9`. As demais imagens também estão catalogadas e prontas para serem associadas a novas telas.

Para adicionar uma arte pronta:

1. Copie o arquivo para `assets/art/` com nome minúsculo e versionado, por exemplo `garage-night-v02.png`.
2. Acrescente uma entrada em `asset-manifest.json` usando uma nova chave ou atualizando a versão.
3. Informe `src`, `version`, `width`, `height`, `fallback`, `original` e `sha256`.
4. Se substituir uma chave já usada, nenhuma alteração no JavaScript é necessária.
5. Execute `npm run check` para validar os caminhos e a integridade.

Use uma nova versão quando a composição da arte mudar. Preserve as versões anteriores enquanto saves ou telas publicadas puderem depender delas.

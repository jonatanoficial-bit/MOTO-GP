# Escopo — Parte 4

## Objetivo

Fazer a corrida parecer uma transmissão de TV e permitir ao usuário comandar decisões de uma equipe real em tempo real.

## Fluxo de corrida

1. A classificação gera o grid com nome, número, avatar, bandeira, equipe e tempo.
2. A tela ao vivo apresenta pista, motos, estado de bandeira, ranking, gaps, volta, rádio e clima.
3. Para cada piloto da equipe, o usuário escolhe mapa de motor, ritmo, eletrônica, freio, uso do pneu e plano de pit.
4. O comando de box chama a moto ao fim da volta; o composto e o modo de parada selecionados determinam o serviço aplicado.
5. A bandeirada abre a classificação com avatar, bandeira, grid, tempo, pontos e consequências da etapa.

## Modelo técnico

- Economia de motor reduz consumo e risco; potência melhora a volta e eleva consumo/falha.
- Uso forte de pneu reduz o fator de tempo e aumenta desgaste; economia faz o inverso.
- Pit rápido reduz tempo parado; pit seguro custa mais tempo.
- Chuva, nível de água, temperatura do asfalto e tipo de composto alteram aderência e risco.
- A corrida é determinística para uma mesma seed e sequência de comandos.

## Usabilidade

- No celular vertical, a corrida continua ativa e a navegação é acessível pela faixa inferior.
- Botões de comando têm altura mínima de 42 px e as decisões de cada piloto ficam agrupadas no respectivo cartão.
- O tutorial explica fundação, contratos, treino/classificação, pit wall, resultado e mensagens.

## Projeto Criptografia:

## Sobre:
Este script possui uma criptografia imune a análises de padrão. Ele executa um loop (for) aplicando uma equação que altera cada letra para um valor completamente diferente do anterior, garantindo a ausência de um rastro decifrável. Após a execução, o terminal expõe o texto encriptado e, logo em seguida, a versão descriptografada.

A matemática por trás do processo funciona da seguinte forma: Etapa 1: o código resgata os números de uma matriz chamada KeySoma, onde ficam armazenados os CharCodes de cada letra da senha. Etapa 2: esse número sofre uma multiplicação por uma variável chamada Position, que aumenta em 1 a cada repetição do loop. Etapa 3: o produto dessa multiplicação recebe o nome de Peso e alimenta a equação: (Key * PrimoBase + Peso) % PrimoModular. Os valores iniciais definidos são PrimoBase igual a 37, PrimoModular sendo 1000000007 e a Key começando em 17. Etapa 4: ocorre um processo de bitwise (XOR) entre o valor da Key e o Peso. A chave gerada no final é salva na variável KeyOrigin, dificultando qualquer tentativa de engenharia reversa.

Após forjar a chave principal, o sistema inicia um segundo loop, passando por cada letra do texto e a transformando em CharCode. Para evitar qualquer previsibilidade, a Key escalona ainda mais, sofrendo uma nova mutação modular contínua a cada ciclo. Feito isso, o valor corrompido é guardado na variável Crypt e empurrado para a matriz Palavra.

Por fim, ocorre o processo de descriptografia. O backup seguro armazenado em KeyOrigin retorna para a variável Key, resetando o motor do script. Com isso, a máquina realiza as mesmas mutações em sincronia para recriar as chaves exatas de cada posição, permitindo que o sistema subtraia o valor da Key corrompida, encontrando assim o CharCode e a letra original de volta.



## Como utilizar:
Clone este repositório:
`git clone https://github.com/Rafcroft/Radar-PenTest](https://github.com/Rafcroft/Radar-PenTest`

Execute o script:
`node Criptografia.js`

## Tecnologias:
JavaScript - Node.js

# <p align="center">Web Moderno Completo com JavaScript</p>

Esse repositório tem o intuito de registar minha evolução Curso Web Moderno Completo com JavaScript 2021 + Projetos e também para fixar melhor alguns conteúdos com resumos.

## Conteúdos

- [1) Javascript - Fundamentos](#javascript---fundamentos)
  - [Algoritmo](#algoritmo)
    - [Representação](#representação)
  - [Estrutura de dados](#estrutura-de-dados)
  - [Variáveis e Constantes](#variáveis-e-constantes)
  - [Tipos de dados](#tipos-de-dados)
  - [Hoisting](#hoisting)
  - [Operadores](#operadores)
  - [Dicas Importantes](#dicas-importantes)
  - [O que eu aprendei](#o-que-aprendi)
- [Autor](#autor)

# 1) Javascript - Fundamentos

## Algoritmo

- Sequência de passos
- Tem repetição
- Tomadas de decisão
- Ordem das etapas importam

### Representação

- fluxograma
- linguagem natural
- linguagem artificial
- pseudo-linguagem
- Linguagem de baixo nível (mais distante da linguagem convencional) e alto nível (mais próximo da linguagem convencional)

## Estrutura de dados

As estruturas de dados definem a organização, métodos de acesso e opções de processamento para coleções de itens de informação manipulados pelo programa.

**Lista:** Estrutura de dados do tipo lista, armazena dados de um determinado tipo em uma ordem especifica.

**Pilha:** Uma pilha é um estrutura de dados que serve como coleção de elementos, e permite o acesso a somente um item de dados armazenado.

**Fila:** Uma fila é uma estrutura da dados que admite remoção de elemento e inserção de novos elementos seguindo a regra de operação FIFO.

**Estrutura FIFO (First In First Out):** O primeiro elemento inserido é o primeiro retirado.

**Estrutura LIFO (Last In First Out):** O último elemento inserido é o primeiro retirado.

**Árvore:** Organizar elementos de forma hierárquica onde existe um elemento no topo da árvore, chamado de raiz e existem os elementos subordinados, que são chamados de nozes ou folhas

## Variáveis e Constantes

Você usa variáveis como nomes simbólicos para os valores em sua aplicação. O nome das variáveis, chamados de identificadores, obedecem determinadas regras.

Você pode declarar uma variável de quatro formas:

- Com a palavra chave var. Por exemplo, var x = 42. Esta sintaxe pode ser usada para declarar tanto variáveis locais como variáveis globais.
- Por simples adição de valor. Por exemplo, x = 42. Isso declara uma variável global. Essa declaração gera um aviso de advertência no JavaScript. Você não deve usar essa variante.
- Com a palavra chave let. Por exemplo, let y = 13. Essa sintaxe pode ser usada para declarar uma variável local de escopo de bloco. Veja escopo de variável abaixo.
- Você pode criar uma constante apenas de leitura por meio da palavra-chave **_const_**

## Tipos de dados

O mais recente padrão ECMAScript define sete tipos de dados:

Seis tipos de dados são os chamados primitivos:

- **_Boolean:_** true e false.
- **_null:_** Uma palavra-chave que indica valor nulo. Devido JavaScript ser case-sensitive, null não é o mesmo que Null, NULL, ou ainda outra variação.
- **_undefined:_** Uma propriedade superior cujo valor é indefinido.
- **_Number:_** 42 ou 3.14159.
- **_String:_** "Howdy"
- **_Symbol (novo em ECMAScript 6):_** Um tipo de dado cuja as instâncias são únicas e imutáveis.
  **_Object:_** refere-se a uma estrutura de dados contendo dados e instruções para se trabalhar com estes dados. Objetos são grupos aninhados de pares key/valeu

## Hoisting

Uma definição estrita de elevação sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código, mas isso não é realmente o que acontece. Em vez disso, as declarações de variável e função são colocadas na memória durante a fase de compilação, mas permanecem exatamente onde você as digitou no seu código.

## Operadores

**_Atribuição:_** Operadores sufixo/prefixo para incremento e sufixo/prefixo para decremento.

- Operador sufixo para incremento. **(A++)**
- Operador sufixo para decremento. **(A--)**
- Operador prefixo para incremento. **(++A)**
- Operador prefixo para decremento. **(--A)**

**_Aritméticos:_** Os operadores aritméticos aceitam valores numéricos (literais ou variáveis) como seus operandos e retornam um único valor numérico.

- Operador de soma **(+)**.
- Operador de subtração **(-)**.
- Operador de divisão **(/)**.
- Operador de multiplicação **(\*)**.
- Operador restante **(%)**.

**_Relacionais:_** Um operador de comparação compara seus operandos e retorna um valor booleano baseado em se a comparação é verdadeira

- Operador "menor que" **(<)**.
- Operador "maior que" **(>)**.
- Operador "menor ou igual que" **(<=)**.
- Operador "maior ou igual que" **(>=)**.

**_Lógicos:_** Operadores lógicos são normalmente usados com boolean (logical) valores, e quando eles são, eles retornam um valor Boolean.

- AND **(&&)**
- OR **(||)**

**_Ternário:_** O operador condicional retorna um dos dois valores baseado no valor lógico da condição.

- **(condition ? ifTrue : ifFalse)**

## Tratamento de Erro (Try/Catch/Throw)

A declaração try consiste em um bloco try, que contém uma ou mais declarações, e ao menos uma cláusula catch ou uma cláusula finally, ou ambas. Ou seja, há 3 formas de declarações try :

- try...catch
- try...finally
- try...catch...finally

Uma cláusula catch contém declarações que especificam o que fazer caso uma exceção seja lançada no bloco try. Ou seja, se você quer que o bloco try tenha êxito, e caso não tenha, você quer que o controle passe para o bloco catch. Caso qualquer declaração dentro do bloco try (ou em uma função chamada no interior do bloco try) lançar uma exceção o controle imediatamente muda para a cláusula catch. Se nenhuma exceção for lançada no bloco try a cláusula catch é ignorada.

A cláusula finally é executada após a excecução do bloco try e da(s) cláusula(s) catch porém antes das declarações seguintes ao try. Ela sempre é executada, independente se uma exceção for lançada ou capturada.

Você pode aninhar uma ou mais declarações try. Caso uma declaração try interior não tenha uma cláusula catch, a cláusula catch pertencente a declaração try que a envolve é introduzida.

## O que aprendi!

- Os fundamentos são extremamente importantes para construir uma base solida.
- O que estruturas de dados são formas de organização de dados.
- Comentários em linha e em blocos no JavaScript.
- Diferença tipos variáveis var, let e como usar const, e quais diferenças entre elas.
- É padrão utilizar let, pois, tem 3 escopos, bloco, função e globa.
- var tem apenas dois escopo, global e função.
- const é utilizado para definir elementos imutaveis do código.
- Quais são os tipos de dados padrões ECMAScript.
- O conceito de Hoisting (içamento)
- Os tipos de operadores, atribuição, aritméticos, relacionais, lógicos, unários, ternário e Destructuring.
- Destructuring é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

# 2) Javascript: Estruturas de Controle

## if...else

A condicional **if** é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for _verdadeira_. Se for _falsa_, executa as afirmações dentro de **else**.

`if (condição) { instrução1 } else { instrução2 }`

Para executar multiplas instruções dentro de uma condição, utilize um bloco ({ ... }) . Em geral, é sempre uma boa prática utilizar instruções dentro de blocos, especialmente em códigos que envolvam condicionais if aninhadas

Não confunda os valores boolean primitivos true e false com os valores true e false do objeto Boolean. Qualquer valor que não for undefined, null, 0, NaN, ou uma string vazia (""), e qualquer objeto, incluíndo um objeto Boolean cujo valor é false, é avaliado como true quando passado por uma condicional.

## switch

A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case.

```
switch (expressão) {
  case valor1:
    //Instruções executadas quando o resultado da expressão for igual á valor1
    [break;]
  case valor2:
    //Instruções executadas quando o resultado da expressão for igual á valor2
    [break;] 
  default:
    //Instruções executadas quando o valor da expressão é diferente de todos os cases
    [break;]
}
```

O programa primeiro procura por um caso o qual a expressão avalie como tendo o mesmo valor que o input da expressão transferindo assim o controle para a cláusula encontrada e em seguida executando as instruções associadas. Caso nenhum caso seja correspondido, então o programa procura pela cláusula opcional default, que, se encontrado, tem o controle transferido a ele, executando suas instruções associadas. Se não houver uma cláusula default, o programa continua a execução da instrução seguindo para o final do switch. Por convenção, a cláusula default é a última, mas não é algo obrigatório.

A instrução opcional break associada com cada case garante que o programa saia da condicional switch assim que a instrução correspondente for executada  e executa a instrução que segue logo após o switch. Caso break seja omitido, o programa continua a execução para a próxima instrução dentro de switch.

## while
A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.

```
while (condição) {
  rotina
}
```
## do...while
A declaração do...while cria um laço que executa uma declaração até que o teste da condição for falsa (false). A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez

```
do
   rotina
while (condition);
```
## for
A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

```
for ([inicialização]; [condição]; [expressão final])
   declaração
```

## for...in

O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  O laço pode ser executado para cada propriedade distinta do objeto.

```
for (variavel in objeto) {...
}
```
## break
O comando break encerra o loop atual, switch, ou o loop que foi informado no while e transfere o controle da execução do programa para o comando seguinte.

## continue
A palavra chave continue termina a atual iteração do laço em que ele se encontra ou de um laço rotulado, e continua a execução deste laço com a próxima iteração.

## O que aprendi!

# Dicas Importantes

- Deixe o seu código o mais simples possível escrever código simples, porém, escrever código fácil de ser lido não é algo fácil de ser atingido.
- Digitar um código claro com bons nomes priorizar sentenças de código que não cause confusão. Não misture e tente não misturar vários operadores e uma expressão, porque vai trazer confusão, pois, seu código vai tornar o seu código mais difícil de ser lido.
- Fatorar até que você tem um código que você deseja.
- Tente manter o seu código mais simples possível e não tente jogar muitos comentários pra tentar justificar e explicar aquilo que está ruim do ponto de vista de design de código mesmo então preza pelo código limpo comente pouco e comente comentários que são relevantes.

### Autor

<div>
  <a href="https://instagram.com/pedrolucazx" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/pedrolucazx/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href="https://twitter.com/pedrolucazx" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" target="_blank"></a>
</div>

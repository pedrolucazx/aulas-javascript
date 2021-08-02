# <p align="center">Web Moderno Completo com JavaScript</p>
Esse repositório tem o intuito de registar minha evolução Curso Web Moderno Completo com JavaScript 2021 + Projetos e também para fixar melhor alguns conteúdos com resumos.

## Conteúdos

- [Javascript - Fundamentos](##javascript---fundamentos)
  - [Algoritmo](#algoritmo)
    - [Representação](#representação)
  - [Estrutura de dados](#estrutura-de-dados)
  - [Variáveis e Constantes](#variáveis-e-constantes)
  - [Tipos de dados](#tipos-de-dados)
  - [Hoisting](#hoisting)
  - [Operadores](#operadores)
  - [Dicas Importantes](#dicas-importantes)
  - [O que eu aprendei](##o-que-aprendi)
- [Autor](#autor)

# Javascript - Fundamentos
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
- Operador de multiplicação **(*)**.
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

# Dicas Importantes
- Deixe o seu código o mais simples possível escrever código simples, porém, escrever código fácil de ser lido não é algo fácil de ser atingido.
- Digitar um código claro com bons nomes priorizar sentenças de código que não cause confusão. Não misture e tente não misturar vários operadores e uma expressão, porque vai trazer confusão, pois, seu código vai tornar o seu código mais difícil de ser lido.
- Fatorar até que você tem um código que você deseja.
- Tente manter o seu código mais simples possível e não tente jogar muitos comentários pra tentar justificar e explicar aquilo que está ruim do ponto de vista de design de código mesmo então preza pelo código limpo comente pouco e comente comentários que são relevantes.


# O que aprendi!
Esse modele é o mais longo do curso, pois, os fundamentos são extremamente importantes para construir uma base solida é conseguir progredir com menos dificuldade nos demais conteúdos. Neste modulo compreendia o que são estruturas de dados, e a forma de organização de dado, comentários em linha e em blocos no JavaScript, diferença de variáveis var, let e como usar const, e quais diferenças entre elas, é padrão utilizar let, pois, tem 3 escopos, bloco, função e globa, enquanto var só tem 2, global e função. Já const é utilizado para definir elementos imutaveis do código. Quais são os tipos de dados padrões ECMAScript. O conceito de Hoisting (içamento), um pouco confuso a princípio, é como se as declarações de variáveis e funções são fisicamente movidas para o topo do seu código. Além disso, os tipos de operadores, atribuição, aritméticos, relacionais, lógicos, unários, ternário e os Destructuring. Esse último é um pouco mais complexo porém tiveram muitos exemplos a definição da sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

## Autor
<div>
  <a href="https://instagram.com/pedrolucazx" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/pedrolucazx/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href="https://twitter.com/pedrolucazx" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" target="_blank"></a>
</div>



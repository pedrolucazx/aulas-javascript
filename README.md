# <p align="center">Web Moderno Completo com JavaScript</p>

Esse repositório tem o intuito de registar minha evolução Curso Web Moderno Completo com JavaScript 2021 + Projetos e também para fixar melhor alguns conteúdos com resumos.

## Conteúdos

- [1) Javascript - Fundamentos](#1-javascript---fundamentos)
  - [Algoritmo](#algoritmo)
    - [Representação](#representação)
  - [Estrutura de dados](#estrutura-de-dados)
  - [Variáveis e Constantes](#variáveis-e-constantes)
  - [Tipos de dados](#tipos-de-dados)
  - [Hoisting](#hoisting)
  - [Operadores](#operadores)
  - [Dicas Importantes](#dicas-importantes)
  - [O que eu aprendei](#o-que-aprendi)
- [2) Javascript: Estruturas de Controle](#2-javascript-estruturas-de-controle)
  - [if...else](#ifelse)
  - [switch](#switch)
  - [while](#switch)
  - [do...while](#dowhile)
  - [for](#for)
  - [for...in](#forin)
  - [break](#break)
  - [continue](#continue)
  - [O que eu aprendei](#o-que-aprendi-1)
- [3) Javascript: Função](#3-javascript-função)
  - [Definindo Funções](#definindo-funções)
  - [Função First-class](#função-first-class)
  - [Parâmetros](#parâmetros)
  - [THIS](#this)
  - [Arrow Functions](#arrow-functions)
    - [Sintexe](#sintexe)
  - [Funções Anônimas](#funções-anônimas)
  - [Função Callback](#função-callback)
  - [Funções Construtoras](#funções-construtoras)
  - [Tipos de Declaração](#tipos-de-declaração)
  - [Closures](#closures)
  - [Função Factory ](#função-factory)
  - [Classe vs Função Factory](#classe-vs-função-factory)
  - [IIFE](#)iife
  - [O que eu aprendei](#o-que-aprendi-2)
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
- Com a palavra chave let. Por exemplo, let y = 13. Essa sintaxe pode ser usada para declarar uma variável local de escopo de bloco. 
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
- **_Object:_** refere-se a uma estrutura de dados contendo dados e instruções para se trabalhar com estes dados. Objetos são grupos aninhados de pares key/valeu

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

**_Destructuring_**
A atribuição via desestruturação usa sintaxe similar, mas no lado esquerdo da atribuição são definidos quais elementos devem ser extraídos da variável de origem.

```jsx
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

## Tratamento de Erro (Try/Catch/Throw)

A declaração try consiste em um bloco try, que contém uma ou mais declarações, e ao menos uma cláusula catch ou uma cláusula finally, ou ambas. Ou seja, há 3 formas de declarações try :

- try...catch
- try...finally
- try...catch...finally

Uma cláusula catch contém declarações que especificam o que fazer caso uma exceção seja lançada no bloco try. Ou seja, se você quer que o bloco try tenha êxito, e caso não tenha, você quer que o controle passe para o bloco catch. Caso qualquer declaração dentro do bloco try (ou em uma função chamada no interior do bloco try) lançar uma exceção o controle imediatamente muda para a cláusula catch. Se nenhuma exceção for lançada no bloco try a cláusula catch é ignorada.

A cláusula finally é executada após a excecução do bloco try e da(s) cláusula(s) catch porém antes das declarações seguintes ao try. Ela sempre é executada, independente se uma exceção for lançada ou capturada.

Você pode aninhar uma ou mais declarações try. Caso uma declaração try interior não tenha uma cláusula catch, a cláusula catch pertencente a declaração try que a envolve é introduzida.

A declaração throw lança uma exceção definida pelo usuário. A execução da função atual vai parar (as instruções após o throw não serão executadas), e o controle será passado para o primeiro bloco catch na pilha de chamadas. Se nenhum bloco catch existe entre as funções "chamadoras", o programa vai terminar.

## O que aprendi!

- Os fundamentos são extremamente importantes para construir uma base solida.
- O que estruturas de dados são formas de organização de dados.
- Comentários em linha e em blocos no JavaScript.
- Diferença tipos variáveis var, let e como usar const, e quais diferenças entre elas.
- É padrão utilizar let, pois, tem 3 escopos, bloco, função e global.
- var tem apenas dois escopo, global e função.
- const é utilizado para definir elementos imutaveis do código.
- Quais são os tipos de dados padrões ECMAScript.
- O conceito de Hoisting (içamento)
- Os tipos de operadores, atribuição, aritméticos, relacionais, lógicos, unários, ternário e Destructuring.
- Destructuring é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

# 2) Javascript: Estruturas de Controle

## if...else

A condicional **if** é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for _verdadeira_. Se for _falsa_, executa as afirmações dentro de **else**.

```jsx
if (condição) { 
  instrução1 
  } else { 
    instrução2 }
```

Para executar multiplas instruções dentro de uma condição, utilize um bloco ({ ... }) . Em geral, é sempre uma boa prática utilizar instruções dentro de blocos, especialmente em códigos que envolvam condicionais if aninhadas

Não confunda os valores boolean primitivos true e false com os valores true e false do objeto Boolean. Qualquer valor que não for undefined, null, 0, NaN, ou uma string vazia (""), e qualquer objeto, incluíndo um objeto Boolean cujo valor é false, é avaliado como true quando passado por uma condicional.

## switch

A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case.

```jsx
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

```jsx
while (condição) {
  rotina
}
```
## do...while
A declaração do...while cria um laço que executa uma declaração até que o teste da condição for falsa (false). A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez

```jsx
do
   rotina
while (condition);
```
## for
A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

```jsx
for ([inicialização]; [condição]; [expressão final])
   declaração
```

## for...in

O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  O laço pode ser executado para cada propriedade distinta do objeto.

```jsx
for (variavel in objeto) {...
}
```
## break
O comando break encerra o loop atual, switch, ou o loop que foi informado no while e transfere o controle da execução do programa para o comando seguinte.

## continue
A palavra chave continue termina a atual iteração do laço em que ele se encontra ou de um laço rotulado, e continua a execução deste laço com a próxima iteração.

## O que aprendi!

- Jeitos fácil e rápido de executar uma ação repetidas vezes.
- Existem várias formas diferentes de estruturas de controle, mas eles essencialmente fazem a mesma coisa.
- Os vários mecanismos diferentes de estruturas de controle oferecem diferentes formas de determinar quando este irá começar ou terminar.
- Há várias situações em que é mais fácil resolver um problema utilizando um determinada estruturas de controle.

# 3) Javascript: Função

## Definindo Funções

Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor.

## Função First-class

Entende-se que uma linguagem de programação tem **Função First-class** quando suas funções são tratadas como qualquer outra variável. Por exemplo, numa linguagem desse tipo, a função pode ser passada como argumento pra outras funções, ser retornada por outra função e pode ser atribuída como um valor à uma variável.

## Parâmetros

Uma função JavaScript pode ter 0 ou mais parâmetros declarados. O corpo da função pode conter tantas instruções quantas quiser e pode declarar suas próprias variáveis que são de escopo local àquela função. A instrução return pode ser usada para retornar um valor em qualquer parte da função, finalizando a função. Se nenhuma instrução de retorno for usada (ou um retorno vazio sem valor), o JavaScript retorna undefined.

Os parâmetros nomeados se parecem mais com orientações do que com outra coisa. Você pode chamar a função sem passar o parâmetro esperado, nesse caso eles receberão o valor undefined. No corpo da função você tem acesso a uma variável adicional chamada arguments, que é um objeto parecido com um vetor que contém todos os valores passados para a função.

Parâmetros padrão: Em JavaScript, parâmetros padrões de funções são undefined. No entanto, em algumas situações pode ser útil definir um valor padrão diferente. Isto é onde os parâmetros padrão podem ajudar.

```jsx
//* valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(),soma3(3),soma3(1,2,3),soma3(0,0,0));
```

## THIS

A palavra-chave **`this`** comporta-se um pouco diferente em Javascript se comparado com outras linguagens. Também possui algumas diferenças entre o modo estrito e o modo não estrito.

Em muitos casos, o valor `this` é determinado pela forma como a função é chamada. Ele não pode ser assinado durante a execução, e isso pode ser diferente a cada vez que a função é chamada. ES5 introduziu o método `bind` para estabelecer o valor `this` da função, independentemente de como ela seja chamada, e ECMAScript 2015 introduziu o arrow functions, cujo `this` é lexicalmente delimitado (o valor `this` é estabelecido segundo o escopo de execução no qual está inserido).

## Arrow Functions

Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função e não tem seu próprio this, arguments. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

### Sintexe

```jsx
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalente a: => { return expression; }

// Parênteses são opcionais quando só há um nome de parâmetro:
(singleParam) => { statements }
singleParam => { statements }

// A lista de parâmetros para uma função sem parâmetros deve ser escrita com um par de parênteses.
() => { statements }
```

## Funções Anônimas

Funções também podem ser criadas por uma expressão de função. Tal função pode ser anônima; ele não tem que ter um nome.

```jsx
const soma = function (x,y){
    return x + y;
}

const imprimirResultado = function (a,b, operacao = soma) {
    console.log(operacao(a,b))
}
```

## Função Callback

Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação

```jsx
const notas = [4,5,7,8,9,9.9,9.8,9.7];

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7;
})
console.log(notasBaixas2);
//[ 4, 5 ]

const notasMaioresQue7 = nota => nota < 7; 
const notasBaixas3 = notas.filter(notasMaioresQue7);
console.log(notasBaixas3);
//[ 4, 5 ]
```

## **Funções Construtoras**

As funções construtoras em JavaScript são como as classes do Java, diferenciando apenas pela sintaxe. Em questão de funcionamento, tanto funções construtoras no JavaScript quanto Classes no Java têm a mesma utilidade: **servir de molde para a criação de objetos.**

Para construir objetos, funções construtoras precisam ser instanciadas pelo **operador new**. O **this** dentro delas se referencia ao **objeto criado a partir delas.**

No exemplo abaixo, a função **Carro** é uma função construtora, e **carro1** é um objeto criado a partir do “molde” dessa classe, usando o operador new

```jsx
function Carro(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

const carro1 = new Carro('Charger', 'RT', 1970)

console.log(carro1)
```

## Tipos de Declaração

```jsx
console.log(soma(3,4))

//* Function declaration - o interpretador JavaScript primeiro carrega as funções
function soma(x,y){
    return x + y
}

//* Function Expression 
const sub = function (x,y) {
    return x - y
}
console.log(sub(3,4))

//* named function expression
const mult = function mult(x,y){
    return x*y
}
console.log(mult(3,4))
```

## Closures

Um *closure* (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.

```jsx
//* Closure é o espoco criado quando uma função é declarada
//* Esse escopo permite a função acessar a maniputalar variáveis externas à função

//* Contexto léxico em ação!
const x = 'Global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const myFunction = fora();
console.log(myFunction());
```

## Função Factory

Uma função de fábrica é uma função que retorna um novo objeto

```jsx
function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Mac', 10000.00))
console.log(criarProduto('Iphone', 5000.00))
```

## Classe vs Função Factory

```jsx
//* Usando class
class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
    falar() {
        console.log(`Meu nome é ${this.nome}!`)
    }
}

const p1 = new Pessoa ('Pedro')
p1.falar()

//* Usando Factory Function
const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}!`)
    }
}

const p2 = criarPessoa('Pedro');
p2.falar()
```

## IIFE

**IIFE** (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.

É um Design Pattern e contém duas partes principais. A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global. A segunda parte corresponde à criação da expressão `()`, por meio da qual o interpretador JavaScript avaliará e executará a função.

```jsx
(function() {
    console.log('Será exetutado na hora')
    console.log('Foge do escopo mais abrangente!')
})()
```

## Call & Apply

Você pode atribuir um objeto this diferente quando executar uma função existente. this refere-se ao objeto atual, o objeto em execução. Com call, você pode escrever um método uma vez e então herdá-lo em outro objeto, sem ter que reescrever o método para o novo objeto.

***A sintaxe desta função é quase idêntica a essa da call(), a diferença é que call() aceita uma lista de argumentos, enquanto apply() aceita um array de argumentos.***

```jsx
function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const carro = { preco: 400000, desc: 0.30}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$' ))
console.log(getPreco.apply(carro, [0.17, '$']))
```
## O que aprendi!
- Conceitos de Função First-class
- função JavaScript pode ter 0 ou mais parâmetros declarados
- Parâmetros padrão
- Contexto Léxico do THIS
- Arrow Functions
- Funções Anônimas
- Uma função callback é uma função passada a outra função como argumento
- Function constructor
- Tipos de declaração: Function declaration, function expression
- Conceito de Closures
- Função Factory retorna um novo objeto
- Diferença entre Classe e Função Factory
- Design Pattern IIFE
- Diferença em Call e Apply


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
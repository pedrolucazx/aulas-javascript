const nome = "Pedro"

console.log(nome.charAt(2)); //? Retonar o caracteri na posição indicada
console.log(nome.charAt(10));//? Retonar nada, já que é maior que o indice
console.log(nome.charCodeAt(3));//? Retonar o unicode do caracteri
console.log(nome.indexOf('o'));//? Retorna o index do caracte indicado

console.log(nome.substring(1)); //? Retonar apartir do indice indicado até o final
console.log(nome.substring(0,3)); //? Retonar de um ponto ao outro menos -1

console.log("Meu nome ".concat(nome).concat("!")); //? Concatena elementos
console.log("Meu nome " + nome + "!");//? Concatena elementos
console.log(nome.replace("e",3)); //? Substituição de um elemento por outro

console.log('Pedro,Lucas,Silva,Mesquita'.split(',')); //? constroe um array seperado por ","

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
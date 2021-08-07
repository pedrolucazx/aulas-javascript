function Pessoa (nome){
    this.nome = nome;

    this.falar = () => {console.log(`meu nome é ${nome}!`)}
}

const p1 = new Pessoa('Pedro');
p1.falar()

console.log(p1.nome)
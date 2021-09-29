//* Coleção  dinâmica de pares chave/valor
const produto =  new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = "Generica";
produto.preco = 2200;

console.log(produto);
delete produto.preco;
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 200000,
    proprietario: {
        nome: 'Pedro',
        idade: 21,
        endereco:{
            logradouro: 'Rua ABC',
            numero:123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: '19'
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //* ...
    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'AV. Bulevar';
console.log(carro);

// delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);
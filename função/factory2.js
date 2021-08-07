function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Mac', 10000.00))
console.log(criarProduto('Iphone', 5000.00))
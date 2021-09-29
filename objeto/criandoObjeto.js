//* Usando a notação literal

const obj1 = {}
console.log(obj1);

//* Object em JS

console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2)

//* Função construtoras
function Produto (nome, preco, desc){
  this.nome = nome;
  this.getPrecoComDesconto= () =>{
    return preco * (1 - desc);
  }                                                                                                                                                                                                                                                                                                                                                        
}      

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 3000, 0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

//* Função Factory
function criarFncionario(nome, salarioBase, faltas){
  return{
    nome,
    salarioBase,
    faltas,
    getSalario(){
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}
const f1 = criarFncionario('Pedro', 8000, 4)
const f2 = criarFncionario('Lorena', 10000, 10)
console.log(f1.getSalario(),f2.getSalario())

//* Object.create
const pet = Object.create(null)
pet.nome = 'Dog'
console.log(pet)

//* Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
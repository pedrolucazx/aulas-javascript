//* par nome/valor

const saudacao = "Olá" //? Contexto léxico 1

function exec(){
    const saudacao = "Bom Dia!" //? Contexto léxico 2
    return saudacao
}

//* Objetos são grupos aninhados de pares key/valeu
const cliente = {
    nome: 'Pedro',
    idade: 20,
    peso: 90,
    endereco:{
        logadouro: 'Rua mundo legal!',
        numero: 57
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
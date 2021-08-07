//* Closure pe o espoco criado quando uma função é declarada
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
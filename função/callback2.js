const notas = [4,5,7,8,9,9.9,9.8,9.7];

//* Sem callback
let notasBaixas = [];
for (let i in notas){
    if (notas[i]> 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas);

//* Com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota > 7;
})
console.log(notasBaixas2);

const notasMaioresQue7 = nota => nota >7; 
const notasBaixas3 = notas.filter(notasMaioresQue7);
console.log(notasBaixas3);

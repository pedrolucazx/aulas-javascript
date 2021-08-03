const notas = [6,7,8,9];

for (let i in notas){
    console.log(1, "=" ,notas[i]);
}

const pessoa = {
    nome: "Pedro",
    sobrenome: "Silva",
    idade: 20,
    peso: 70
}

for(let atributos in pessoa){
    console.log(`${atributos} = ${pessoa}`);
}
const nome = 'Pedro';
const concatencacao = 'Olá' + nome + '!';
const templete = `
    Olá
    ${nome}!`
console.log(concatencacao,templete);

//? Expressoes...

console.log(`1 + 1 = ${1+1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('linda')}!`);
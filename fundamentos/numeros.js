const peso1 = 1.0;
const peso2 = Number('2.0'); //*Converter para número

console.log(peso1,peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 8.85550;
const avaliacao2 = 10.05545;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total/ (peso1 + peso2);

console.log(media.toFixed(2)); //* Fixa em duas caras decimais
console.log(media.toString(2)); //* Em binário
console.log(typeof media);
console.log(typeof Number);
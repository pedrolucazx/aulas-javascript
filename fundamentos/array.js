const valores = [1,2,3,4,5,6,7,8,9,0];
console.log(valores[0], valores[5]);

valores[9] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3} ,false, null, 'teste');
console.log(valores);

console.log(valores.pop());
delete valores[10];
console.log(valores);

console.log(typeof valores);
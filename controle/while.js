/*quantidade indeterminada de vezes eu vou fazer um exercício pensando nisso mas não significa que você
não possa usar uma quantidade determinada. */

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

let opcao = 0;
while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,10);
    console.log(`Opção escolhida foi ${opcao}.`);
}

console.log('Até a próxima');               
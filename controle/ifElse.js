const imprimirResultado = function(nota){
    if (nota >= 7){
        console.log('Aprovado!');
    } else {
        console.log('Reprovado');
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!!')

//! um cuidado maior quando você programa na linguagem fracamente tipada para que você não caia nesse tipo de problema isso aqui em teoria deveria ser um erro mas passou
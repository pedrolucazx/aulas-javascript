const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra');
            break
        case 8: case 7:
            console.log('Aprovado');
            break
        case 6: case 5: case 4:
            console.log('Recuperação');
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado');
            break
        default:
            console.log('Nota inválida') 
    }        
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(3.6)
imprimirResultado(-1)
imprimirResultado(11)

//! switch uma seleção múltipla 
//! switch não é uma expressão relacional que retorna o valor verdadeiro ou falso 
//! pode passar valores e tipos pela switch pra poder ele selecionar entre esses valores
//! o switch por padrão break para que ele possa executar um dos casos e sair. E se você não colocar o break uma vez que ele entra no que ele sai executando todos os que estão abaixo.
//! O caso do default ele pode ficar em qualquer posição.
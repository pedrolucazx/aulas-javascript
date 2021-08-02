function teste1(num){
    if(num > 7)
        console.log(num);
        console.log('Final');
}

teste1(6)
teste1(8)

//!definição do bloco JavaScript as chaves ele é opcional dentro de uma estrutura if. Só que ele fica apenas com a única sentença de código associada aquele bloco IF

function teste2(num) {
    if (num > 7); { //? cuidado com o ;, não usar com as estruturas de controle
        console.log(num);
    }   
}

teste2(6)
teste2(8)

//! Não use ponto e vírgula na definição de estruturas do tipo IF.
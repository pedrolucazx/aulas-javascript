const valor = 'Global'

function minhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'local'
    minhaFuncao()
}

exec()

/* Porque quando uma função ela foi declarada dentro de JavaScript.
Ela não tem apenas o seu conteúdo interno.
O seu nome e os parâmetros que ela recebe é aquilo que ela retorna.
Ela também tem consciência no local que ela foi definida certo então a função ela carrega consigo. */
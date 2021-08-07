function Carro(velocidadeMaxima = 200, delta = 5){
    //* atributos privado
    let velocidadeAtual = 0;

    //* metodo pulico
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //* metodo público
    this.getVelocidadeAtual= () => velocidadeAtual
}

const uno = new Carro;
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350,20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof uno)
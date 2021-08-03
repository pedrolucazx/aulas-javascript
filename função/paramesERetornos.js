function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima de permitido ${area}m2.`);
    }else{
        return area
    }
}

console.log(area(2,2));
console.log(area(2));
console.log(area());
console.log(area(2,3,5,6,7,8));
console.log(area(5,5));


//!cuidado na hora de usar esse tipo de recurso Explorar retornos diferentes baseado num tipo de parâmetro
const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c}
const obj2 = { a , b , c} //! ES2015
console.log(obj1,obj2)

const nomeAttr = 'nota'
const valotAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valotAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valotAttr}//! ES2015
console.log(obj4)

const obj5 = {
  funcao1: function(){
    //...
  },
  //! ES2015
  funcao2(){ 
    // ...
  }
}

console.log(obj5)
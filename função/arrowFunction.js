let comparaComThis = function (param) {
    console.log(this === param);
}

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global)
comparaComThis(obj)

console.log("------Arrow-----")
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

console.log("------teste bind-----")
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

//! THIS da arrow function é imutável, sempre retorna ao contexto de onde foi criado
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)                      // o uso do bind, força o this a fazer referencia com o objeto e com não global
comparaComThis(obj)


let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
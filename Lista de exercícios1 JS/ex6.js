function jurosSimples(c1, i , t) {
    let montanteSimples = c1 + (c1 * i *t)
    return `O montante sobre juros simples é de R$ ${montanteSimples}`
}

console.log(jurosSimples(1200, 0.05, 4))


function jurosComposto(c2, i , t) {
    let montanteComposto = c2 * (1 + i)**t
    return `O montante sobre juros composto é de R$ ${montanteComposto}`
}

console.log(jurosComposto(1200, 0.05, 4))
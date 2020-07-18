// Para passar um parametro, basta exportar em módulo uma função e os parametros da mesma serão os mesmos do módulo

module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
}
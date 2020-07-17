const contadorA = require('./instanciaUnica')             // retornam a mesma instancia por conta do cache
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()           // invocando a função factory (novas instancias)
const contadorD = require('./instanciaNova')()

// TESTANDO...

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)                            // resultado dos incrementos 

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
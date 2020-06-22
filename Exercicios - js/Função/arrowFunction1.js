let dobro = function (a) {              //forma padrão
    return 2 *a
}

dobro = (a) => {                        //forma reduzida
    return 2 * a
}

dobro = a => 2 * a                      // return implícito
console.log(dobro(Math.PI))


let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'                        //usado quando tiver um só parâmetro
console.log(ola())
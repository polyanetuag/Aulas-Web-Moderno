// O uso de "arguments", permite utilizar, quando o parâmetro está vazio, 
//todos os parâmetros que foram passados a partir da função, e fazer qualquer tipo de operação

function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma 
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, 'Teste'))            //concatenou com a string
console.log(soma('a', 'b', 'c'))                //o 0 entra na soma

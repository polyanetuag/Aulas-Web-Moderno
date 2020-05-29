var numero = 1     // poderia usar o let também
{
    let numero = 2                       // o let funciona dentro do bloco, não substituindo os valores (escopo de bloco)
    console.log('dentro =', numero)
}
console.log('fora =', numero)
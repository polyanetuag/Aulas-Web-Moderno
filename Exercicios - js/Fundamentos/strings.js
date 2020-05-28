const escola = 'Cod3r'

console.log(escola.charAt(4))  // Significa que ele vai dar a letra que está no índice 4, dentro da string.
console.log(escola.charAt(5))  // letra que não tem no índice
console.log(escola.charCodeAt(3))  //valor na tabela Unicode(código html)
console.log(escola.indexOf('3'))    // saber o índice da string

console.log(escola.substring(1))   // escreve a partir do índice citado
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat('!'))     //adicionar elementos!
console.log('Escola ' + escola + '!')  

console.log(escola.replace(3, 'e'))                     // substituir elementos

console.log('Ana,Maria, Pedro'.split(','))  // criando em forma de array(vetor)

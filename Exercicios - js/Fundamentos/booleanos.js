let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)     // transformar um valor em true ou false   ---  !! anula o efeito de negação

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('pra finalizar...')
console.log(!!('' || null || 0 || '  '))   // vai buscar o verdadeiro e imprimir na tela

let nome = ''
console.log(nome || 'Desconhecido')

// Array - estrutura dinâmica, indexada[0,1,...]

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])               // não foi definido

// Adicionando itens na array
aprovados[3] = 'Paulo'
aprovados.push('Débora')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)             // os índices existem, porém são dados como undefined

console.log(aprovados)
aprovados.sort()                // altera a ordem na array
console.log(aprovados)

delete aprovados[1]             // deleta e não altera a ordem (undefined)
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
// Adiciona e remove ao mesmo tempo
aprovados.splice(1,1)
console.log(aprovados)
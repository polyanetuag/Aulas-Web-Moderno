const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()               // retira o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')    // adiciona um novo elemento
console.log(pilotos)

pilotos.shift()                // retira o primeiro elemento
console.log(pilotos)

// Adiciona um elemento na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)         //retorna um novo array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)      // retorna a partir do índice 1, porém não inclui o índice 4
console.log(algunsPilotos2)
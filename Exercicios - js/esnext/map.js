// O map pode ser flexivel, podendo conter uma função, um objeto, um número
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true})

console.log(tecnologias.react)      // undefined por não ser a forma correta de acessar o atributo neste exemplo
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map ([
    [function () { }, 'Função'],
    [{}, 'Objeto'], 
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))            // has: se o elemento contém no atributo (true/false)
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)                // Quantos elementos estão dentro do map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')                    // valores podem ser duplicados 
console.log(chavesVariadas)                     // porém, não aceita chaves duplicadas ( o 'b' substituiu o 'a')


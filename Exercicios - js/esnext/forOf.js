for (let letra of "Cod3r") {                            // Interando uma string
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {                           // Percorre os índices
    console.log(i)
}

for (let assunto of assuntosEcma) {                     // Percorre diretamente os valores
    console.log(assunto)
}

const assuntosMap = new Map([                           // Criando um Map
    ['Map', {abordado: true }],
    ['Set', {abordado: true }],
    ['Promise', {abordado: false }]
])

for (let assunto of assuntosMap) {                      // Percorrendo o Map
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {                 // Percorrendo as chaves do Map
    console.log(chave)
}

for (let valor of assuntosMap.values()) {              // Percorrendo os valores do Map
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {           // Percorrendo as entradas (destructuring um array)
    console.log(ch, vl)
}

const s = new Set(['a', 'b','c'])                       // Percorrendo o Set
for (let letra of s) {
    console.log(letra)
}
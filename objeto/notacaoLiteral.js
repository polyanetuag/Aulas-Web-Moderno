const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }            // Nova notação
console.log(obj1, obj2)             // Ambas são iguais

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}    // Nova notação
console.log(obj4)

const obj5 = {
    funcao1: function() {               // forma tradicional
        // ...
    },
    funcao2() {                         // forma reduzida para definir uma função dentro de um objeto
        // ...
    }
}

console.log(obj5)
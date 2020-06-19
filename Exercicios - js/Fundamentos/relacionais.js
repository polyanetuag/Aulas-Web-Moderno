console.log('01)', '1' == 1)            // valores iguais
console.log('02)', '1' === 1)           // valores iguais, porém tipos diferentes
console.log('03)', '3' != 3)            // valores iguais, mas não o tipo
console.log('04)', '3' !== 3)           //estritamente diferentes (leva em consideração o valor e o tipo)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2)

console.log('12)', undefined == null)   // iguais
console.log('13)', undefined === null)


// operadores 
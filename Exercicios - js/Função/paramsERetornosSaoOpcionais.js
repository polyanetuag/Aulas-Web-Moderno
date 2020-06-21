// Função que ora retorna um valor, ora não retorna

function area(largura, altura) {
    const area = largura *altura
    if(area > 20) {
        console.log(`Valor aciam do permitido: ${area}m2.`)
    } else {
        return area 
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 4 , 18 , 45))
console.log(area(5, 5))

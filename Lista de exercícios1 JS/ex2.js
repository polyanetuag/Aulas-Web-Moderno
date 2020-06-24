 function triangulo(l1, l2, l3) {
        if(l1 == l2 == l3) {
            console.log('É um equilátero')
        } else if(l1 != l2 && l2 != l3 && l3 != l1 ) {
            console.log('É um escaleno') 
        } else {
            console.log('É um isósceles!')
        }
    
}

triangulo(1, 1, 1)
triangulo(1, 1, 2)
triangulo(1, 3, 4)
triangulo(2, 1, 2)
triangulo(1, 2, 1)
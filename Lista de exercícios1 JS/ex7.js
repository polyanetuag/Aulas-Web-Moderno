let coeficiente1= 0
let coeficiente2= 0;
 
 function baskara(a, b, c) {
    let delta = (b * b - 4 * a *c) 
    if(delta > 0 ) {
        coeficiente1 = (-b + Math.sqrt(delta)) / (2 * a);     //raiz quadrada
        coeficiente2 = (-b - Math.sqrt(delta)) / (2 * a);
    } else {
        console.log("Delta negativo: não existem raízes reais")
    }
   
}

baskara(-1, 8, 14)

console.log(`Coeficiente1 = ${coeficiente1}`)
console.log(`Coeficiente2 = ${coeficiente2}`)


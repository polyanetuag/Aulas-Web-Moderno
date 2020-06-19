//  || Se um ou outro forem certo
//  && Se os dois trabalhos forem certos  


function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2         
    const comprarTv50 = trabalho1 && trabalho2           
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)     // bitwise xor (ou exclusivo)
    const comprarTv32 = trabalho1 != trabalho2          
    const manterSaudavel = !comprarSorvete              //operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
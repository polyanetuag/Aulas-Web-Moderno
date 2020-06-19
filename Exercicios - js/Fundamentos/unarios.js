let num1 = 1
let num2 = 2


num1++                  //acrecenta uma unidade ao valor da variável (pós-fixada)
console.log(num1)

--num1                  //subtrai uma unidade (pré-fixada)
console.log(num1) 


console.log(++num1 === num2--)  
// verdadeiro, pois o acréscimo do num1 foi feito antes da comparação 
//e a subtraçào do num2 será feita depois da comparação

console.log(num1===num2)  // agora são falsos

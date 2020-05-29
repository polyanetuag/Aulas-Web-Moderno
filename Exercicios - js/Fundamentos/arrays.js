const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores [4])   //como o indice 4 não existe, ele acusa indefined

valores[4] = 10
console.log(valores)
console.log(valores.length)   // quantificar os índices existentes

valores.push({id: 3}, false, null, 'teste')     // Adicionar valores, mesmo que seja de tipos diferentes(não recomendado)
console.log(valores)

console.log(valores.pop())   // Retira o 'valor' do último índice
delete valores [0]
console.log(valores)

console.log(typeof valores)   // array é um objeto

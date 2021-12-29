// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(item, quantidade) {
  return Array(quantidade).fill(item);
}

// O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.

// OU

function repetir(item, quantidade) {
  let resultado = [];
  for (let i = 0; i < quantidade; i++) resultado.push(item);
  return resultado;
}

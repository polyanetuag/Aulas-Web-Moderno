// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.

function simboloMais(quantidade) {
  return Array(quantidade).fill("+").join("");
}

// OU

function simboloMais(quantidade) {
  return "+".repeat(quantidade);
}

simboloMais(2); // retornará "++"
simboloMais(4); // retornará "++++"

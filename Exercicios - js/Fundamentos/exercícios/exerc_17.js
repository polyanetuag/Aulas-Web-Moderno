// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

function somarNumeros(numeros) {
  const quantidadeDeNumeros = numeros.length;
  return quantidadeDeNumeros === 0
    ? 0
    : numeros[0] + somarNumeros(numeros.slice(1));
}

// OU

function somarNumeros(numeros) {
  let soma = 0;
  numeros.forEach((numero) => (soma += numero));
  return soma;
}

// OU

function somarNumeros(numeros) {
  const soma = numeros.reduce(
    (acumulador, numeroAtual) => acumulador + numeroAtual,
    0
  );
  return soma;
}

somarNumeros([10, 10, 10]); // retornará 30
somarNumeros([15, 15, 15, 15]); // retornará 60

// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function maiorOuIgual(primeiro, segundo) {
  // verificando os tipos de valores
  if (typeof primeiro != typeof segundo) {
    return false;
  }
  return primeiro >= segundo;
}

console.log(maiorOuIgual(0, 0));

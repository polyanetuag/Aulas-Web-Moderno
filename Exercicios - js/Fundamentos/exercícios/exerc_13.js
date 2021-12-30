// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.

function filtrarNumeros(array) {
  const resultado = [];
  for (let item of array) if (typeof item === "number") resultado.push(item);
  return resultado;
}

// OU

function filtrarNumeros(array) {
  return array.filter((item) => typeof item === "number");
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20]); // retornará [1, 20]
filtrarNumeros(["a", "c"]); // retornará []

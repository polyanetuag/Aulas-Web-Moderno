// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array

function receberPrimeiroEUltimoElemento(elementos) {
  const primeiroElemento = elementos.shift(); // retorna o primeiro elemento do array
  const ultimoElemento = elementos.pop(); // retorna o ultimo elemento do array

  return [primeiroElemento, ultimoElemento];
}

receberPrimeiroEUltimoElemento([7, 14, "olá"]); // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]); // retornará [-100, 16]

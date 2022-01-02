// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

function segundoMaior(numeros) {
  const maiorNumero = Math.max(...numeros);
  numeros = numeros.filter((numero) => numero != maiorNumero);
  const segundoMaior = Math.max(...numeros);
  return segundoMaior;
}

//OU

function segundoMaior(numeros) {
  const numerosOrdenados = numeros.sort(
    (numeroA, numeroB) => numeroB - numeroA
  );
  const segundoMaior = numerosOrdenados[1];
  return segundoMaior;
}

segundoMaior([12, 16, 1, 5]); // retornará 12
segundoMaior([8, 4, 5, 6]); // retornará 6

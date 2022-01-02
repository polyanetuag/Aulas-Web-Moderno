// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

function contarCaractere(caractereBuscado, frase) {
  let contador = 0;
  for (let i = 0; i < frase.length; i++)
    if (frase.charAt(i) === caractereBuscado) contador++;
  return contador;
}

// OU

function contarCaractere(caractereBuscado, frase) {
  return [...frase].filter((caractere) => caractere === caractereBuscado)
    .length;
}

contarCaractere("r", "A sorte favorece os audazes"); // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo"); // retornará 1

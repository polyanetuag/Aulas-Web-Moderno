// Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.

function removerVogais(frase) {
  return frase.replace(/[aeiou]/gi, "");
}

removerVogais("Cod3r"); // retornará "Cd3r"
removerVogais("Fundamentos"); // retornará "Fndmnts"

// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

function saudacao(nome) {
  const cumprimentar = "Olá";

  return [cumprimentar, nome].join(", ").concat("!");
}

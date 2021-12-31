// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.

function objetoParaArray(objeto) {
  const chaves = Object.keys(objeto);
  const resultado = chaves.map((chave) => [chave, objeto[chave]]);

  return resultado;
}

objetoParaArray({
  nome: "Maria",
  profissao: "Desenvolvedora de software",
}); // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]

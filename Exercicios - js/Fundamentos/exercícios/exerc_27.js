// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas

function inverter(objeto) {
  const paresDeChaveValorInvertidos = Object.entries(objeto).map(
    (parChaveValor) => parChaveValor.reverse()
  );
  return Object.fromEntries(paresDeChaveValorInvertidos);
}

inverter({ a: 1, b: 2, c: 3 }); // retornará { 1: "a", 2: "b", 3: "c"}

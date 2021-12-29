// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.

function multiplicar(numero1, numero2) {
  let resultado = 0;
  /* a otimização feita para diminuir a quantidade de chamadas recursivas pode ser realizada aqui para diminuir a quantidade de loops */
  for (let i = 0; i < numero2; i++) resultado += numero1;
  return resultado;
}

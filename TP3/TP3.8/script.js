let n1 = parseFloat(prompt("Digite um número:"))
let n2 = parseFloat(prompt("Digite outro número:"))
let operacao = prompt("Digite a operação que deve ser feita ( + , - , * , / ): ")
let resultado;

switch (operacao) {
  case "+":
    resultado = n1 + n2
    break;
  case "-":
    resultado = n1 - n2
    break;
  case "*":
    resultado = n1 * n2
    break;
  case "/":
    if (n2 !== 0) {
      resultado = n1 / n2
    } else {
      console.log("Erro na operação: Divisão por 0.")
    }
    break;
  default:
    console.log("Operação Inválida.")
}

if (resultado !== undefined) {
  console.log(`O resultado é igual a ${resultado}.`)
}
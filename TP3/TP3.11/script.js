let valorTotal = parseFloat(prompt("Digite o valor total da compra:"))
let codigo = prompt("Digite o código para se identificar (A = Gestante / B = Aposentado / C = Pensionista):")

if (valorTotal >= 80.00) {
  switch (codigo) {
    case "A":
      valorTotal *= 0.8
      break;
    case "B":
      valorTotal *= 0.85
      break;
    case "C":
      valorTotal *= -0.9
      break;
    default:
      console.log("ERRO: Tipo de consumidor inválido.")
      break;
  }
} else {
  switch (codigo) {
    case "A":
      valorTotal *= 0.85
      break;
    case "B":
      valorTotal *= 0.9
      break;
    case "C":
      valorTotal *= 0.95
      break;
    default:
      console.log("ERRO: Tipo de consumidor inválido.")
      break;
  }
} 

if (!isNaN(valorTotal)) {
  console.log(`O valor da compra com o desconto é: R$${valorTotal.toFixed(2)}`)
}
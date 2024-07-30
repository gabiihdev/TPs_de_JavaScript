let precoNormal = parseFloat(prompt("Digite o preço normal da fita:"))
let diaSemana = parseInt(prompt("Digite o dia da semana (1 a 7,  1 = domingo /7 = sábado):"))
let categoria = prompt("Digite a categoria do filme (comum ou lançamento):")
let valorPago;

if (categoria === "lançamento") {
  precoNormal *= 1.15
}

switch (diaSemana) {
  case 2:
  case 3:
  case 5:
    valorPago = precoNormal * 0.6
    break;
  case 4:
  case 6:
  case 7:
  case 1:
    valorPago = precoNormal
    break;
  default:
    console.log("ERRO: dia da semana incorreto.")
    break;
}

if (valorPago !== undefined) {
  console.log(`O valor a ser pago é: R$${valorPago}.`)
}
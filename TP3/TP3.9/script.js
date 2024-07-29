let tipoConsumidor = prompt("Digite o tipo de consumidor (residencial, comercial ou industrial):").toLowerCase()
let consumoAgua = parseFloat(prompt("Digite o consumo de água em metros cúbicos:"))
let valorPago;

switch (tipoConsumidor) {
  case "residencial":
    valorPago = 5 + (0.05 * consumoAgua)
    break;
  case "comercial":
    if (consumoAgua <= 80) {
      valorPago = 500
    } else {
      valorPago = 500 + (0.25 * (consumoAgua - 80))
    }
    break;
  case "industrial":
    if (consumoAgua <= 100) {
      valorPago = 800
    } else {
      valorPago = 800 + (0.04 * (consumoAgua - 100))
    }
    break;
  default:
    console.log("Tipo de consumidor incorreto.")
    break;
}

if (valorPago !== undefined) {
  console.log(`O valor a ser pago é: R$${valorPago.toFixed(2)}`)
}
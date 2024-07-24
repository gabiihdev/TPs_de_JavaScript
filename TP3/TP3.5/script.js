let peso = parseFloat(prompt("Qual é o peso pescado?"))
let multa = 0;

if (peso > 50) {
  multa = (peso - 50) * 4
}

if (multa > 0) {
  console.log(`Você excedeu o limite de peso em ${peso - 50} quilos.`)
  console.log(`O valor da multa é de R$${multa.toFixed(2)}.`)
} else {
  console.log(`Não há multa, o peso está dentro dos limites.`)
}
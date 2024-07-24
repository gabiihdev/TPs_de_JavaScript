let sexo = prompt("Qual é o seu sexo? (M = Masculino / F = Feminino)")
let altura = parseFloat(prompt("Qual é a sua altura?"))
let pesoIdeal;

if (sexo === "M") {
  pesoIdeal = (72.7 * altura) - 58
} else if (sexo === "F") {
  pesoIdeal = (62.1 * altura) - 44.7
} else {
  console.log ("Sexo inválido.")
}

console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(2)} quilos.`)
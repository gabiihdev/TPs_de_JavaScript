//
let a = Number(prompt("Digite o valor do primeiro lado do triângulo:"))
let b = Number(prompt("Digite o valor do segundo lado do triângulo:"))
let c = Number(prompt("Digite o valor do terceiro lado do triângulo:"))

//
if ((a + b > c) && (b + c > a) && (a + c > b)){
  alert("É possível formar um triângulo com essas medidas.")
} else {
  alert("Não é possível formar um triângulo com essas medidas.")
}
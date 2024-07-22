//
let a = Number(prompt("Digite o valor do primeiro lado do triângulo:"))
let b = Number(prompt("Digite o valor do segundo lado do triângulo:"))
let c = Number(prompt("Digite o valor do terceiro lado do triângulo:"))

//
if ((a + b) > c && (a + c) > b && (b + c) > a){
  if (a === b && b === c) {
    alert("Triângulo Equilátero")
  } else if (a != b && b != c) {
    alert("Triângulo Escaleno")
  } else {
    alert("Triângulo Isósceles")
  }; 
  } else {
    alert("Os valores informados não podem formar um triângulo.")
  }
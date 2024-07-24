let categoria = prompt("Qual é a sua categoria?").toUpperCase()
let faixaEtaria;

switch (categoria) {
  case "A":
    faixaEtaria = "5 a 7 anos."
    break;
  case "B":
    faixaEtaria = "8 a 11 anos."
    break;
  case "C":
    faixaEtaria = "12 a 13 anos."
    break;
  case "D":
    faixaEtaria = "14 a 17 anos."
    break;
  case "E":
    faixaEtaria = "Maiores de 18 anos."
    break;
  default:
    console.log("Categoria inválida.")
}

console.log(`A sua faixa etária é: ${faixaEtaria}`)
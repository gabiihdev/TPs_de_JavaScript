let cargo = prompt("Qual é o seu cargo?")
let salario = parseFloat(prompt("Qual é o seu salário?"))
let atualizacaoSalarial;

switch (cargo.toLowerCase()) {
  case "estagiário":
    atualizacaoSalarial = salario * 1.1
    break;
  case "trainee":
    atualizacaoSalarial = salario * 1.09
    break;
  case "júnior":
    atualizacaoSalarial = salario * 1.08
    break;
  case "pleno":
    atualizacaoSalarial = salario * 1.07
    break;
  case "sênior":
    atualizacaoSalarial = salario * 1.06
    break;
  default:
    console.log("O cargo não é conhecido pelo sistema.")
}

console.log(`Seu novo salário é: R$${atualizacaoSalarial.toFixed(2)}`)
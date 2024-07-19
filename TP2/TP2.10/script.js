//
let escolha = prompt("Par ou Ímpar:")
let numeroAleatorio = Math.floor(Math.random() * 100) + 1
let tipoNumeroAleatorio;

//
if (numeroAleatorio % 2 == 0){
  tipoNumeroAleatorio = "par";
  alert("Você escolheu " + escolha + " e o número sorteado foi " + numeroAleatorio + " (par)." )
} else {
  tipoNumeroAleatorio = "ímpar";
  alert("Você escolheu " + escolha + " e o número sorteado foi " + numeroAleatorio + " (ímpar)." )
}

//
if (escolha == tipoNumeroAleatorio){
  alert("Você ganhou!")
} else {
  alert("Você perdeu!")
}
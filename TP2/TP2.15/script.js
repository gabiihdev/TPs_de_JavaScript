//
let ano = prompt("Digite um ano com 4 dígitos:")

//
if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
  alert(`O ano ${ano} é bissexto.`)
} else {
  alert(`O ano ${ano} não é bissexto.`)
}
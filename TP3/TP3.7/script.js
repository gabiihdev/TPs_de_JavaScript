let idade = parseInt(prompt("Qual é a sua idade?"))
let sexo = prompt("Qual é o seu sexo? (M = Masculino / F = Feminino")
let nViagens = parseInt(prompt("Quantas viagens você já fez?"))
let participação = false;

if ((sexo === "M" && idade >= 40) || (sexo === "F" && idade >= 35)) {
  participação = true;
} else if ((sexo === "M" && nViagens <= 2) || (sexo === "F" && nViagens <= 3)) {
  participação = true;
} else if ((sexo === "M" && idade >= 35 && nViagens <= 1) || (sexo === "F" && idade >= 30 && nViagens <= 2)) {
  participação = true;
}

if (participação) {
  console.log ("Parabéns !!! Você pode participar da promoção para viagens ao Egito.")
} else {
  console.log("Desculpe, você não pode participar da promoção para viagens ao Egito.")
}
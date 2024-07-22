function partida() {
    let possibilidades = ["pedra", "papel", "tesoura"];
  
    let escolhaUsuario = prompt("Informe a sua escolha (pedra, papel ou tesoura)");
  
    let escolhaComputador = possibilidades[Math.floor(Math.random() * possibilidades.length)];
  
    alert("O computador escolheu " + escolhaComputador);
  
    if (escolhaUsuario === escolhaComputador) {
      alert("Empate!");
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        alert("Você ganhou!");
    } else {
        alert("Você perdeu!");
    }
  }
  partida();
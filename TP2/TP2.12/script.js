let valorInicial = parseFloat(prompt("Informe o valor inicial da compra"));
let modalidadePagamento = parseFloat(prompt("Informe a modalidade de pagamento (1 - À vista, 2 - A prazo):"));
let formaPagamento = 0;
let numeroParcelas = 0;

if (modalidadePagamento == 1) {
  let formaPagamento = prompt("Informe a forma de pagamento (1 - Dinheiro, 2 - Débito, 3 - Crédito)");
    if(formaPagamento == 1) {
      let valorFinal = valorInicial - (valorInicial * 0.1);
      alert("O valor final da compra é: R$ " + valorFinal);
    } else if (formaPagamento == 2) {
      let valorFinal = valorInicial - (valorInicial * 0.08);
      alert("O valor final da compra é: R$ " + valorFinal);
    } else {
      let valorFinal = valorInicial - (valorInicial * 0.05);
      alert("O valor final da compra é: R$ " + valorFinal);
    }
} else {
  let numeroParcelas = parseInt(prompt("Informe o número de parcelas (1 - À vista, 2 - 2x, 3 - 3x, 4 - 4x, 5 - 5x, 6 - 6x, 7 - 7x, 8 - 8x, 9 - 9x, 10 - 10x):"));
  if (numeroParcelas <= 3) {;
    let valorFinal = valorInicial;
    alert("O valor final da compra é: R$ " + valorFinal);
    alert("Você irá pagar " + numeroParcelas + " parcelas de R$ " + (valorFinal / numeroParcelas));
  } else {
    let valorFinal = valorInicial + (valorInicial * 0.4);
    alert("O valor final da compra é: R$ " + valorFinal);
    alert("Você irá pagar " + numeroParcelas + " parcelas de R$ " + (valorFinal / numeroParcelas));
  }
};
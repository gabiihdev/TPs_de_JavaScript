function calcularForça() {
    const m = parseFloat(prompt("Digite a massa do objeto (kg): "));
    const a = parseFloat(prompt("Digite a aceleração (m/s²): "));
  
    const forca = m * a;
    return `Para mover um objeto com massa de ${m} kg a ${a} m/s, aplique ${forca.toFixed(2)} N de força (considerando que não há nenhuma resistência ao movimento).`;
};
  
  function calcularPotencia() {
    const w = parseFloat(prompt('Digite o trabalho realizado (J): '));
    const t = parseFloat(prompt('Digite o tempo (s): '));
  
    const potencia = w / t;
    return `Para realizar um trabalho de ${w} J em um tempo de ${t} s, foi utilizado a potência de ${potencia.toFixed(2)} W.`;
  };
  
  const forca = calcularForça();
  const potencia = calcularPotencia();
  alert(`1. ${forca}\n2. ${potencia}`);
  
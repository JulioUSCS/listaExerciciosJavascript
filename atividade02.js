document.getElementById("soma-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado.textContent = "Por favor, insira valores válidos.";
      return;
    }
  
    const soma = num1 + num2;
    let resultadoFinal;
  
    if (soma > 20) {
      resultadoFinal = soma + 8;
      resultado.textContent = `A soma é maior que 20. Resultado final: ${resultadoFinal}`;
    } else {
      resultadoFinal = soma - 5;
      resultado.textContent = `A soma é menor ou igual a 20. Resultado final: ${resultadoFinal}`;
    }
  });
  
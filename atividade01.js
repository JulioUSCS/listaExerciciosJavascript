document.getElementById("trapezio-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const B = parseFloat(document.getElementById("baseMaior").value);
    const b = parseFloat(document.getElementById("baseMenor").value);
    const h = parseFloat(document.getElementById("altura").value);
  
    const resultado = document.getElementById("resultado");
  
    if (isNaN(B) || isNaN(b) || isNaN(h)) {
      resultado.textContent = "Por favor, insira valores válidos.";
      return;
    }
  
    const area = ((B + b) * h) / 2;
    resultado.textContent = `A área do trapézio é: ${area.toFixed(2)}`;
  });
  
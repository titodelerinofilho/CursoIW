function validar() {
  event.preventDefault();

  let ladoA = document.getElementById('ladoA').value;
  let ladoB = document.getElementById('ladoB').value;
  let ladoC = document.getElementById('ladoC').value;

  const RESULTADO = document.getElementById('resultado');

  let lados = new Set([ladoA, ladoB, ladoC]);

  let resultados = {
    1: "Equilátero",
    2: "Isósceles",
    3: "Escaleno"
  };

  RESULTADO.innerHTML = resultados[lados.size];
  RESULTADO.classList.remove('d-none');
}

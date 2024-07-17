const numeroTurno = document.getElementById("numero-turno");
let operador: number;
if (numeroTurno instanceof HTMLElement) {
  if (numeroTurno.textContent !== null) {
    operador = parseInt(numeroTurno.textContent);
  }
}

const siguiente = document.getElementById("siguiente");
const anterior = document.getElementById("anterior") ;
const reset = document.getElementById("reset");
const ingresar = document.getElementById("ingresar");

if (numeroTurno !== null) {
  if (siguiente instanceof HTMLButtonElement) {
    siguiente.addEventListener("click", () => {
      ++operador;
      numeroTurno.innerHTML = operador.toString().padStart(2, "0");
    });
  }

if(anterior instanceof HTMLButtonElement){
  anterior.addEventListener("click", () => {
    if (operador >= 1) {
      --operador;
      numeroTurno.innerHTML = operador.toString().padStart(2, "0");
    }
  })};

 if(reset instanceof HTMLButtonElement){ 
  reset.addEventListener("click", () => {
    operador = 0;
    numeroTurno.innerHTML = operador.toString().padStart(2, "0");
  })};

  if(ingresar instanceof HTMLButtonElement){ 
  ingresar.addEventListener("click", () => {
    const turnoManual = document.getElementById("turno-manual");
    if (turnoManual instanceof HTMLInputElement) {
      if (turnoManual !== null) {
        operador = parseInt(turnoManual.value);
        numeroTurno.innerHTML = operador.toString().padStart(2, "0");
      }
    }
  })};
}

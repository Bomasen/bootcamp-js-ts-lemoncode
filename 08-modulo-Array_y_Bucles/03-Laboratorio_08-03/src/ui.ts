import { Carta, Tablero, cartas, intentos, retardoCartas, tablero } from "./model";
import {
  asignarIndiceCartasVolteadas,
  barajarCartas,
  comprobarNumeroCartasVolteadas,
  esPartidaCompleta,
  parejaEncontrada,
  parejaNoEncontrada,
  resetTablero,
  sePuedeVoltearCarta,
  sonPareja,
  sumarIntentos,
} from "./motor";

const esElementoDiv = (elemento: HTMLElement | Element | null): elemento is HTMLDivElement => {
  return elemento !== null && elemento instanceof HTMLDivElement;
};

const esElementoImagen = (elemento: HTMLElement | Element | null): elemento is HTMLImageElement => {
  return elemento !== null && elemento instanceof HTMLImageElement;
};

const cambioDisplaysPartidaCompleta = () => {
  const divWinner = document.getElementById("winner");
  const divImagenes = document.querySelectorAll(".div-carta");
  divImagenes.forEach((divImagen) => {
    esElementoDiv(divImagen)
      ? (divImagen.style.display = "none")
      : console.error("Error divImagen cambioDisplayPartidaCompleta");
  });
  esElementoDiv(divWinner)
    ? (divWinner.style.display = "inline")
    : console.error("Error divWinner cambioDisplayPartidaCompleta");
};

const cambioDisplaysPartidaIniciada = () => {
  const divWinner = document.getElementById("winner");
  const divImagenes = document.querySelectorAll(".div-carta");
  divImagenes.forEach((divImagen) => {
    esElementoDiv(divImagen)
      ? (divImagen.style.display = "flex")
      : console.error("Error divImagen cambioDisplayPartidaIniciada");
  });
  esElementoDiv(divWinner)
    ? (divWinner.style.display = "none")
    : console.error("Error divWinner cambioDisplayPartidaIniciada");
};

export const mensajePartida = (tablero: Tablero) => {
  const divMensajePartida = document.getElementById("mensaje-partida");
  const estadoPartida = tablero.estadoPartida;
  if (esElementoDiv(divMensajePartida)) {
    switch (estadoPartida) {
      case "PartidaIniciada":
        gestionPartidaIniciada(divMensajePartida);
        break;
      case "PartidaCompleta":
        gestionPartidaCompleta(divMensajePartida);
        break;
      default:
        console.error("error al mostrar mensaje partida");
    }
  } else {
    console.error("Error mensajePartida");
  }
};

const gestionPartidaIniciada = (divMensajePartida: HTMLDivElement) => {
  divMensajePartida.textContent = "!!EMPIEZA EL JUEGO!!";
  cambioDisplaysPartidaIniciada();
  setTimeout(() => {
    divMensajePartida.textContent = "";
  }, 3000);
};

const gestionPartidaCompleta = (divMensajePartida: HTMLDivElement) => {
  setTimeout(() => {
    divMensajePartida.textContent = "!!🏆PARTIDA COMPLETADA🏆!!";
    cambioDisplaysPartidaCompleta();
  }, 1300);
};

const mensajeErrorCarta = () => alert("⚠️NO ES POSIBLE VOLTEAR CARTA⚠️");

export const mostrarIntentos = (intentos: number): void => {
  const divIntentos = document.getElementById("intentos");
  esElementoDiv(divIntentos)
    ? (divIntentos.textContent = `Intentos: ${intentos}`)
    : console.error("Error elementoDIv mostrarIntentos");
};

const voltearCarta = (tablero: Tablero, indice: number): void => {
  const imagenCarta = document.getElementById(`imagen-${indice}`);
  const divCarta = document.getElementById(`div-${indice}`);

  if (esElementoImagen(imagenCarta) && esElementoDiv(divCarta)) {
    const cartaParaVoltear = { ...tablero.cartas[indice], estaVuelta: true };
    tablero.cartas[indice] = cartaParaVoltear;
    tablero.estadoPartida = "PartidaEnCurso";
    voltearImagenCarta(tablero.cartas[indice], imagenCarta, divCarta);
  } else {
    console.error("Error elementos en voltearCarta");
  }
};

const voltearImagenCarta = (
  carta: Carta,
  imagenCarta: HTMLImageElement,
  divCarta: HTMLDivElement
) => {
  imagenCarta.src = carta.imagen;
  divCarta.style.backgroundColor = "#747bff";
};

export const atenuarCartas = (indiceA: number, indiceB: number) => {
  const divCartaA = document.getElementById(`div-${indiceA}`);
  const divCartaB = document.getElementById(`div-${indiceB}`);
  if (esElementoDiv(divCartaA) && esElementoDiv(divCartaB)) {
    setTimeout(() => {
      divCartaA.style.opacity = "0.7";
      divCartaB.style.opacity = "0.7";
    }, retardoCartas);
  } else {
    console.error("Error elementos en atenuarCartas");
  }
};

const voltearCartaBocaAbajo = (indice: number) => {
  const imagenCarta = document.getElementById(`imagen-${indice}`);
  const divCarta = document.getElementById(`div-${indice}`);
  if (esElementoImagen(imagenCarta) && esElementoDiv(divCarta)) {
    imagenCarta.src = "";
    divCarta.style.backgroundColor = "skyblue";
  } else {
    console.error("Error elementos en voltearCartaBocaAbajo");
  }
};

export const cartasBocaAbajo = (indiceA: number, indiceB: number): void => {
  setTimeout(() => {
    voltearCartaBocaAbajo(indiceA);
    voltearCartaBocaAbajo(indiceB);
  }, 500);
};

const resetDivsCartas = (tablero: Tablero): void => {
  tablero.cartas.forEach((carta, indice) => {
    const imgCartas = document.getElementById(`imagen-${indice}`);
    const divCartas = document.getElementById(`div-${indice}`);
    if (carta && esElementoImagen(imgCartas) && esElementoDiv(divCartas)) {
      imgCartas.src = "";
      divCartas.style.backgroundColor = "skyblue";
      divCartas.style.opacity = "1";
    } else {
      console.error("Error elementos en resetDivsCartas");
    }
  });
};

const gestionCartasVolteadas = (tablero: Tablero): void => {
  const indiceCartaA = tablero.indiceCartaVolteadaA;
  const indiceCartaB = tablero.indiceCartaVolteadaB;

  if (indiceCartaA !== undefined && indiceCartaB !== undefined) {
    const okSonPareja = sonPareja(indiceCartaA, indiceCartaB, tablero);
    okSonPareja
      ? gestionParejaEncontrada(indiceCartaA, indiceCartaB, tablero)
      : gestionParejaNoEncontrada(indiceCartaA, indiceCartaB, tablero);
  } else {
    console.error("Error elementos en gestionCartasVolteadas");
  }
};

const gestionParejaEncontrada = (indiceCartaA: number, indiceCartaB: number, tablero: Tablero) => {
  parejaEncontrada(indiceCartaA, indiceCartaB, tablero);
  atenuarCartas(indiceCartaA, indiceCartaB);
  esPartidaCompleta(tablero);
};

const gestionParejaNoEncontrada = (
  indiceCartaA: number,
  indiceCartaB: number,
  tablero: Tablero
) => {
  parejaNoEncontrada(indiceCartaA, indiceCartaB, tablero);
  cartasBocaAbajo(indiceCartaA, indiceCartaB);
};

const efectoGiroCarta = (indice: number) => {
  const divCarta = document.getElementById(`div-${indice}`);
  if (esElementoDiv(divCarta)) {
    const transformValue = divCarta.style.transform;
    divCarta.style.transform = transformValue.includes("180deg") ? "" : "rotateY(180deg)";
  } else {
    console.error("Error elementos en efectoGiroCarta");
  }
};

const handleInicio = () => {
  resetTablero(tablero);
  resetDivsCartas(tablero);
  barajarCartas(cartas);
  mensajePartida(tablero);
  mostrarIntentos(intentos);
};

const handleCarta = (tablero: Tablero, indice: number) => {
  if (!sePuedeVoltearCarta(tablero, indice) || tablero.estadoPartida === "PartidaNoIniciada") {
    mensajeErrorCarta();
  } else {
    efectoGiroCarta(indice);
    voltearCarta(tablero, indice);
    asignarIndiceCartasVolteadas(tablero, indice);
  }

  if (comprobarNumeroCartasVolteadas(tablero)) {
    sumarIntentos();
    mostrarIntentos(intentos);
    gestionCartasVolteadas(tablero);
  }

  if (tablero.estadoPartida === "PartidaCompleta") mensajePartida(tablero);
};

export const eventos = () => {
  const botonInicio = document.getElementById("boton-inicio");
  if (botonInicio && botonInicio instanceof HTMLButtonElement) {
    botonInicio.addEventListener("click", handleInicio);
  }

  for (let indice = 0; indice <= cartas.length; indice++) {
    const divCarta = document.getElementById(`div-${indice}`);
    if (esElementoDiv(divCarta)) {
      divCarta.addEventListener("click", () => handleCarta(tablero, indice));
    }
  }
};

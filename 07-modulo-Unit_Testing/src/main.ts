import { mostrarMensaje, mostrarPuntos, eventos } from "./ui";

const inicializarPartida = () => {
  mostrarMensaje("INICIO_PARTIDA", 0);
  mostrarPuntos();
  eventos();
};

document.addEventListener("DOMContentLoaded", inicializarPartida);

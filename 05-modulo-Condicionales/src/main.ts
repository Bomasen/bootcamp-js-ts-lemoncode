let puntuacion: number = 0;

const numeroAleatorio = (): number => Math.floor(Math.random() * 10 + 1);

const mostrarPuntos = () => {
  const puntos = document.getElementById("puntos");
  puntos && puntos instanceof HTMLSpanElement
    ? (puntos.textContent = puntuacion.toString())
    : console.error("No se puede mostrar puntuación");
};

const numeroCarta = (numeroAleatorio: number): number =>
  numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;

const obtenerPuntos = (numeroCarta: number) =>
  numeroCarta <= 7 ? numeroCarta : 0.5;

const sumarPuntos = (puntos: number): number => puntuacion + puntos;

const setPuntuacion = (nuevosPuntos: number) => (puntuacion = nuevosPuntos);

const cambiarUrlCarta = (urlCarta: string) => {
  const carta = document.getElementById("carta");
  if (carta && carta instanceof HTMLImageElement) carta.src = urlCarta;
};

const obtenerUrlCarta = (numeroCarta: number): string => {
  switch (numeroCarta) {
    case 0.1:
      return "src/img/0.1_gameOver.jpg";
    case 1:
      return "src/img/1_as-copas.jpg";
    case 2:
      return "src/img/2_dos-copas.jpg";
    case 3:
      return "src/img/3_tres-copas.jpg";
    case 4:
      return "src/img/4_cuatro-copas.jpg";
    case 5:
      return "src/img/5_cinco-copas.jpg";
    case 6:
      return "src/img/6_seis-copas.jpg";
    case 7:
      return "src/img/7_siete-copas.jpg";
    case 10:
      return "src/img/10_sota-copas.jpg";
    case 11:
      return "src/img/11_caballo-copas.jpg";
    case 12:
      return "src/img/12_rey-copas.jpg";
    default:
      return "Número de carta inesperado";
  }
};

const mostrarMensaje = (texto: string) => {
  const mensaje = document.getElementById("mensaje");
  mensaje && mensaje instanceof HTMLDivElement
    ? (mensaje.textContent = texto)
    : console.error("No se puede mostrar mensaje");
};

const mensajePuntos = (puntos: number) =>
  mostrarMensaje(`Has sumado ${puntos} puntos!!`);

const handlePedir = () => {
  const generarCarta: number = numeroCarta(numeroAleatorio());
  const urlCarta: string = obtenerUrlCarta(generarCarta);
  cambiarUrlCarta(urlCarta);
  const puntos: number = obtenerPuntos(generarCarta);
  const nuevoPuntos: number = sumarPuntos(puntos);
  setPuntuacion(nuevoPuntos);
  mostrarPuntos();
  mensajePuntos(puntos);
  gestionPartida();
};

const handleSalir = () => mePlanto(puntuacion);

const handleNuevo = () => empezarDeNuevo();

const handleVer = () => verResultadoSiguiente();

const eventos = () => {
  const pedir = document.getElementById("pedir");
  pedir && pedir instanceof HTMLButtonElement
    ? pedir.addEventListener("click", handlePedir)
    : console.error("Error en el botón Pedir");

  const salir = document.getElementById("salir");
  salir && salir instanceof HTMLButtonElement
    ? salir.addEventListener("click", handleSalir)
    : console.error("Error en el botón Salir");

  const nuevo = document.getElementById("nuevo");
  nuevo && nuevo instanceof HTMLButtonElement
    ? nuevo.addEventListener("click", handleNuevo)
    : console.error("Error en el boton Nuevo");

  const ver = document.getElementById("ver");
  ver && ver instanceof HTMLButtonElement
    ? ver.addEventListener("click", handleVer)
    : console.error("Error en el boton Ver");
};

const visibilidadBotones = () => {
  const pedir = document.getElementById("pedir");
  pedir && pedir instanceof HTMLButtonElement
    ? pedir.remove()
    : console.error("Error al cambiar visualización botón Pedir");

  const salir = document.getElementById("salir");
  salir && salir instanceof HTMLButtonElement
    ? salir.remove()
    : console.error("Error al cambiar visualización botón Salir");

  const nuevo = document.getElementById("nuevo");
  nuevo && nuevo instanceof HTMLButtonElement
    ? (nuevo.style.display = "inline-block")
    : console.error("Error al cambiar visualización botón Nuevo");

  const ver = document.getElementById("ver");
  ver && ver instanceof HTMLButtonElement && puntuacion < 7.5
    ? (ver.style.display = "inline-block")
    : console.error("Error al cambiar visualización botón Ver");
};

const gestionPartida = () => {
  if (puntuacion === 7.5) {
    mostrarMensaje("🏆¡Lo has clavado! ¡Enhorabuena!🏆");
    visibilidadBotones();
  }
  if (puntuacion > 7.5) {
    mostrarMensaje("💀!!GAME OVER!!💀");
    visibilidadBotones();
    const urlCarta: string = obtenerUrlCarta(0.1);
    cambiarUrlCarta(urlCarta);
  }
};

const mePlanto = (puntuacion: number) => {
  switch (true) {
    case puntuacion <= 4:
      mostrarMensaje("Has sido muy conservador 🧐");
      break;
    case puntuacion < 6:
      mostrarMensaje("Te ha entrado el canguelo eh?😰");
      break;
    case puntuacion >= 6 && puntuacion <= 7:
      mostrarMensaje("Casi casi....🥈");
      break;
    default:
      console.error("Número de puntuación inesperado");
  }
  visibilidadBotones();
};

const empezarDeNuevo = () => location.reload();

let resetVerResultadosSiguiente = false;
const verResultadoSiguiente = () => {
  if (!resetVerResultadosSiguiente) {
    const generarCarta: number = numeroCarta(numeroAleatorio());
    const urlCarta: string = obtenerUrlCarta(generarCarta);
    cambiarUrlCarta(urlCarta);
    const puntos: number = obtenerPuntos(generarCarta);
    const nuevoPuntos: number = sumarPuntos(puntos);
    setPuntuacion(nuevoPuntos);
    mostrarPuntos();
    mensajePuntos(puntos);
    resetVerResultadosSiguiente = true;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  mostrarPuntos();
  eventos();
  mostrarMensaje("!!Empieza el juego!!");
});

import { crearTableroInicial, intentos, setTablero } from "./model";
import { eventos, mostrarIntentos } from "./ui";

const iniciaPartida = (): void => {
  eventos();
  const tableroInicial = crearTableroInicial();
  setTablero(tableroInicial);
  mostrarIntentos(intentos);
};
addEventListener("DOMContentLoaded", iniciaPartida);

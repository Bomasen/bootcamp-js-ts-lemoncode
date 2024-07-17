import { partida, Estado } from "./model";

export const numeroAleatorio = (): number => Math.floor(Math.random() * 10 + 1);

export const numeroCarta = (numeroAleatorio: number): number =>
  numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;

export const obtenerPuntos = (numeroCarta: number) =>
  numeroCarta <= 7 ? numeroCarta : 0.5;

export const sumarPuntos = (puntos: number): number =>
  partida.puntuacion + puntos;

export const gestionPartida = (puntuacion: number): Estado => {
  if (puntuacion === 7.5) {
    return "PARTIDA_GANADA";
  }
  if (puntuacion > 7.5) {
    return "PARTIDA_PERDIDA";
  }
  return "MOSTRAR_PUNTOS";
};

export const gestionMePlanto = (puntuacion: number): Estado => {
  if (puntuacion >= 6 && puntuacion <= 7) {
    return "ME_PLANTO_MAYOR_IGUAL_6";
  }
  return puntuacion <= 4 ? "ME_PLANTO_MENOR_IGUAL_4" : "ME_PLANTO_MENOR_6";
};

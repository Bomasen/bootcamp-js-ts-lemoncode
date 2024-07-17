import { partida } from "./model";

export const numeroAleatorio = (): number => Math.floor(Math.random() * 10 + 1);

export const numeroCarta = (numeroAleatorio: number): number =>
  numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;

export const obtenerPuntos = (numeroCarta: number) =>
  numeroCarta <= 7 ? numeroCarta : 0.5;

export const sumarPuntos = (puntos: number): number =>
  partida.puntuacion + puntos;

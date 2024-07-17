interface Partida {
  puntuacion: number;
}

export const partida: Partida = {
  puntuacion: 0,
};

export const setPuntuacion = (nuevosPuntos: number) =>
  (partida.puntuacion = nuevosPuntos);

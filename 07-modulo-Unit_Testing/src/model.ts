interface Puntuacion {
  puntuacion: number;
}

export const partida: Puntuacion = {
  puntuacion: 0,
};


export type Estado =
  | "INICIO_PARTIDA"
  | "PARTIDA_GANADA"
  | "PARTIDA_PERDIDA"
  | "ME_PLANTO_MENOR_IGUAL_4"
  | "ME_PLANTO_MENOR_6"
  | "ME_PLANTO_MAYOR_IGUAL_6"
  | "MOSTRAR_PUNTOS"
  | "ERROR";


  
  export const setPuntuacion = (nuevosPuntos: number) =>
  (partida.puntuacion = nuevosPuntos);
export interface Carta {
  idFoto: number;
  imagen: string;
  estaVuelta: boolean;
  encontrada: boolean;
}

export interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const infoCartas: InfoCarta[] = [
  {
    idFoto: 1,
    imagen: "./src/img/Abeja.png",
  },
  {
    idFoto: 2,
    imagen: "./src/img/Buho.png",
  },
  {
    idFoto: 3,
    imagen: "./src/img/Cerdo.png",
  },
  {
    idFoto: 4,
    imagen: "./src/img/Gallina.png",
  },

  {
    idFoto: 5,
    imagen: "./src/img/Leon.png",
  },
  {
    idFoto: 6,
    imagen: "./src/img/Perro.png",
  },
];

const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto: idFoto,
  imagen: imagen,
  estaVuelta: false,
  encontrada: false,
});

const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
  const coleccionCartas: Carta[] = infoCartas.map((carta) =>
    crearCartaInicial(carta.idFoto, carta.imagen)
  );
  return coleccionCartas.concat(coleccionCartas);
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

export type EstadoPartida =
  | "PartidaNoIniciada"
  | "PartidaIniciada"
  | "PartidaEnCurso"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

export const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero;

export let setTablero = (tableroInicial: Tablero) => (tablero = tableroInicial);

export const retardoCartas: number = 1000;

export let intentos: number = 0;

export let setIntentos = (numIntentos: number) => (intentos = numIntentos);

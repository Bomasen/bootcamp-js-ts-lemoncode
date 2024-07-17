import { Carta, Tablero, setIntentos, intentos } from "./model";

export const barajarCartas = (cartas: Carta[]): void => {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
};

export const sePuedeVoltearCarta = (tablero: Tablero, indice: number): boolean => {
  const cartaParaComprobar = tablero.cartas[indice];
  return !cartaParaComprobar.estaVuelta ? true : false;
};

export const asignarIndiceCartasVolteadas = (tablero: Tablero, indice: number): void => {
  const cartasVolteadas: Carta[] = tablero.cartas.filter(
    (carta) => carta.estaVuelta && !carta.encontrada
  );
  cartasVolteadas.length === 2
    ? (tablero.indiceCartaVolteadaB = indice)
    : (tablero.indiceCartaVolteadaA = indice);
};

export const comprobarNumeroCartasVolteadas = (tablero: Tablero): boolean => {
  return tablero.indiceCartaVolteadaA !== undefined && tablero.indiceCartaVolteadaB !== undefined
    ? true
    : false;
};

export const sonPareja = (
  indiceCartaA: number,
  indiceCartaB: number,
  tablero: Tablero
): boolean => {
  const cartaA = tablero.cartas[indiceCartaA];
  const cartaB = tablero.cartas[indiceCartaB];
  return cartaA.idFoto === cartaB.idFoto;
};

export const parejaEncontrada = (
  indiceCartaA: number,
  indiceCartaB: number,
  tablero: Tablero
): void => {
  const cartaA = tablero.cartas[indiceCartaA];
  const cartaB = tablero.cartas[indiceCartaB];
  cartaA.encontrada = true;
  cartaB.encontrada = true;
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};

export const parejaNoEncontrada = (
  indiceCartaA: number,
  indiceCartaB: number,
  tablero: Tablero
): void => {
  const cartaA = tablero.cartas[indiceCartaA];
  const cartaB = tablero.cartas[indiceCartaB];
  cartaA.estaVuelta = false;
  cartaB.estaVuelta = false;
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};

export const sumarIntentos = (): void => {
  let numIntentos = intentos + 1;
  setIntentos(numIntentos);
};

export const esPartidaCompleta = (tablero: Tablero): void => {
  const partidaCompleta = tablero.cartas.every(
    (carta) => carta.encontrada === true && carta.estaVuelta === true
  );
  if (partidaCompleta === true) tablero.estadoPartida = "PartidaCompleta";
};

const resetCartas = (cartas: Carta[]): Carta[] => {
  cartas.forEach((carta) => {
    carta.encontrada = false;
    carta.estaVuelta = false;
  });
  return cartas;
};

export const resetTablero = (tablero: Tablero): void => {
  tablero.cartas = resetCartas(tablero.cartas);
  tablero.estadoPartida = "PartidaIniciada";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
  setIntentos(0);
};

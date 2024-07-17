import { Estado } from "./model";
import {
  gestionMePlanto,
  gestionPartida,
  numeroAleatorio,
  numeroCarta,
} from "./motor";
import { vi } from "vitest";

describe("gestionPartida", () => {
  it("Deberia de devolver PARTIDA_PERDIDA si la puntuación supera 7.5", () => {
    //Arrange
    const resultadoEsperado: Estado = "PARTIDA_PERDIDA";
    //Act
    const resultado = gestionPartida(10);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Deberia de devolver PARTIDA_GANADA si la puntuación es igual a 7.5", () => {
    //Arrange
    const resultadoEsperado: Estado = "PARTIDA_GANADA";
    //Act
    const resultado = gestionPartida(7.5);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("gestionMePlanto", () => {
  it("Deberia de devolver ME_PLANTO_MENOR_IGUAL_4 si puntuacion es <= a 4", () => {
    //Arrange
    const resultadoEsperado: Estado = "ME_PLANTO_MENOR_IGUAL_4";

    //Act
    const resultado = gestionMePlanto(3);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  
  it("Deberia de devolver ME_PLANTO_MENOR_6 si puntuacion es > a 4 y < a 6", () => {
    //Arrange
    const resultadoEsperado: Estado = "ME_PLANTO_MENOR_6";

    //Act
    const resultado = gestionMePlanto(5);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Deberia de devolver ME_PLANTO_MAYOR_IGUAL_6 si puntuacion es >= a 6 y <= a 7", () => {
    //Arrange
    const resultadoEsperado: Estado = "ME_PLANTO_MAYOR_IGUAL_6";

    //Act
    const resultado = gestionMePlanto(7);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("numeroAleatorio", () => {
  it("Deberia devolver el valor 1 al forzar Math.random", () => {
    //Arrange
    const resultadoEsperado: number = 1;
    vi.spyOn(global.Math, "random").mockReturnValue(0);

    //Act
    const resultado: number = numeroAleatorio();

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Deberia devolver el valor 5 al forzar Math.random", () => {
    //Arrange
    const resultadoEsperado: number = 5;
    vi.spyOn(global.Math, "random").mockReturnValue(0.499);

    //Act
    const resultado: number = numeroAleatorio();

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Deberia devolver el valor 10 al forzar Math.random", () => {
    //Arrange
    const resultadoEsperado: number = 10;
    vi.spyOn(global.Math, "random").mockReturnValue(0.999);

    //Act
    const resultado: number = numeroAleatorio();

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("numeroCarta", () => {
  it("Deberia devolver un 10 si el numero de carta es 8", () => {
    //Arrange
    const resultadoEsperado: number = 10;
    const numeroAleatorio: number = 8;
    //Act
    const resultado = numeroCarta(numeroAleatorio);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Deberia devolver 5 si el numero de carta es 5", () => {
    //Arrange
    const resultadoEsperado: number = 5;
    const numeroAleatorio: number = 5;
    //Act
    const resultado = numeroCarta(numeroAleatorio);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

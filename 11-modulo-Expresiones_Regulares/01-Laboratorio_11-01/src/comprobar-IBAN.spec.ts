import { esValidoIban, estaBienFormadoIban, extraerCodigosIban, limpiarIban } from "./comprobar-IBAN";
import { CodigosIBAN } from "./comprobar-IBAN.model";

describe("estaBienFormadoIban", () => {
  it.each([
    ["ES9121000418450200051332", true],
    ["ES66 2100 0418 45 0200051332", true],
    ["ES48-2100-0418-45-0200051332", true],
    ["ESXX21000418450200051332", false],
    ["CX112100041845020005", false],
    ["ES662100 04184502000-51332", false],
  ])("El IBAN %s debería devolver %s", (iban: string, resultado: boolean) => {
    expect(estaBienFormadoIban(iban)).toBe(resultado);
  });
});

describe("limpiarIban", () => {
  it("debería devolver IBAN sin espacion ni guiones", () => {
    //Arrage
    const iban: string = "ES66-2100-0418-45-0200051332";
    //Act
    const resultado = limpiarIban(iban);
    //Assert
    const ibanLimpio = "ES6621000418450200051332";

    expect(resultado).toBe(ibanLimpio);
  });
});

//IBAN sustraido de : https://www.iban.es/ejemplos.html
describe("esValidoIban", () => {
  it.each([
    ["ES66 2100 0418 40 1234567891", true],
    ["ES66-2100-0418-40-1234567891", true],
    ["ES9121000518450200051332", false],
    ["ES91 2100 0518 45 0200051332", false],
  ])("El IBAN %s debería devolver %s", (iban: string, resutado: boolean) => {
    expect(esValidoIban(iban)).toBe(resutado);
  });
});

describe("extraerCodigosIban", () => {
  it("debería devolver error si el regex no encuentra coincidencias en el IBAN", () => {
    //Arrange
    const iban: string = "ESXX21000418450200051332";
    //Act
    const resultado = () => extraerCodigosIban(iban);
    //Assert
    expect(resultado).toThrowError("Fallo al encontrar coincidencias en el regex");
  });

  it("debería devolver los códigos del IBAN", () => {
    //Arrange
    const iban: string = "ES6621000418401234567891";
    //Act
    const resultado = extraerCodigosIban(iban);
    //Assert
    const codigosIban: CodigosIBAN = {
      nombreBanco: "Caixabank",
      codigoOficina: "0418",
      codigoControl: "40",
      numeroCuenta: "1234567891",
    };

    expect(resultado).toEqual(codigosIban);
  });
});

import {
  tieneCaracteresEspeciales,
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./validar-clave-helper";

import { ValidacionClave } from "./model";

//***CLAVES VALIDAS */

// "Abcd123@",
// "Segura_12",
// "P@ssword2022",
// "OtraClave#99",

//***CLAVES INVALIDAS
// "Usuario@2022",      Contiene el nombre de usuario
// "12345678",          No tiene caracteres especiales
// "Pass123",           No cumple con la longitud mínima
// "CommonWord2022",    Contiene una palabra común
// "MiClave123#",       Contiene el nombre de usuario

describe("tienemayusculasYMinusculas", () => {
  it("debería devolver throw error si la entrada es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const resultado = () => tieneMayusculasYMinusculas(clave);

    //Expect
    expect(resultado).toThrowError("La clave no es válida");
  });
  it("debería devolver throw error si la entrada es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const resultado = () => tieneMayusculasYMinusculas(clave);

    //Expect
    expect(resultado).toThrowError("La clave no es válida");
  });
  it("debería devolver throw error si la entrada es vacía", () => {
    //Arrange
    const clave: any = "";

    //Act
    const resultado = () => tieneMayusculasYMinusculas(clave);

    //Expect
    expect(resultado).toThrowError("La clave no es válida");
  });

  it.each([
    ["Abcd123@", { esValida: true }],
    ["P@sswoRd2022", { esValida: true }],
    ["commonword", { esValida: false, error: "La clave debe de tener mayúsculas y minúsculas" }],
    ["miclavebuena", { esValida: false, error: "La clave debe de tener mayúsculas y minúsculas" }],
  ])("Al introducir la clave: %s debería devolver: %s", (clave, resultadoEsperado) => {
    const resultado = tieneMayusculasYMinusculas(clave);
    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("tieneNumeros", () => {
  it("debería devolver throw error si la entrada es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const resultado = () => tieneNumeros(clave);

    //Expect
    expect(resultado).toThrowError("La clave no es válida");
  });
  it("debería devolver throw error si la entrada es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const resultado = () => tieneNumeros(clave);

    //Expect
    expect(resultado).toThrowError("La clave no es válida");
  });
  it("debería devolver throw error si la entrada es vacía", () => {
    //Arrange
    const clave: any = "";

    //Act
    const resultado = () => tieneNumeros(clave);

    //Expect
    expect(resultado).toThrowError("La clave no es válida");
  });

  it.each([
    ["Abcd123@", { esValida: true }],
    ["P@sswoRd2022", { esValida: true }],
    ["commonword", { esValida: false, error: "La clave debe de tener números" }],
    ["miclavebuena", { esValida: false, error: "La clave debe de tener números" }],
  ])("Al introducir la clave: %s debería devolver: %s", (clave, resultadoEsperado) => {
    const resultado = tieneNumeros(clave);
    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("debería devolver throw error si la entrada es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const resultado = () => tieneCaracteresEspeciales(clave);

    //Expect
    expect(resultado).toThrowError("La clave no es válida");
  });
  it("debería devolver throw error si la entrada es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const resultado = () => tieneCaracteresEspeciales(clave);

    //Expect
    expect(resultado).toThrowError("La clave no es válida");
  });
  it("debería devolver throw error si la entrada es vacía", () => {
    //Arrange
    const clave: any = "";

    //Act
    const resultado = () => tieneCaracteresEspeciales(clave);

    //Expect
    expect(resultado).toThrowError("La clave no es válida");
  });

  it.each([
    ["Abcd123@", { esValida: true }],
    ["P@_sswoRd/2022", { esValida: true }],
    ["commonword", { esValida: false, error: "La clave debe de tener caracteres especiales" }],
    ["miclavebuena", { esValida: false, error: "La clave debe de tener caracteres especiales" }],
  ])("Al introducir la clave: %s debería devolver: %s", (clave, resultadoEsperado) => {
    const resultado = tieneCaracteresEspeciales(clave);
    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("tieneLongitudMinima", () => {
  it("debería devolver throw error si la entrada es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const resultado = () => tieneLongitudMinima(clave);

    //Expect
    expect(resultado).toThrowError("La clave no es válida");
  });
  it("debería devolver throw error si la entrada es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const resultado = () => tieneLongitudMinima(clave);

    //Expect
    expect(resultado).toThrowError("La clave no es válida");
  });
  it("debería devolver throw error si la entrada es vacía", () => {
    //Arrange
    const clave: any = "";

    //Act
    const resultado = () => tieneLongitudMinima(clave);

    //Expect
    expect(resultado).toThrowError("La clave no es válida");
  });

  it.each([
    ["Abcd123@", { esValida: true }],
    ["P@sswoRd2022", { esValida: true }],
    [
      "commo",
      { esValida: false, error: "La clave debe de tener una longitud mínima de 8 caracteres" },
    ],
    [
      "mic",
      { esValida: false, error: "La clave debe de tener una longitud mínima de 8 caracteres" },
    ],
  ])("Al introducir la clave: %s debería devolver: %s", (clave, resultadoEsperado) => {
    const resultado = tieneLongitudMinima(clave);
    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("tieneNombreUsuario", () => {
  it.each([
    [undefined, "@123clave", "El nombre de usuario no es válido"],
    [null, "@123clave", "El nombre de usuario no es válido"],
    ["", "@123clave", "El nombre de usuario no es válido"],
  ])(
    "Si el usuario es %s y la clave es %s debería devolver %s",
    (usuario: any, clave: any, resultadoEsperado) => {
      const resultado = () => tieneNombreUsuario(usuario, clave);
      expect(resultado).toThrowError(resultadoEsperado);
    }
  );

  it.each([
    ["Sergio", undefined, "La clave no es válida"],
    ["Maria", null, "La clave no es válida"],
    ["Paulita", "", "La clave no es válida"],
  ])(
    "Si el usuario es %s y la clave es %s debería devolver %s",
    (usuario: any, clave: any, resultadoEsperado) => {
      const resultado = () => tieneNombreUsuario(usuario, clave);
      expect(resultado).toThrowError(resultadoEsperado);
    }
  );

  it.each([
    ["Sergio", "Abcd123@", { esValida: true }],
    ["Paula", "P@sswoRd2022", { esValida: true }],
    [
      "Maria",
      "Maria2023",
      { esValida: false, error: "La clave no debe tener el nombre del usuario" },
    ],
    [
      "Sergio",
      "4580sergio",
      { esValida: false, error: "La clave no debe tener el nombre del usuario" },
    ],
  ])(
    "Al introducir el usuario:%s y la clave: %s debería devolver: %s",
    (nombreUsuario, clave, resultadoEsperado) => {
      const resultado = tieneNombreUsuario(nombreUsuario, clave);
      expect(resultado).toEqual(resultadoEsperado);
    }
  );
});

describe("tienePalabrasComunes", () => {
  it.each([
    [undefined, ["password", "123456", "qwerty"], "La clave no es válida"],
    [null, ["password", "123456", "qwerty"], "La clave no es válida"],
    ["", ["password", "123456", "qwerty"], "La clave no es válida"],
  ])(
    "Si la clave es %s y las palabras comunes son %s debería devolver %s",
    (clave: any, commonPasswords: string[], resultadoEsperado) => {
      const resultado = () => tienePalabrasComunes(clave, commonPasswords);
      expect(resultado).toThrowError(resultadoEsperado);
    }
  );

  it.each([
    ["@jose_12tt", undefined, "Las palabras comunes no son válidas"],
    ["minKus777", null, "Las palabras comunes no son válidas"],
    ["ret2023@tt", [], "Las palabras comunes no son válidas"],
  ])(
    "Si la clave es %s y las palabras comunes son %s debería devolver %s",
    (clave: any, commonPasswords: any, resultadoEsperado) => {
      const resultado = () => tienePalabrasComunes(clave, commonPasswords);
      expect(resultado).toThrowError(resultadoEsperado);
    }
  );

  it("Debería devolver {esValida:true} si la clave no contiene las palabras comunes", () => {
    //Arrange
    const clave: string = "@jose_12tt";
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
      "123123",
      "12345678",
      "abc123",
      "qwerty123",
      "1q2w3e4r",
      "baseball",
      "password123",
      "superman",
      "987654321",
      "mypass",
      "trustno1",
      "hello123",
      "dragon",
      "1234",
      "555555",
      "loveme",
      "hello",
      "hockey",
      "letmein123",
      "welcome123",
      "mustang",
      "shadow",
      "12345",
      "passw0rd",
      "abcdef",
      "123abc",
      "football123",
      "master",
      "jordan23",
      "access",
      "flower",
      "qwertyuiop",
      "admin123",
      "iloveyou123",
      "welcome1",
      "monkey123",
      "sunshine1",
      "password12",
      "1234567890",
    ];

    //Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    //Expect
    const resultadoEsperado: ValidacionClave = { esValida: true };
    expect(resultado).toEqual(resultadoEsperado);
  });

  it(`Debería devolver {esValida:false,error:"La clave no debe de contener palabras comunes"} si la clave contiene alguna palabra comun`, () => {
    //Arrange
    const clave: string = "12345";
    const commonPasswords: string[] = [
      "password",
      "123456",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "monkey",
      "sunshine",
      "password1",
      "123456789",
      "football",
      "iloveyou",
      "1234567",
      "123123",
      "12345678",
      "abc123",
      "qwerty123",
      "1q2w3e4r",
      "baseball",
      "password123",
      "superman",
      "987654321",
      "mypass",
      "trustno1",
      "hello123",
      "dragon",
      "1234",
      "555555",
      "loveme",
      "hello",
      "hockey",
      "letmein123",
      "welcome123",
      "mustang",
      "shadow",
      "12345",
      "passw0rd",
      "abcdef",
      "123abc",
      "football123",
      "master",
      "jordan23",
      "access",
      "flower",
      "qwertyuiop",
      "admin123",
      "iloveyou123",
      "welcome1",
      "monkey123",
      "sunshine1",
      "password12",
      "1234567890",
    ];

    //Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    //Expect
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
    expect(resultado).toEqual(resultadoEsperado);
  });
});

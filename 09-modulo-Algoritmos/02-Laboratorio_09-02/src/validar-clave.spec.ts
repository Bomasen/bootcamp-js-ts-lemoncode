import { ValidacionClave, commonPasswords } from "./model";
import { validarClave } from "./validar-clave";

///***claves válidas */

//"ClaveSegura123!"
//"OtraClaveFuerte#45"
//"M1xDe%Mayusculas"
//"P@ssw0rd"
//"Secret@123"
//"C0nCaracteresEspeciales!"

///***claves inválidas */

//"claveinsegura",     "La clave debe de tener mayúsculas y minúsculas"
//"claveSinNumeros",     "La clave debe de tener números"
//"clave123sinCaracteres",     "La clave debe de tener caracteres especiales"
//"cOrt@1",     "La clave debe de tener una longitud mínima de 8 caracteres"
//"UsuarioPrueba#123",     "La clave no debe tener el nombre del usuario"
//"pasSword5()",     "La clave no debe de contener palabras comunes"

describe("validarClave", () => {
  it.each([
    [
      undefined,
      "claveDePrueba@123",
      ["password", "123456", "qwerty"],
      "El nombre de usuario no es válido",
    ],
    [
      null,
      "claveDePrueba@123",
      ["password", "123456", "qwerty"],
      "El nombre de usuario no es válido",
    ],
    [
      "",
      "claveDePrueba@123",
      ["password", "123456", "qwerty"],
      "El nombre de usuario no es válido",
    ],
  ])(
    "Si el usuario %s y la clave es %s y las palabras comunes son %s debería devolver %s",
    (usuario: any, clave: string, commonPasswords: string[], resultadoEsperado) => {
      const resultado = () => validarClave(usuario, clave, commonPasswords);
      expect(resultado).toThrowError(resultadoEsperado);
    }
  );

  it.each([
    ["UsuarioPrueba", undefined, ["password", "123456", "qwerty"], "La clave no es válida"],
    ["UsuarioPrueba", null, ["password", "123456", "qwerty"], "La clave no es válida"],
    ["UsuarioPrueba", "", ["password", "123456", "qwerty"], "La clave no es válida"],
  ])(
    "Si el usuario %s y la clave es %s y las palabras comunes son %s debería devolver %s",
    (usuario: string, clave: any, commonPasswords: string[], resultadoEsperado) => {
      const resultado = () => validarClave(usuario, clave, commonPasswords);
      expect(resultado).toThrowError(resultadoEsperado);
    }
  );

  it.each([
    ["UsuarioPrueba", "claveDePrueba@123", undefined, "Las palabras comunes no son válidas"],
    ["UsuarioPrueba", "claveDePrueba@123", null, "Las palabras comunes no son válidas"],
    ["UsuarioPrueba", "claveDePrueba@123", [], "Las palabras comunes no son válidas"],
  ])(
    "Si el usuario %s y la clave es %s y las palabras comunes son %s debería devolver %s",
    (usuario: string, clave: string, commonPasswords: any, resultadoEsperado) => {
      const resultado = () => validarClave(usuario, clave, commonPasswords);
      expect(resultado).toThrowError(resultadoEsperado);
    }
  );

  it.each([
    ["UsuarioPrueba", "ClaveSegura123!", commonPasswords, { esValida: true }],
    ["UsuarioPrueba", "OtraClaveFuerte#45", commonPasswords, { esValida: true }],
    ["UsuarioPrueba", "M1xDe%Mayusculas", commonPasswords, { esValida: true }],
    ["UsuarioPrueba", "P@ssw0rd", commonPasswords, { esValida: true }],
    ["UsuarioPrueba", "Secret@123", commonPasswords, { esValida: true }],
    ["UsuarioPrueba", "C0nCaracteresEspeciales!", commonPasswords, { esValida: true }],
    [
      "UsuarioPrueba",
      "claveinsegura",
      commonPasswords,
      { esValida: false, error: "La clave debe de tener mayúsculas y minúsculas" },
    ],
    [
      "UsuarioPrueba",
      "claveSinNumeros",
      commonPasswords,
      { esValida: false, error: "La clave debe de tener números" },
    ],
    [
      "UsuarioPrueba",
      "clave123sinCaracteres",
      commonPasswords,
      { esValida: false, error: "La clave debe de tener caracteres especiales" },
    ],
    [
      "UsuarioPrueba",
      "cOrt@1",
      commonPasswords,
      { esValida: false, error: "La clave debe de tener una longitud mínima de 8 caracteres" },
    ],
    [
      "UsuarioPrueba",
      "UsuarioPrueba#123",
      commonPasswords,
      { esValida: false, error: "La clave no debe tener el nombre del usuario" },
    ],
    [
      "UsuarioPrueba",
      "pasSword5()",
      commonPasswords,
      { esValida: false, error: "La clave no debe de contener palabras comunes" },
    ],
  ])(
    "Si el usuario %s y la clave es %s y las palabras comunes son %s debería devolver %s",
    (
      usuario: string,
      clave: string,
      commonPasswords: string[],
      resultadoEsperado: ValidacionClave
    ) => {
      const resultado = validarClave(usuario, clave, commonPasswords);
      expect(resultado).toEqual(resultadoEsperado);
    }
  );
});

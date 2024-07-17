import { ValidacionClave } from "./model";

const claveEsValida = (clave: string) => {
  if (!clave) {
    throw new Error("La clave no es válida");
  }
};

const nombreUsuarioEsValido = (nombreUsuario: string) => {
  if (!nombreUsuario) {
    throw new Error("El nombre de usuario no es válido");
  }
};

const palabrasComunesSonValidas = (commonPasswords: string[]) => {
  if (!commonPasswords || commonPasswords.length === 0) {
    throw new Error("Las palabras comunes no son válidas");
  }
};

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  claveEsValida(clave);

  const contieneMayusculas = clave !== clave.toLowerCase();
  const contieneMinusculas = clave !== clave.toUpperCase();

  return contieneMayusculas && contieneMinusculas
    ? { esValida: true }
    : { esValida: false, error: "La clave debe de tener mayúsculas y minúsculas" };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  claveEsValida(clave);

  const numeros = "12345690";
  const contieneNumero = [...clave].some((caracter) => numeros.includes(caracter));

  return contieneNumero
    ? { esValida: true }
    : { esValida: false, error: "La clave debe de tener números" };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  claveEsValida(clave);

  const caracteresEspeciales = "!@#$%^&*()_-+=<>?/[]{}|";
  const contieneCaracterEspecial = [...clave].some((caracter) =>
    caracteresEspeciales.includes(caracter)
  );

  return contieneCaracterEspecial
    ? { esValida: true } 
    : { esValida: false, error: "La clave debe de tener caracteres especiales" };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  claveEsValida(clave);

  return clave.length >= 7
    ? { esValida: true }
    : { esValida: false, error: "La clave debe de tener una longitud mínima de 8 caracteres" };
};

export const tieneNombreUsuario = (nombreUsuario: string, clave: string) => {
  nombreUsuarioEsValido(nombreUsuario);
  claveEsValida(clave);

  const contieneUsuario = clave.toLowerCase().includes(nombreUsuario.toLowerCase());
  return !contieneUsuario
    ? { esValida: true }
    : { esValida: false, error: "La clave no debe tener el nombre del usuario" };
};

export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
  claveEsValida(clave);
  palabrasComunesSonValidas(commonPasswords);

  const resultado = commonPasswords.some((password) =>
    clave.toLocaleLowerCase().includes(password.toLocaleLowerCase())
  );

  return !resultado
    ? { esValida: true }
    : { esValida: false, error: "La clave no debe de contener palabras comunes" };
};

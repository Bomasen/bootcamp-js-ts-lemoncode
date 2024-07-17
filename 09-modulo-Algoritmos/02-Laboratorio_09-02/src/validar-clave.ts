import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./validar-clave-helper";

import { ValidacionClave } from "./model";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const validacion1: ValidacionClave = tieneMayusculasYMinusculas(clave);
  const validacion2: ValidacionClave = tieneNumeros(clave);
  const validacion3: ValidacionClave = tieneCaracteresEspeciales(clave);
  const validacion4: ValidacionClave = tieneLongitudMinima(clave);
  const validacion5: ValidacionClave = tieneNombreUsuario(nombreUsuario, clave);
  const validacion6: ValidacionClave = tienePalabrasComunes(clave, commonPasswords);

  const validaciones: ValidacionClave[] = [
    validacion1,
    validacion2,
    validacion3,
    validacion4,
    validacion5,
    validacion6,
  ];

  const validacionTrue: ValidacionClave = { esValida: true };
  const validacionFalse = validaciones.find((validacion) => validacion.esValida === false);

  return validacionFalse ? validacionFalse : validacionTrue;
};

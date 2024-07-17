import { isValidIBAN } from "ibantools";
import { CodigosIBAN, InformacionIBAN, bancos } from "./comprobar-IBAN.model";

export const estaBienFormadoIban = (iban: string): boolean => {
  const regex: RegExp = /^ES\d{2}(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/;

  return regex.test(iban);
};

export const limpiarIban = (iban: string) => {
  const ibanLimpio = iban.replace(/\s|-/gm, "");
  return ibanLimpio;
};

export const esValidoIban = (iban: string): boolean => {
  const ibanLimpio = limpiarIban(iban);
  const esValido = isValidIBAN(ibanLimpio);

  return esValido;
};

export const extraerCodigosIban = (iban: string): CodigosIBAN => {
  const regex: RegExp =
    /^ES*\d{2}(\s|-)?(?<codigoBanco>\d{4})(\s|-)?(?<codigoOficina>\d{4})(\s|-)?(?<digitoControl>\d{2})(\s|-)?(?<numeroCuenta>\d{10})$/;

  const match = regex.exec(iban);

  if (!match) {
    throw new Error("Fallo al encontrar coincidencias en el regex");
  }

  const { codigoBanco, codigoOficina, digitoControl, numeroCuenta } = match.groups as {
    [key: string]: string;
  };

  return {
    nombreBanco: nombreBanco(codigoBanco),
    codigoOficina,
    codigoControl: digitoControl,
    numeroCuenta,
  };
};

const nombreBanco = (codigoBanco: string): string => {
  let nombreBanco = "";

  bancos.forEach((banco) => {
    if (banco.codigo === codigoBanco) {
      nombreBanco = banco.nombre;
    }
  });

  return (nombreBanco === "") ?"(sin informacion)":nombreBanco;
};

const crearParrafo = (texto: string): HTMLDivElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;

  return parrafo;
};

const pintarInfoIban = (infoIban: InformacionIBAN) => {
  const divIbanInfo = document.querySelector("#IBAN-info");

  if (divIbanInfo && divIbanInfo instanceof HTMLDivElement) {
    if (infoIban.ibanBienFormado && infoIban.ibanValido && infoIban.codigosIban) {
      divIbanInfo.innerHTML = "";
      const parrafoIbanBienFormado = crearParrafo("El IBAN está bien formado");
      divIbanInfo.appendChild(parrafoIbanBienFormado);

      const parrafoIbanValido = crearParrafo("El IBAN es válido");
      divIbanInfo.appendChild(parrafoIbanValido);

      const parrafoNombreBanco = crearParrafo(`Banco: ${infoIban.codigosIban.nombreBanco}`);
      divIbanInfo.appendChild(parrafoNombreBanco);

      const parrafoCodigoOficina = crearParrafo(
        `Código sucursal: ${infoIban.codigosIban.codigoOficina}`
      );
      divIbanInfo.appendChild(parrafoCodigoOficina);

      const parrafoCodigoControl = crearParrafo(
        `Código de control: ${infoIban.codigosIban.codigoControl}`
      );
      divIbanInfo.appendChild(parrafoCodigoControl);

      const parrafoNumeroCuenta = crearParrafo(
        `Número de cuenta: ${infoIban.codigosIban.numeroCuenta}`
      );
      divIbanInfo.appendChild(parrafoNumeroCuenta);
      divIbanInfo.style.backgroundColor = "#166716";
    }
    if (!infoIban.ibanBienFormado) {
      divIbanInfo.innerHTML = "";
      const parrafoIbanBienFormado = crearParrafo("El IBAN no está bien formado");
      divIbanInfo.appendChild(parrafoIbanBienFormado);
      divIbanInfo.style.backgroundColor = "red";
    }

    if (!infoIban.ibanValido) {
      divIbanInfo.innerHTML = "";
      const parrafoIbanValido = crearParrafo("El IBAN no es válido");
      divIbanInfo.appendChild(parrafoIbanValido);
      divIbanInfo.style.backgroundColor = "red";
    }

    setTimeout(() => {
      divIbanInfo.innerHTML = "";
    }, 10000);
  } else {
    throw new Error("Error en el elemento div #IBAN-info");
  }
};

const comprobarIBAN = (iban: string): InformacionIBAN => {
  const ibanBienFormado = estaBienFormadoIban(iban);
  const ibanValido = esValidoIban(iban);

  return {
    ibanBienFormado,
    ibanValido,
    codigosIban: ibanBienFormado && ibanValido ? extraerCodigosIban(iban) : undefined,
  };
};

export const handleComprobarIban = (event: Event) => {
  event.preventDefault();
  const ibanIntroducido = document.querySelector("#IBAN-search");

  if (ibanIntroducido && ibanIntroducido instanceof HTMLInputElement) {
    const ibanComprobado = comprobarIBAN(ibanIntroducido.value);
    pintarInfoIban(ibanComprobado);
  } else {
    throw new Error("Error al encontrar elemento IBAN-search");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#IBAN");

  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", handleComprobarIban);
  } else {
    throw new Error("Error al encontrar elemento IBAN");
  }
});

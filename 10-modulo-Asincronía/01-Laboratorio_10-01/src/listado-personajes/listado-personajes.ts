import { obtenerPersonajesFiltrados, obtenerPersonajes } from "./listado-personajes.api";
import { Personajes, URL_API_REST, ValidacionTexto } from "./listado-personajes.model";

const crearImagen = (imagenUrl: string, titulo: string): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = `${URL_API_REST}${imagenUrl}`;
  imagen.alt = titulo;

  return imagen;
};

const crearParrafo = (campo: string, texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.innerHTML = `<strong>${campo}:</strong> ${texto}`;

  return parrafo;
};

const crearDiv = (nombreClase: string): HTMLDivElement => {
  const elementDiv = document.createElement("div");
  elementDiv.classList.add(nombreClase);

  return elementDiv;
};

const crearContenedorPersonaje = (personaje: Personajes): HTMLDivElement => {
  const divPersonaje = crearDiv("div-personaje");
  const divParrafos = crearDiv("div-parrafos");

  const imagen = crearImagen(personaje.imagen, personaje.nombre);
  divPersonaje.appendChild(imagen);

  const parrafoNombre = crearParrafo("Nombre", personaje.nombre);
  divParrafos.appendChild(parrafoNombre);

  const parrafoEspecialidad = crearParrafo("Especialidad", personaje.especialidad);
  divParrafos.appendChild(parrafoEspecialidad);

  const parrafoHabilidades = crearParrafo("Habilidades", personaje.habilidades.toString());
  divParrafos.appendChild(parrafoHabilidades);

  divPersonaje.appendChild(divParrafos);

  return divPersonaje;
};

const pintarListadoPersonajes = async () => {
  const obtenerListadoPersonajes = await obtenerPersonajes();
  const listadoPersonajes = document.querySelector("#listado-personajes");

  if (listadoPersonajes && listadoPersonajes instanceof HTMLDivElement) {
    obtenerListadoPersonajes.forEach((personaje) => {
      const divPersonaje = crearContenedorPersonaje(personaje);
      listadoPersonajes.appendChild(divPersonaje);
    });
  } else {
    throw new Error("No se ha encontrado el elemento #listado-personajes");
  }
};

const pintarPersonajesFiltrados = async (nombre: string) => {
  const personajesFiltrados = await obtenerPersonajesFiltrados(nombre);
  const listadoPersonajes = document.querySelector("#listado-personajes");

  if (listadoPersonajes && listadoPersonajes instanceof HTMLDivElement) {
    if (personajesFiltrados.length > 0) {
      listadoPersonajes.innerHTML = "";

      personajesFiltrados.forEach((personaje) => {
        const divPersonajeFiltrado = crearContenedorPersonaje(personaje);
        listadoPersonajes.appendChild(divPersonajeFiltrado);
      });
    } else {
      errorPersonajeNoEncontrado(listadoPersonajes);
      console.error("Error : personaje no encontrado");
    }
  } else {
    throw new Error("No se ha encontrado el elemento #listado-personajes");
  }
};

const errorPersonajeNoEncontrado = (divListado: HTMLDivElement) => {
  const divError = crearDiv("div-error");
  const parrafoError = crearParrafo("Error", "Personaje No Encontrado");

  divError.appendChild(parrafoError);
  divListado.innerHTML = "";
  divListado.appendChild(divError);

  return divListado;
};

const validacionTextoInput = (): ValidacionTexto => {
  let textoValido: ValidacionTexto = { textoValido: false };
  const textoInput = document.querySelector("#input-filter");
  const numeros = "123456789";
  const caracteresEspeciales = "!@#$%^&*()_-+=<>?/[]{}|";

  if (textoInput && textoInput instanceof HTMLInputElement) {
    const textoIntroducido = textoInput.value;
    const contieneCaracterEspecial = [...textoIntroducido].some((caracter) =>
      caracteresEspeciales.includes(caracter)
    );

    const contieneNumero = [...textoIntroducido].some((caracter) => numeros.includes(caracter));

    contieneCaracterEspecial || contieneNumero
      ? (textoValido = { textoValido: false })
      : (textoValido = { textoValido: true, texto: textoIntroducido });
  } else {
    throw new Error("No se ha encontrado el elemento #input-filter");
  }

  return textoValido;
};

const handleFiltrarPersonaje = (event: Event) => {
  event.preventDefault();
  const textoInput = validacionTextoInput();

  textoInput.textoValido && textoInput.texto !== undefined
    ? pintarPersonajesFiltrados(textoInput.texto)
    : alert(
        "⚠️El texto introducido contiene caracteres inválidos⚠️\n\n____Introduzca el nombre de un personaje___"
      );
};

document.addEventListener("DOMContentLoaded", () => {
  pintarListadoPersonajes();
  const formulario = document.querySelector("#form-filter");

  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", handleFiltrarPersonaje);
  } else {
    throw new Error("No se ha encontrado el elemento #form-filter");
  }
});

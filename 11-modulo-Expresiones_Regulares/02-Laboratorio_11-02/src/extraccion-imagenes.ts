const extraeUrlImg = (text: string): string[] => {
  const regex = /<img\s+(?:[^>]*?\s+)?src="(?<url>[^"]+)"/gm;

  let coincidencias;
  let resultado: string[] = [];

  while ((coincidencias = regex.exec(text)) !== null) {
    const { url } = coincidencias.groups as { [key: string]: string };
    resultado.push(url);
  }

  return resultado;
};

const pintarImagenes = (listadoUrl: string[]): void => {
  const divImgListado = document.querySelector("#img-listado");

  if (divImgListado && divImgListado instanceof HTMLDivElement) {
    if (listadoUrl.length > 0) {
      divImgListado.innerHTML = "";
      listadoUrl.forEach((url) => {
        const divImagen = crearContenedorImg(url);
        divImgListado.appendChild(divImagen);
      });
    } else {
      divImgListado.innerHTML = "";
      const divParrafo = crearParrafo("NO SE HAN ENCONTRADO COINCIDENCIAS PARA MOSTRAR");
      divImgListado.appendChild(divParrafo);
      setTimeout(() => {
        divImgListado.innerHTML = "";
      }, 5000);
    }
  } else {
    throw new Error("Error al encontrar elemento #img-listado");
  }
};

const crearContenedorImg = (url: string): HTMLDivElement => {
  const divImgItem = document.createElement("div");
  divImgItem.classList.add("img-item");

  const img = document.createElement("img");
  img.src = url;
  img.title = url;
  divImgItem.appendChild(img);

  return divImgItem;
};

const crearParrafo = (mensaje: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = mensaje;

  return parrafo;
};

const handleExtraccionImagenes = (evento: Event) => {
  evento.preventDefault();

  const textArea = document.querySelector("#HTML-text");

  if (textArea && textArea instanceof HTMLTextAreaElement) {
    const extraeUrl = extraeUrlImg(textArea.value);
    pintarImagenes(extraeUrl);
  } else {
    throw new Error("Error al encontrar elemento #HTML-text");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#extract-form");

  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", handleExtraccionImagenes);
  } else {
    throw new Error("Error al encontrar elemento #extract-form");
  }
});

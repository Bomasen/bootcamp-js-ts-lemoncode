export interface Personajes {
  id: string;
  nombre: string;
  apodo: string;
  especialidad: string;
  habilidades: string[];
  amigo: string;
  imagen: string;
}


export const URL_API_REST : string = "http://localhost:3000/" 

export interface ValidacionTexto {
  textoValido: boolean;
  texto?: string;
}
import axios from "axios";
import { Personajes, URL_API_REST } from "./listado-personajes.model";

export const obtenerPersonajes = async ():Promise<Personajes[]> => {
  try {
    const { data } = await axios.get(`${URL_API_REST}personajes`);
    return data;
  } catch (error) {
    throw new Error(`Error al obtener listado de personajes en servidor`);
  }
};

export const obtenerPersonajesFiltrados = async (nombre:string) :Promise<Personajes[]> =>{
  try {
    const { data } = await axios.get(`${URL_API_REST}personajes?nombre_like=${nombre}`);
    return data;
  } catch (error) {
    throw new Error(`Error al obtener listado de personajes en servidor`);
  }
};


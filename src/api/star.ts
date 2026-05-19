import { FilmT, PersonajeT } from "@/app/types/swapi";
import api from "@/api/api";

export const getPersonajes = async () => {
    const data = await api.get<PersonajeT[]>("people"); 
    return data.data; 
}

export const getFilms = async () => {
    const data = await api.get<FilmT[]>("films"); 
    return data.data; 
}

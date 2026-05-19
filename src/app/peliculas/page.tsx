"use client"; 

import "./style.css"; 
import api from "@/api/api"; 
import { getFilms } from "@/api/star"; 
import { FilmT } from "../types/swapi";
import { useEffect, useState } from "react";
import PeliculaChulangana from "../components/PeliculasChulanganas";

const FilmPage = () => {
    const [ resultFilm, setResultFilm ] = useState<FilmT[] | null> (null); 
    const [ loading, setLoading ] = useState(false); 

    const fetchFilm = () => {
        try{
            api.get('/films').then((e) => {
                const {data}: {data: FilmT[]} = e; 
                setResultFilm(data); 
            }).finally(() => {
                setLoading(false); 
            })
        }
        catch(e){
            alert(String(e)); 
        }
    }

    useEffect(() => {
        getFilms().then(setResultFilm)
    }, []); 

    if(loading){
        <h1> Cargando... </h1>
    }

    return (
        <div className="CotainerPelicula">
            {resultFilm && resultFilm.map((e) => (
                <PeliculaChulangana key = {e.url} pelicula={e}/>
            ))}
        </div>
    )
}

export default FilmPage; 
import "./style.css"; 
import { FilmT } from "@/app/types/swapi";
import { useRouter } from "next/navigation";
import { useState } from "react"; 

const PeliculaChulangana = ({pelicula}: {pelicula: FilmT}) => {
    const router = useRouter(); 
    
    return (
        <div className="ContainerPelicula">
            <div className="InfoContainer"> 
                <h1>Nombre: {pelicula.title}</h1>
                <p>Director: {pelicula.director}</p>
                <p>Productor: {pelicula.producer}</p>
            </div>
        </div>
    )
}

export default PeliculaChulangana;  
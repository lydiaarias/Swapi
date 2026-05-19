import { useRouter } from "next/navigation";
import "./style.css"; 
import { PersonajeT } from "@/app/types/swapi";
import { useState } from "react"; 

const people = ({personaje}: {personaje: PersonajeT}) => {
    const router = useRouter(); 
    
    return (
        <div className="ContainerPersonaje">
            <div className="InfoContainer">
                <h1>Nombre: {personaje.name}</h1>
                <p>Genero: {personaje.gender}</p>
                <p>Año de nacimiento: {personaje.birth_year}</p>
                <p>Color de piel: {personaje.skin_color}</p>
            
            </div>
        </div>
    )
}

export default people; 
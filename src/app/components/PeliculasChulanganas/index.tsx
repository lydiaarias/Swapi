import "./style.css"; 
import { FilmT } from "@/app/types/swapi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"; 

const PeliculaChulangana = ({pelicula}: {pelicula: FilmT}) => {
    const router = useRouter(); 
    
    // Estados para almacenar los personajes y el estado de carga
    const [personajes, setPersonajes] = useState<string[]>([]);
    const [cargandoPersonajes, setCargandoPersonajes] = useState(true);

    // useEffect para traer los personajes automáticamente al cargar la película
    useEffect(() => {
        const cargarPersonajes = async () => {
            try {
                // Mapeamos las URLs a promesas fetch
                const promesas = pelicula.characters.map(url => 
                    fetch(url)
                        .then(res => {
                            if (!res.ok) throw new Error("Error al traer personaje");
                            return res.json();
                        })
                        .then(data => data.name)
                );

                // Esperamos todas en paralelo
                const nombres = await Promise.all(promesas);
                setPersonajes(nombres);
            } catch (error) {
                console.error("Error cargando personajes:", error);
            } finally {
                setCargandoPersonajes(false);
            }
        };

        cargarPersonajes();
    }, [pelicula.characters]);
    
    return (
        <div className="ContainerPelicula">
            <div className="InfoContainer"> 
                <h1>Nombre: {pelicula.title}</h1>
                <p>Director: {pelicula.director}</p>
                <p>Productor: {pelicula.producer}</p>

                <p className="TextoPersonajes">
                    <strong>Personajes: </strong>
                    {cargandoPersonajes ? (
                        <span className="CargandoTexto">Cargando personajes...</span>
                    ) : (
                        <span>{personajes.join("; ")}</span>
                    )}
                </p>
            </div>
        </div>
    )
}

export default PeliculaChulangana;  
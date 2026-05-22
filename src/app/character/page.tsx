"use client"

import "./style.css"; 
import api from "@/api/api"; 
import { PersonajeT } from "../types/swapi";
import Personajechulangano from "../components/PersonajeChulangano"; 
import { useEffect, useState } from "react";
import people from "../components/PersonajeChulangano";
import { getPersonajes } from "@/api/star";

const CharacterPage = () => {
    const [resultCharacter, setResulCharacter] = useState<PersonajeT[] | null>(null); 
    const [loading, setLoading] = useState(true); 
    
    
    const fetchCharacter = () => {
        try{
            api.get(`/people`).then((e) => {
                const {data}: {data: PersonajeT[]} = e; 
                setResulCharacter(data); 
            }).finally(() => {
                setLoading(false); 
            })
        }
        catch(e) {
            alert(String(e)); 
        }
    }

    useEffect(()=> {
        getPersonajes().then(setResulCharacter)
      },[])

    if(loading){
        <h1>Cargando...</h1>
    }

    return (
        <div className="CharacterContainer">
            {resultCharacter && resultCharacter.map((e) => (
                <Personajechulangano key = {e.url} personaje={e}
            />))}
        </div>
    )
}

export default CharacterPage; 
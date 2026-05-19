"use client"; 

import { useRouter } from "next/navigation";

const NavBar = () => {
    const router = useRouter(); 

    return (
        <div className="NavBar">
            <button onClick={()=>router.push("/")}>Casa</button>
            <button onClick={()=>router.push("/character")}>Personajes</button>
            <button onClick={()=>router.push("/peliculas")}>Peliculas</button>
        </div>
    )
}

export default NavBar; 
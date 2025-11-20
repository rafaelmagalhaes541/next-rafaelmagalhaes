'use client'

import tecnologias from "@/app/data/tecnologias.json";
import { useParams } from "next/navigation";

export default function TecnologiaPage() {
    const params = useParams();
    const id = Number(params.tecnologia)

    return(
        <>
            <h2>{tecnologias[id].title}</h2>
            <p>{tecnologias[id].description}</p>
        </>
    )
}
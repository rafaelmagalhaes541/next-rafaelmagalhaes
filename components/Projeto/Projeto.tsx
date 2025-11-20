import Link from "next/link"

interface ProjetoProps {
    nome: string
    url: string
}

export default function Projeto({nome, url}: ProjetoProps) {
    return (
        <article className="bg-yellow-500 p-2 m-2 rounded-xl">
            <h2>{nome}</h2>
            <p>Explore o projeto abaixo: </p>
            <Link href={url} className="underline">link</Link>
        </article>
    )
}
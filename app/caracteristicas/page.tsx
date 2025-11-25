import Caracteristica from "@/components/Caracteristica/Caracteristica";

export default function page() {
    const caracteristicas = [
        'JSX, sintaxe que mistura HTML e JS.',
        'Componentes, funções que retornam JSX.',
        'Componentes Reutilizáveis e Modulares.',
        'Roteamento Automático e APIs.',
        'Hooks: useState, useEffect e useSWR.',
        'Renderização Rápida e SEO Friendly.',
        'TypeScript Seguro e Escalável.',
        'Comunidade Ativa e Popularidade.'
    ]

    return(
        <>
            <h2>Caracteristicas do Mourinho: </h2>
            <ul className="ml-6 mt-4 bg-black-500">
                {caracteristicas.map((caracteristica, i) => {
                    return <li key={i}>- {caracteristica}</li>
                })}
            </ul>
        </>
    )
}
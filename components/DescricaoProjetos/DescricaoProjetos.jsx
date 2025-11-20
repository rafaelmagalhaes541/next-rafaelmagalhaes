import Link from "next/link"

export default function DescricaoProjetos() {
    return(
        <div className="">
            <p className="mt-3">Aqui podem conhecer alguns dos meus projetos:</p>
            <Link href="https://rafaelmagalhaes541.github.io" className="p-1 m-2 mt-4 bg-blue-400 rounded-xl" target="_blank">O meu site</Link>
        </div>
    )
}
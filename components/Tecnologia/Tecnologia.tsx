interface TecnologiaProps {
    titulo: string
}

export default function Tecnologia({titulo}: TecnologiaProps) {
    return(
        <div>
            <h2>{titulo}</h2>
        </div>
    )
}
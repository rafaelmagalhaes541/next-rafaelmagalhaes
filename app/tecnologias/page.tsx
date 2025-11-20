import data from "@/app/data/tecnologias.json"
import Tecnologia from "@/components/Tecnologia/Tecnologia";
import Link from "next/link";

export default function tecnologias() {
    return(
        <div className="items-center">
            {data.map((element, index) => (
                <Link href={"/tecnologias/${index}"}>
                    <Tecnologia key={index} titulo={element.title} />
                </Link>
            ))}
        </div>
    )
}
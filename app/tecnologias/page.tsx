import data from "@/app/data/tecnologias.json"
import Tecnologia from "@/components/Tecnologia/Tecnologia";
import Link from "next/link";

export default function tecnologias() {
    return(
        <div className="m-4">
            {data.map((element, index) => (
                <Link href={"/tecnologias/${index}"}>
                    <div className="bg-blue-500 p-4 rounded-lg mb-3">
                        <Tecnologia key={index} titulo={element.title}/>
                    </div>
                </Link>
            ))}
        </div>
    )
}
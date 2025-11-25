import Link from "next/link";

interface CaracteristicaProps {
  caracteristica: string;
}

export default function Caracteristica({ caracteristica }: CaracteristicaProps) {
  return (
    <div className="p-2 border rounded">
      <Link href={`/caracteristicas/${caracteristica}`}>
        {caracteristica}
      </Link>
    </div>
  );
}

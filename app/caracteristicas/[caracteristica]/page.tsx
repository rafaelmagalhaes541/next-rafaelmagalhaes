import Link from "next/link";

export default function CaracteristicaPage({ params }: { params: { caracteristica: string } }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-xl">{params.caracteristica}</h1>

      <Link href="/caracteristicas">
        <button className="border p-2 rounded">Voltar</button>
      </Link>
    </div>
  );
}

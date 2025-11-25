interface Props {
  descricao: string;
}

export default function TecnologiaDetailsCard({ descricao }: Props) {
  return (
    <div className="bg-black text-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
      <p className="text-gray-200 text-lg leading-relaxed">{descricao}</p>
    </div>
  );
}

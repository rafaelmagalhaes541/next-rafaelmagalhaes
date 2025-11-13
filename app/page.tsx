import Componente1 from '@/components/Componente1/Componente1'


export default function page() {

  const mourinho = <p>Mourinho é Pai</p>
  const frase = "Mourinho é Vida"


  return(
    <div>
      <h2>VIVA O JOSE MOURINHO</h2>
      <p>O mourinho é Rei</p>
      {mourinho}
      <p><strong>{frase}</strong></p>
      <Componente1 />
      <Componente1 />
      <Componente1 />
    </div>
  )
}
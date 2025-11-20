import DescricaoProjetos from '@/components/DescricaoProjetos/DescricaoProjetos'
import Projeto from '@/components/Projeto/Projeto'

export default function ProjetosPage() {
    return(
        <>
            <h2 className='text-center'>Projetos</h2>
            <p className='text-center'>Nesta secção podem encontrar vários projetos desenvolvidos por mim</p>
            <DescricaoProjetos/>
            <Projeto nome='Bruh' url='https://rafaelmagalhaes541.github.io'/>
        </>
    )
}
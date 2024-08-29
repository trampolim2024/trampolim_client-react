import React from 'react'
import Accordion from './Accordion'

const FAQ = () => {
    return (
        <section className='h-screen mt-[15%]'>

            <div className='flex justify-center gap-10'>


                <div className='flex flex-col'>
                    <div className='border-b-4 border-orange-400 w-fit'>
                        <h1 className='text-5xl text-blue font-semibold py-2'>FAQ - Perguntas frequentes</h1>
                    </div>

                    <Accordion title="Quem pode submeter ideias no programa Trampolim?" content="Resposta para a pergunta 1." />
                    <Accordion title="Como submeto minha ideia?" content="Resposta para a pergunta 2." />
                    <Accordion title="Quantas ideias serão contempladas e qual o valor em dinheiro que será oferecido?" content="Resposta para a pergunta 3." />

                    <Accordion title="Posso submeter mais de uma ideia?" content="Resposta para a pergunta 3." />
                    <Accordion title="Preciso ter uma empresa para participar?" content="Resposta para a pergunta 3." />
                    <Accordion title="Como as ideias serão avaliadas?" content="Resposta para a pergunta 3." />
                </div>


                <div className='w-[40%] flex flex-col  gap-10'>
                    <div className='border-b-4 border-orange-400 w-fit'>
                        <h1 className='text-5xl text-blue font-semibold py-2'>Fale conosco!</h1>
                    </div>

                    <p>Aqui você entra em contato com a equipe do Programa Trampolim da sua cidade para dúvidas e solicitações. Lembre-se de selecionar a categoria do assunto e estado de vínculo de forma correta.</p>


                    <button className='orange-button'>Entrar em contato</button>
                </div>

            </div>

        </section>
    )
}

export default FAQ
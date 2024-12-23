import React from 'react'
import { FaFileAlt} from 'react-icons/fa'
import EspacoColinas  from "/logos/espacocolinas-logo.png"   
import SebraePe from "/logos/sebraepe-logo.png"  
import SeteColinas from "/logos/setecolinas-logo.png"             
import Softex from "/logos/softex-logo.png"
import Upe from "/logos/upe-logo.png"  

const Partners = () => {
    return (
        <section className='h-auto flex flex-col gap-10 mb-20'>


            <div className='w-full flex items-center justify-around'>
                <div className='background-purple w-[40%] h-[10vh] p-4 flex items-center shadow-lg rounded-md '>
                    <span className='text-white uppercase text-3xl'>Política de privacidade</span>
                </div>

                <p className='text-base w-[40%]'>
                    A fim de viabilizar a realização das atividades de operação e
                    execução do Programa Trampolim, dados pessoais podem ser eventualmente coletados, armazenados e tratados.
                    Para mais informações, acesse nossa Política de Privacidade, Transparência e Uso de Dados por meio do botão lateral.
                </p>

                <button className='background-purple p-3 rounded-2xl outline-none border-none w-[100px] h-[10vh] flex items-center justify-center'>
                    <FaFileAlt className='text-white' size={30}/>
                </button>
            </div>



            <h1 className='ml-[5%] text-4xl text-blue uppercase font-bold'>Parcerias</h1>

            <div className='flex items-center w-full justify-around'>
                <div className='w-[300px] h-[300px] rounded-full background-white border-2 border-[#F79B4B] flex items-center justify-center'>
                    <img src={EspacoColinas} alt="" />  
                </div>  

                <div className='w-[300px] h-[300px] rounded-full background-white border-2 border-[#F79B4B] flex items-center justify-center'>
                    <img src={SebraePe} alt="" />
                </div>

                <div className='w-[300px] h-[300px] rounded-full background-white border-2 border-[#F79B4B] flex items-center justify-center'>
                    <img src={SeteColinas} alt="" />
                </div>

                <div className='w-[300px] h-[300px] rounded-full background-white border-2 border-[#F79B4B] flex items-center justify-center'>
                    <img src={Softex} alt="" />
                </div>

                <div className='w-[300px] h-[300px] rounded-full background-white border-2 border-[#F79B4B] flex items-center justify-center'>
                    <img src={Upe} alt="" className="w-[200px]"  />
                </div>
            </div>
        </section>
    )
}

export default Partners
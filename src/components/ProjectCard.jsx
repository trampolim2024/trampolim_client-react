import React from 'react'
import { FaLightbulb } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProjectCard = () => {
    return (
        <Link to="/detalhes-projeto">
            <div className='flex items-center gap-7 bg-white rounded-lg shadow-xl p-5'>

                <FaLightbulb className='text-orange text-8xl' />

                <div className='flex flex-col gap-2'>
                    <p className='text-blue font-semibold flex items-center gap-2'>Nome do projeto:
                        <span className='text-orange font-normal'>Inclusive Pet</span>
                    </p>
                    <p className='text-blue font-semibold flex items-center gap-2'>Líder do projeto:
                        <span className='text-orange font-normal'>Lucas Cordeiro</span>
                    </p>
                    <p className='text-blue font-semibold flex items-center gap-2'>Estágio:
                        <span className='text-orange font-normal'>MVP</span>
                    </p>
                </div>

            </div>
        </Link>

    )
}

export default ProjectCard
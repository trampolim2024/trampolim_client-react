import React from 'react'
import { FaMedal, FaLightbulb, FaHandsHelping, FaCertificate } from 'react-icons/fa'

const EnterprisingBenefits = () => {
    return (
        <section className='h-screen flex items-center justify-center mt-20 mb-20 flex-col gap-10'>
            <h1 className='text-4xl text-blue uppercase font-semibold'>Benefícios em ser empreendedor</h1>
            <div className='flex w-full justify-around mt-20'>

                <div className='flex flex-col items-center w-[350px] gap-4'>
                    <FaMedal size={80} className='text-orange mb-2' />
                    <h3 className='text-blue text-xl font-semibold text-center'>Selo Empreendedor</h3>
                    <p className='text-base text-center'>
                        Et amet adipisicing culpa eiusmod proident sint id elit cillum sunt. Aute Lorem amet nisi esse dolor dolor proident laboris. Laborum officia non ipsum consectetur cupidatat sint proident. Tempor Lorem officia non sunt voluptate reprehenderit amet consequat ea adipisicing dolore ut ex consectetur. Esse amet consectetur irure culpa eiusmod elit et irure dolore.
                    </p>
                </div>

                <div className='flex flex-col items-center w-[350px] gap-4'>
                    <FaLightbulb size={80} className='text-orange mb-2' />
                    <h3 className='text-blue text-xl font-semibold text-center'>Occaecat duis Lorem laborum.</h3>
                    <p className='text-base text-center'>
                        Et amet adipisicing culpa eiusmod proident sint id elit cillum sunt. Aute Lorem amet nisi esse dolor dolor proident laboris. Laborum officia non ipsum consectetur cupidatat sint proident. Tempor Lorem officia non sunt voluptate reprehenderit amet consequat ea adipisicing dolore ut ex consectetur. Esse amet consectetur irure culpa eiusmod elit et irure dolore.
                    </p>
                </div>

                <div className='flex flex-col items-center w-[350px] gap-4'>
                    <FaHandsHelping size={80} className='text-orange mb-2' />
                    <h3 className='text-blue text-xl font-semibold text-center'>Occaecat duis Lorem laborum.</h3>
                    <p className='text-base text-center'>
                        Et amet adipisicing culpa eiusmod proident sint id elit cillum sunt. Aute Lorem amet nisi esse dolor dolor proident laboris. Laborum officia non ipsum consectetur cupidatat sint proident. Tempor Lorem officia non sunt voluptate reprehenderit amet consequat ea adipisicing dolore ut ex consectetur. Esse amet consectetur irure culpa eiusmod elit et irure dolore.
                    </p>                </div>

                <div className='flex flex-col items-center w-[350px] gap-4'>
                    <FaCertificate size={80} className='text-orange mb-2' />
                    <h3 className='text-blue text-xl font-semibold text-center'>Occaecat duis Lorem laborum.</h3>
                    <p className='text-base text-center'>
                        Et amet adipisicing culpa eiusmod proident sint id elit cillum sunt. Aute Lorem amet nisi esse dolor dolor proident laboris. Laborum officia non ipsum consectetur cupidatat sint proident. Tempor Lorem officia non sunt voluptate reprehenderit amet consequat ea adipisicing dolore ut ex consectetur. Esse amet consectetur irure culpa eiusmod elit et irure dolore.
                    </p>                </div>

            </div>
        </section>
    )
}

export default EnterprisingBenefits
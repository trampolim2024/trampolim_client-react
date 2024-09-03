import React from 'react'
import YouTube from 'react-youtube';
import Dashboard from './Dashboard';

const About = () => {
    const videoId = 'dQw4w9WgXcQ'; // ID do vídeo do YouTube
    return (
        <section className='h-auto flex flex-col items-center justify-center' >

            <div className='flex items-center justify-around'>
                <div className='flex flex-col w-[40%] gap-4'>
                    <div className='border-b-4 border-orange-400 w-fit'>
                        <h1 className='text-5xl text-blue font-semibold py-2'>Sobre</h1>
                    </div>
                    <p className='text-xl text-black'>
                        export default AboutNulla quis ad Lorem cupidatat non in anim in fugiat irure.
                        Ullamco fugiat Lorem ullamco nisi dolor officia.
                    </p>
                </div>


                <div className='bg-[#F5F5F5]/85 w-[800px] h-[550px] rounded-3xl shadow-lg flex items-center justify-center'>
                    <YouTube videoId={videoId} opts={{ width: '700px', height: '450px' }} />
                </div>
            </div>

            <Dashboard />

        </section>
    )
}

export default About

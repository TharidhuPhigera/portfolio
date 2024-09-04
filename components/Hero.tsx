import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />  {/* Lime Green */}
        <Spotlight className='top-10 left-full h-[80vh] w-[50vh]' fill='#3CB371' />  {/* Medium Sea Green */}
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='#228B22' />  {/* Forest Green */}
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue- max-w-80'>
                    7azyDevZ
                </h2>
                <TextGenerateEffect 
                className='text-center text-[40px] md:text-5xl lg:text-6xl'
                words='Welcome! I’m Tharidhu'
                />
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>A Software Developer based in Milan, Italy</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
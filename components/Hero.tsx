import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className=' flex flex-col py-10 pb-32  lg:py-20 px-8 ' >
      <div className='hero-map'/>

      {/* LEFT */}

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 '>
        <Image src="/camp.svg" alt='camp' width={50} height={50} className='absolute  top-[-50px] w-10 lg:w-[50px]' />
        
        <h1 className="font-bold text-5xl">Travel: the best way to be lost and found at the same time.</h1>
        <p className="mt-6 text-gray-500 xl:max-w-[520px]">Traveling is not just about discovering new places; it's about discovering yourself amidst the beauty of the world.".</p>

        <div className='my-11 flex flex-wrap gap-5'>
          <div className='flex items-center gap-2'>
            {Array(5).fill(1).map((_, index) => (
             <Image src="/star.png " key={index} alt='star' width={24} height={24}/>
           ))}
          </div>

          <p className='font-bold lg:font-extrabold text-blue-950 '>198k <span className='ml-1 underline'>Excellent Reviews</span></p>
        </div>

        <div className='flex flex-col w-full gap-3 sm:flex-row'>
          <Button
            type='button'
            title='Download App'
            variant = "btn_green"
          />
          <Button
            type='button'
            title='How we work?'
            icon='/play.png'
            variant = "btn_white_text"
          />
        </div>

        {/* location */}
        <div className='relative py-9 mx-auto flex flex-1 items-start lg:absolute lg:top-44 lg:right-32  '>
          <div className='relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-950 px-7 py-8 '>
            <div className='flex flex-col'>
              <div className="flex justify-between">
                <p className='text-gray-500 font-bold'>Location</p>
                <p className='text-gray-500 font-bold'>X</p>

              </div>
            </div>

            <div className='flex flex-col'>
              <p className='font-bold text-white'>Ibadan Nigeria.</p>
              <div className="flex justify-between">
                <p className='text-gray-500 font-bold'>Distance</p>
                <p className='text-gray-500 font-bold'>Elevation</p>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className="flex justify-between">
                <p className='text-white font-bold'>179.39mi</p>
                <p className='text-white font-bold'>2.040km</p>
              </div>
            </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
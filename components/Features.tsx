import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'
type FeatureItem = {
  title: String;
  icon: string;
  variant: String;
  description:String
}

const Features = () => {
  return (
    <section className=' flex flex-col overflow-hidden bg-center bg-no-repeat py-24 flexCenter'>
      <div className='flex max-container padding-container relative w-full justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image src="/phone.png" width={1040} height={1000} alt='phone' className='w-full h-full object-cover'/>
        </div>

        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image
              src="/camp.svg"
              width={50}
              height={50}
              alt='FeaturesCamp'
              className='absolute left-[-55px] -top-10  w-10 lg:w-[50px]'
            />
             <h2 className='font-bold lg:font-extrabold text-5xl'>Our Features</h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:m-20 lg:gap-20'>
            {FEATURES.map((feature) => (
              <FeatureItems
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                variant={feature.variant}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}


const FeatureItems = ({ title, icon, variant, description }: FeatureItem) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='rounded-full  bg-green-500  '>
        <Image src={icon} alt='feature icon' width={68} height={78} className='rounded-full'/>
      </div>
      <h2 className='mt-5 capitalize text-3xl font-semibold'>{title}</h2>
      <p className='regular-16 mt-5 bg-white/80 text-gray-500 lg:mt-[30px] lg:bg-none'>{ description}</p>
    </li>
  );
};

export default Features
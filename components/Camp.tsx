import { PEOPLE_URL } from '@/constants'
import Image from 'next/image'
import React from 'react'
interface CampProps {
  backgroundImage?: String,
  title?: String,
  subtitle?: String,
  peopleJoined?: String
}
const CampSite = ({backgroundImage, title, subtitle, peopleJoined} :CampProps) => {
  return (
    <div className={`h-full w-1/2 min-w-[700px] bg-cover bg-no-repeat lg:rounded-3xl 2xl:rounded-2xl ${backgroundImage}`}>
      <div className='flex h-full flex-col items-start justify-start  p-6 lg:px-20 lg:py-10 text-white'>
        <div className='flex gap-4'>
          <div className='rounded-fullp-4'>✈️
          </div>

          <div className='flex flex-col gap-1 font-bold'>
            <h4>{ title}</h4>
            <p>{subtitle}</p>
          </div>
        </div>

        <div className='flex gap-6 '>
          <span className='flex -space-x-4 overflow-hidden'>
            {PEOPLE_URL.map((url) => (
                <Image width={35} height={42} alt='campImg' src={url} key={url} className='rounded-full object-cover inline-block h-10 w-10' />

            ))}
          </span>
          <p className='font-bold'>{peopleJoined}</p>
        </div>
      </div>

    </div >
  )
}
const Camp = () => {
  return (
    <section className='] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 ml-10'>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="campBkgImg"
          title="Journey Through Time"
          subtitle="From Ancient Ruins to Modern Marvels"
          peopleJoined = "50+ joined"
        />
        <CampSite
          backgroundImage="campBkgImg2"
          title="Through the wilderness and deseart"
          subtitle="From Ancient Means of Survial"
          peopleJoined = "50+ joined"
        />
        
      </div>

      <div className='flex mt-10 px-6  lg:mr-7'>
        <div className='bg-green-500 p-8 lg:max-w-[734px] xl:rounded-3xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='capitalize text-white'><strong>Feeling lost</strong> and not knowing the way?</h2>
          <p className='text-white'> Create comprehensive guides for popular travel destinations, including information about attractions, accommodations, local cuisine, transportation options, and tips for travelers..</p>
        </div>
      </div>
    </section>
  )
}

export default Camp
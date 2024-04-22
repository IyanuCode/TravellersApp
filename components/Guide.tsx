import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flex flex-col container mx-auto">
      <div className=" container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase -mt-1 mb-3 text-green-500 ">
          WE ARE HERE FOR YOU{" "}
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="font-semibold lg:font-extrabold xl:max-w-[390px] text-3xl lg:text-5xl">
            Guide You To Easy Path
          </h2>
          <p className="text-gray-500 xl:max-w-[520px]">
            At its core, traveling is about embracing the unknown, stepping out
            of comfort zones, and immersing oneself in the richness of the
            world. It is about embarking on a journey of self-discovery, where
            every path taken leads to new perspectives and insights. Whether
            wandering through ancient ruins, trekking across rugged mountains,
            or strolling along bustling city streets, each moment spent on the
            road is an opportunity to expand the horizons of the mind and soul.
          </p>
        </div>
      </div>

      <div className="flex relative  w-full h-80">
        <Image
          src="/boat.jpg"
          alt="boat"
          width={500}
          height={500}
          className="w-full max object-cover lg:rounded-3xl  "
        />

        <div className="absolute rounded-lg flex bg-white py-8 pl-5 pr-7 h-full" >
          <Image src="/meter.png" alt="meter" width={50} height={50} />
          <div className="flex flex-col justify-between">
            <div className="flex w-full flex-col">
              <div className="flex justify-between w-full">
                <p className="text-gray-500">Destination</p>
                <p className="font-bold text-green-500">48 min</p>
              </div>
              <p className="font-bold mt-20">Travellin itself is living</p>
            </div>
            <div className="flex w-full flex-col ">
              <p className="text-gray-500">Start Track</p>
              <p className="font-bold mt-2 whitespace-nowrap">offshore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide
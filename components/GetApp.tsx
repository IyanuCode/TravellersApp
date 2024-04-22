import React from 'react'
import Button from './Button'
import Image from 'next/image';

const GetApp = () => {
  return (
    <section className="flex w-full flex-col pb-[100px] ">
      <div className="get-app p-10  mx-20 rounded-lg flex lg:flex-row flex-col">
        <div className="z-20 flex flex-1 flex-col items-start justify-center gap-12 text-gray-300 ">
          <h2 className="font-bold lg:font-extrabold xl:max-w-[320px] text-5xl">
            Get for free now!
          </h2>
          <p>Available on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap lg:flex-row">
            <Button
              type="button"
              title="Apple Store"
              icon="/apple.svg"
              variant="btn-white2"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/playStore.png"
              variant="btn-white2"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phone.png" width={850} height={550} alt="Phone" />
        </div>
      </div>
    </section>
  );
}

export default GetApp
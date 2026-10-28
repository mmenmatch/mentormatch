'use client'
import UnlockImage from '../../../../public/assets/Images/unlock.webp'
import Image from 'next/image'
export const Unlock = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-8 px-4  lg:py-16 py-8">
      <div className="bg-[#2A51FF] max-w-200 mx-auto px-8  rounded-4xl flex flex-col   lg:flex-row ">
        <div className="w-full lg:w-[55%] text-white py-8 flex flex-col lg:items-start justify-center items-center gap-4">
          {' '}
          <h1 className="lg:text-[2.2rem] text-[7vw] m-0 text-center lg:text-left">
            Unlock Your Child’s Full Potential
          </h1>
          <p className="text-center lg:text-left text-[0.9rem]">
            Join 4000+ Families on Their Learning Journey
          </p>
          <div className="">
            <button
              type="submit"
              onClick={() => {
                document.getElementById('cta')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }}
              className="w-full md:min-w-50 min-w-50 md:text-[1rem] text-[0.8rem] md:py-3 md:px-4 py-2 px-2 bg-[#FFF116] text-black border-2 border-black rounded-xl font-semibold shadow-[4px_4px_0px_black] active:shadow-[2px_2px_0px_black] active:translate-y-0.75
            "
            >
              Book A Free Trial
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex flex-1  lg:pt-8 items-end">
          <Image src={UnlockImage} alt="Unlock" className="w-full" />
        </div>
      </div>
    </div>
  )
}

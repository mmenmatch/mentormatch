'use client'
import UnlockImage from '../../../../public/assets/Images/unlock.webp'
import Image from 'next/image'
export const Unlock = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-8 lg:py-16 ">
      <div className="bg-[#2A51FF] max-w-200 mx-auto px-8  rounded-4xl flex ">
        <div className="w-[55%] text-white py-8 flex flex-col items-start justify-center gap-2">
          {' '}
          <h1>Unlock Your Child’s Full Potential</h1>
          <p>Join 4000+ Families on Their Learning Journey</p>
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
        <div className="w-[50%] flex flex-1 pt-8 items-end">
          <Image src={UnlockImage} alt="Unlock" className="w-full" />
        </div>
      </div>
    </div>
  )
}

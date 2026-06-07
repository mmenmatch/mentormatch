import React from 'react'

export const Footer = () => {
  return (
    <div className="py-8 px-4 bg-[#1E293E]">
      <div className={`max-w-360 mx-auto`}>
        <div className="md:mb-16 mb-8">
          <h2 className="text-center md:text-[2.5rem] text-[5vw] font-bold m-0  text-white">
            See Exactly Where The Grade is Being Lost In{' '}
            <span className="ml-2 bg-[#FFF116] text-black text-[5vw] px-2 m-0 leading-[100%] m-0 rounded-[4px]">
              The First Session
            </span>
          </h2>
        </div>
        <div className="md:w-[60%] mx-auto bg-[linear-gradient(180deg,_#006CFF_0%,_#014AAF_100%)] py-8 rounded-4xl flex flex-col justify-center items-center gap-4">
          {' '}
          <div className="md:text-[1.2rem] text-[4vw]">
            <p className="text-white m-0  text-center leading-[120%] w-[290px] mx-auto">
              Book a Free Demo Class with a Curriculum Trained Tutor. You Sit in. You Decide.
            </p>
          </div>
          <div className="max-w-[50%]">
            <button
              type="submit"
              className="w-full md:min-w-62.5 min-w-40 md:text-[1rem] text-[0.95rem] py-3 px-4 bg-[#FFF116] text-black border-2 border-black rounded-full font-semibold shadow-[4px_4px_0px_black] active:shadow-[2px_2px_0px_black] active:translate-y-0.75
            "
            >
              Book A Free Trial
            </button>{' '}
          </div>
        </div>
        <div className="mt-8">
          <p className="m-0 md:text-[1rem] text-[3.5vw] text-center text-white ">
            © 2025 Mentor Match. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

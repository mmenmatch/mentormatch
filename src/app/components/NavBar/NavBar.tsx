'use client';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/navigation'


const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const router = useRouter()

  return (
    <div className="w-full xl:px-16 px-4 py-4 flex items-center  border-b border-b-[#e1e1e1] min-h-20">
      <div className="w-full mx-auto flex items-center xl:px-8">
        <div className="max-w-360 w-full mx-auto flex flex-row items-center justify-between">
          <div className="md:max-w-50 max-w-40 cursor-pointer">
            <img
              src="https://cdn.prod.website-files.com/660d0c07422cfeca80d26d7d/6626114f2c2dbd34ed07beb4_Text%20logo_website%20blue2.webp"
              alt="mentor match logo"
              loading="lazy"
              onClick={() => router.push('https://www.mentormatch.com/')}
            />
          </div>
          <div className="">
            <button
              type="submit"
              onClick={() => {
                document.getElementById('cta')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }}
              className="w-full md:min-w-62.5 min-w-40 md:text-[1rem] text-[0.95rem] py-3 px-4 bg-[#FFF116] text-black border-2 border-black rounded-full font-semibold shadow-[4px_4px_0px_black] active:shadow-[2px_2px_0px_black] active:translate-y-0.75
            "
            >
              Book A Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default NavBar;

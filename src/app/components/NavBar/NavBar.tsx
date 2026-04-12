'use client';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <div className="w-full xl:px-8 px-4 py-4 flex items-center  border-b border-b-[#e1e1e1] ">
      <div className="max-w-360 w-full flex items-center xl:px-8">
        <div className="max-w-50">
          <img
            src="https://cdn.prod.website-files.com/660d0c07422cfeca80d26d7d/6626114f2c2dbd34ed07beb4_Text%20logo_website%20blue2.webp"
            alt="mentor match logo"
          />
        </div>
        {!isMobile && (
          <div className="flex items-center gap-8 justify-between xl:text-[1rem] sm:text-[0.5rem] px-8 w-full">
            <div className="menu-items flex items-center">
              <ul className="list-none  gap-8  items-center mb-0 text-[#838d95] font-bold py-4  flex">
                <li>Our Tutors</li>
                <li>How it works</li>
                <li>Pricing</li>
                <li>Blogs</li>
                <li>Programs</li>
              </ul>
            </div>
            <div className="flex gap-4 xl:text-[1rem]  items-center">
              <button className="px-6 py-3 border-2 border-[#d0d5dd] rounded-4xl font-extrabold">
                Login
              </button>
              <button className="px-6 py-3 border-2 border-black rounded-4xl font-extrabold bg-[#fff116]">
                Book A Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

'use client';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <div className="w-full xl:px-16 px-4 py-4 flex items-center  border-b border-b-[#e1e1e1] min-h-20">
      <div className="max-w-360 w-full mx-auto flex items-center xl:px-8">
        <div className="max-w-50">
          <img
            src="https://cdn.prod.website-files.com/660d0c07422cfeca80d26d7d/6626114f2c2dbd34ed07beb4_Text%20logo_website%20blue2.webp"
            alt="mentor match logo"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
};

export default NavBar;

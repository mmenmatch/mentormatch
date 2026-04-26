import React from 'react';
import { Container } from '../Container/Container';
import Script from 'next/script'



const GoogleReview = () => {
  return (
    <div className="mx-4 my-8 google-reviews flex flex-col justify-center items-center gap-8">
      <h2 className="text-black xl:text-5xl font-extrabold  text-2xl leading-[120%] xl:text-left text-center">
        Here's What Parents Are Saying
      </h2>
      {/* <script src="https://elfsightcdn.com/platform.js" async></script> */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
        async
      />
      <div
        className="elfsight-app-b538d4d6-d0b3-4edd-861b-f734181f3e2a"
        data-elfsight-app-lazy
      ></div>
    </div>
  )
};

export default GoogleReview;

import React from 'react';
import { Container } from '../Container/Container';

const GoogleReview = () => {
  return (
    <Container>
      <div className="google-reviews flex flex-col justify-center items-center gap-8">
        <h2 className="text-black text-5xl font-extrabold">
          Here's What Parents Are Saying
        </h2>
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div
          className="elfsight-app-b538d4d6-d0b3-4edd-861b-f734181f3e2a"
          data-elfsight-app-lazy
        ></div>
      </div>
    </Container>
  );
};

export default GoogleReview;

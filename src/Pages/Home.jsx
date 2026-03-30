import React from 'react';
import Hero from '../Components/Homepage/Hero';
import WhatWeDo from '../Components/Homepage/WhatWeDo';
import OurServices from '../Components/Homepage/OurServices';
import AnimatedText from '../Components/Homepage/AnimatedText';
import Marketing from '../Components/Homepage/Marketing';
import Reviews from '../Components/Homepage/Reviews';
import SuccessStories from '../Components/Homepage/SuccessStories';
import TrustedService from '../Components/Homepage/TrustedService';

function Home() {
  return (
    <>
      <div className="mt-[8vw]">
        <Hero />
        <AnimatedText />
        <WhatWeDo />
        <TrustedService/>
        <OurServices />
        <Marketing />
        <SuccessStories/>
        <Reviews/>
      </div>
    </>
  );
}

export default Home;

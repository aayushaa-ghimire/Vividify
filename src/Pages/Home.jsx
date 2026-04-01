import React from 'react';
import Hero from '../Components/Homepage/Hero';
import WhatWeDo from '../Components/Homepage/WhatWeDo';
import OurServices from '../Components/Homepage/OurServices';
import AnimatedText from '../Components/Homepage/AnimatedText';
import Marketing from '../Components/Homepage/Marketing';
import Reviews from '../Components/Homepage/Reviews';
import SuccessStories from '../Components/Homepage/SuccessStories';
import TrustedService from '../Components/Homepage/TrustedService';
import HomeBanner from '../Components/Homepage/HomeBanner';
import HomeBanner2 from '../Components/Homepage/HomeBanner2';

function Home() {
  return (
    <>
      <div>
        <Hero />
        <AnimatedText />
        <WhatWeDo />
        <TrustedService />
        <HomeBanner />
        <Marketing />
        <OurServices />
        <HomeBanner2 />
        <SuccessStories />
        <Reviews />
      </div>
    </>
  );
}

export default Home;

import React from 'react';
import AboutUs from '../Components/AboutPage/AboutUs';
import GuidingPrinciples from '../Components/AboutPage/GuidingPrinciples';
import ITSupport from '../Components/AboutPage/ITSupport';
import Countup from '../Components/AboutPage/Countup';
import OurTeam from '../Components/AboutPage/OurTeam';
import WhyChooseUs from '../Components/AboutPage/WhyChooseUs';
import Reviews from '../Components/AboutPage/Reviews';

function About() {
  return (
    <>
      <AboutUs />
      <ITSupport />
      <GuidingPrinciples />
      <Countup/>
      <OurTeam/>
      <WhyChooseUs/>
      <Reviews/>
    </>
  );
}

export default About;

import React from 'react';
import AboutUs from '../Components/AboutPage/AboutUs';
import GuidingPrinciples from '../Components/AboutPage/GuidingPrinciples';
import ITSupport from '../Components/AboutPage/ITSupport';
import Countup from '../Components/AboutPage/Countup';
import OurTeam from '../Components/AboutPage/OurTeam';

function About() {
  return (
    <>
      <AboutUs />
      <ITSupport />
      <GuidingPrinciples />
      <Countup/>
      <OurTeam/>
    </>
  );
}

export default About;

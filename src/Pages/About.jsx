import React from 'react';
import AboutUs from '../Components/AboutPage/AboutUs';
import GuidingPrinciples from '../Components/AboutPage/GuidingPrinciples';
import ITSupport from '../Components/AboutPage/ITSupport';
import Countup from '../Components/AboutPage/Countup';

function About() {
  return (
    <>
      <AboutUs />
      <ITSupport />
      <Countup/>
      <GuidingPrinciples />
    </>
  );
}

export default About;

import React from 'react';
import OurServices from '../Components/ServicesPage/OurServices';
import AllServices from '../Components/ServicesPage/AllServices';
import ServiceFeatures from '../Components/ServicesPage/ServiceFeatures';
import ServicesCards from '../Components/ServicesPage/ServicesCards';
function Service() {
  return (
    <>
      <AllServices />
      <ServiceFeatures />
      <ServicesCards />
    </>
  );
}

export default Service;

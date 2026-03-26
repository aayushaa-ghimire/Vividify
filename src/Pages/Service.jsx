import React from 'react';
import OurServices from '../Components/ServicesPage/OurServices';
// import ServiceBanner from '../Components/ServicesPage/ServiceBanner';
import AllServices from '../Components/ServicesPage/AllServices';
import Quality from '../Components/ServicesPage/Quality';
function Service() {
  return (
    <>
      <OurServices />
      <AllServices />
      <Quality />
      {/* <ServiceBanner /> */}
    </>
  );
}

export default Service;

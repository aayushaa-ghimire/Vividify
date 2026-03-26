import React from 'react';
import FAQBanner from '../Components/FAQPage/FAQBanner';
import Dropdown from '../Components/FAQPage/Dropdown';
import ServiceBanner from '../Components/ServicesPage/ServiceBanner';
import HowWeDeliver from '../Components/FAQPage/HowWeDeliver';

function FAQ() {
  return (
    <>
      <FAQBanner />
      <Dropdown />
      <HowWeDeliver />
      <ServiceBanner />
    </>
  );
}

export default FAQ;

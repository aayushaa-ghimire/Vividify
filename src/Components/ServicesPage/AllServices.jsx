import React, { useState } from 'react';
import AllServicesCard from './AllServicesCard';

function AllServices() {
  const [open, setOpen] = useState(null);

  const handleToggle = (name) => {
    setOpen(open === name ? null : name);
  };

  return (
    <div className="flex flex-col gap-[8vw] bg-white px-[5vw] py-[10vw] lg:px-[10vw]">
      {/*Heading*/}
      <div className="mb-6 flex w-[100%] justify-center">
        <h1 className="rounded-3xl border-b-4 border-[#0c5adb] px-[1vw] pb-[0.8vw] text-[2.5rem] font-medium lg:text-[3rem]">
          Our Services
        </h1>
      </div>

      <div className="flex lg:flex-row">
        <AllServicesCard
          number="01"
          title="Web Development"
          shortDesc="Transform your online presence with high-performance, custom-built websites."
          longDesc="Our expert team focuses on delivering responsive, user-friendly sites that engage and convert visitors effectively. We use modern frameworks to ensure your site is fast, secure, and optimized for all devices."
          image="../../public/service1.jpg"
          isOpen={open === 'web'}
          onToggle={() => handleToggle('web')}
        />
      </div>

      <div className="flex lg:flex-row-reverse">
        <AllServicesCard
          number="02"
          title="Software Development"
          shortDesc="Unlock your business potential with tailored solutions that drive innovation."
          longDesc="We deliver tailored software solutions that enhance efficiency and drive innovation across all platforms. Our software is built to scale with your business and automate complex manual tasks."
          image="../../public/service2.jpg"
          isOpen={open === 'soft'}
          onToggle={() => handleToggle('soft')}
        />
      </div>

      <div className="flex lg:flex-row">
        <AllServicesCard
          number="03"
          title="App Development"
          shortDesc="Create impactful mobile experiences that connect with your customers anywhere."
          longDesc="Our app development services focus on designing user-friendly applications for iOS and Android. We create impactful mobile experiences that boost user engagement and business growth."
          image="../../public/service3.jpg"
          isOpen={open === 'app'}
          onToggle={() => handleToggle('app')}
        />
      </div>

      <div className="flex lg:flex-row-reverse">
        <AllServicesCard
          number="04"
          title="Digital Marketing"
          shortDesc="Elevate your brand with strategic campaigns and enhanced online visibility."
          longDesc="Utilize strategic campaigns to enhance online visibility and drive conversions. We focus on data-driven marketing to reach your target audience effectively across multiple digital channels."
          image="../../public/service4.jpg"
          isOpen={open === 'marketing'}
          onToggle={() => handleToggle('marketing')}
        />
      </div>

      <div className="flex lg:flex-row">
        <AllServicesCard
          number="05"
          title="IT Consulting"
          shortDesc="Optimize your technology investments with expert guidance and performance audits."
          longDesc="We offer expert guidance to streamline processes and enhance performance. Our consultants audit your current systems to ensure your technology stack supports your business success."
          image="../../public/service5.jpg"
          isOpen={open === 'consulting'}
          onToggle={() => handleToggle('consulting')}
        />
      </div>

      <div className="flex lg:flex-row-reverse">
        <AllServicesCard
          number="06"
          title="SEO"
          shortDesc="Improve search rankings and attract organic traffic with targeted strategies."
          longDesc="Employ targeted strategies to boost search rankings and attract organic traffic. Our SEO services focus on keyword optimization and link building to enhance user engagement."
          image="../../public/service6.jpg"
          isOpen={open === 'seo'}
          onToggle={() => handleToggle('seo')}
        />
      </div>

      <div className="flex lg:flex-row">
        <AllServicesCard
          number="07"
          title="Data Management"
          shortDesc="Maximize the value of your data to drive informed business decisions."
          longDesc="Ensure accuracy, security, and accessibility of your business data. We help you organize and analyze data to drive informed decisions and uncover new growth opportunities."
          image="../../public/service7.jpg"
          isOpen={open === 'data'}
          onToggle={() => handleToggle('data')}
        />
      </div>

      <div className="flex lg:flex-row-reverse">
        <AllServicesCard
          number="08"
          title="Social Media Management"
          shortDesc="Engage audiences and drive conversions through strategic social campaigns."
          longDesc="Elevate your brand with our social media services. We utilize strategic campaigns to enhance visibility, engage with your audience, and drive conversions across all social platforms."
          image="../../public/service8.jpg"
          isOpen={open === 'social'}
          onToggle={() => handleToggle('social')}
        />
      </div>
    </div>
  );
}

export default AllServices;

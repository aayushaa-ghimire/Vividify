import React, { useState } from 'react';
import AllServicesCard from './AllServicesCard';

function AllServices() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <div className="bg-white px-[5vw] py-20 lg:px-[10vw]">
      <div className="mb-16 text-center">
        <h1 className="text-[#111]px-[2vw] inline-block rounded-full border-b-4 border-[#0c5adb] px-[1.5vw] pb-[1vw] text-4xl font-bold">
          Our Services
        </h1>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2">
        <AllServicesCard
          number="01"
          title="Web Development"
          image="../../public/service1.jpg"
          isOpen={open === 'web'}
          onToggle={() => toggle('web')}
          shortDesc="High-performance, custom-built websites."
          longDesc="Our expert team focuses on delivering responsive, user-friendly sites that engage and convert visitors effectively."
        />
        <AllServicesCard
          number="02"
          title="Software Development"
          image="../../public/service2.jpg"
          isOpen={open === 'soft'}
          onToggle={() => toggle('soft')}
          shortDesc="Tailored solutions that drive innovation."
          longDesc="We deliver tailored software solutions that enhance efficiency and drive innovation across all platforms."
        />
        <AllServicesCard
          number="03"
          title="App Development"
          image="../../public/service3.jpg"
          isOpen={open === 'app'}
          onToggle={() => toggle('app')}
          shortDesc="Impactful mobile experiences for iOS and Android."
          longDesc="Our app development services focus on designing user-friendly applications that boost user engagement."
        />
        <AllServicesCard
          number="04"
          title="Digital Marketing"
          image="../../public/service4.jpg"
          isOpen={open === 'marketing'}
          onToggle={() => toggle('marketing')}
          shortDesc="Strategic campaigns for online visibility."
          longDesc="Utilize strategic campaigns to enhance online visibility and drive conversions through data-driven marketing."
        />
        <AllServicesCard
          number="05"
          title="IT Consulting"
          image="../../public/service5.jpg"
          isOpen={open === 'consult'}
          onToggle={() => toggle('consult')}
          shortDesc="Optimize technology with expert guidance."
          longDesc="We offer expert guidance to streamline processes and enhance performance through system audits."
        />
        <AllServicesCard
          number="06"
          title="SEO"
          image="../../public/service6.jpg"
          isOpen={open === 'seo'}
          onToggle={() => toggle('seo')}
          shortDesc="Improve search rankings and organic traffic."
          longDesc="Employ targeted strategies to boost search rankings and attract organic traffic through keyword optimization."
        />
        <AllServicesCard
          number="07"
          title="Data Management"
          image="../../public/service7.jpg"
          isOpen={open === 'data'}
          onToggle={() => toggle('data')}
          shortDesc="Maximize value from your business data."
          longDesc="Ensure accuracy, security, and accessibility of your data to drive informed business decisions."
        />
        <AllServicesCard
          number="08"
          title="Social Media"
          image="../../public/service8.jpg"
          isOpen={open === 'social'}
          onToggle={() => toggle('social')}
          shortDesc="Engage audiences through strategic campaigns."
          longDesc="Elevate your brand with strategic campaigns to enhance visibility and engagement across platforms."
        />
      </div>
    </div>
  );
}

export default AllServices;

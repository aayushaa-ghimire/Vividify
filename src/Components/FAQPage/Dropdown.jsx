import React, { useState } from 'react';

const Dropdown = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'Frequently Asked Questions',
      answer:
        "Have questions about our services? Explore our FAQs for quick answers on project timelines, technologies, support options, and more. We're here to help you every step of the way!",
    },
    {
      question: 'What services do you offer?',
      answer:
        'At Vividify, we offer a wide range of IT solutions, including custom software development, web and mobile app development, IT consulting, and digital transformation strategies tailored to your business needs.',
    },
    {
      question: 'How long does a project typically take?',
      answer:
        'The project timeline varies depending on its scope and complexity. For smaller projects, it can take a few weeks, while more complex projects may require several months. We work closely with our clients to establish clear timelines and ensure timely delivery.',
    },
    {
      question: 'How do you ensure quality in your software?',
      answer:
        'We follow a rigorous development process that includes regular code reviews, automated testing, and continuous integration practices. Our team adheres to industry best practices and uses cutting-edge tools to ensure the highest quality standards in every project.',
    },
    {
      question: 'Can you help with ongoing support and maintenance?',
      answer:
        'Yes, Vividify offers comprehensive post-launch support and maintenance services. We provide ongoing monitoring, updates, and enhancements to ensure your software continues to perform optimally and adapts to changing business requirements.',
    },
    {
      question: 'What is your pricing model?',
      answer:
        'Our pricing model is flexible and tailored to each client’s project needs. We offer both fixed-price contracts for defined projects and time-and-materials contracts for ongoing or evolving projects. Contact us for a detailed quote based on your specific requirements.',
    },
    {
      question: 'What technologies do you use?',
      answer:
        'At Vividify, we work with a wide array of modern technologies, including but not limited to JavaScript (React, Node.js), PHP (Laravel), Python, Ruby on Rails, cloud platforms (AWS, Azure), and databases like MySQL, PostgreSQL, and MongoDB. We select the best technology stack based on the unique needs of each project.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div>
        <div className="bg-gray-50 py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl leading-tight font-bold text-black sm:text-4xl lg:text-5xl">
                Explore Common <br />{' '}
                <span className="text-[#0c5adb]">Questions</span>
              </h2>
            </div>

            <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer overflow-hidden rounded-3xl border border-b-4 border-gray-200 bg-white shadow-lg transition-all duration-200 hover:bg-gray-50"
                  onClick={() => toggleAccordion(index)}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                  >
                    <div className="flex items-center text-left">
                      {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3 flex-shrink-0  text-amber-300 opacity-70"
                  >
                    <polyline points="9 10 4 15 9 20"></polyline>
                    <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                  </svg> */}
                      <span className="text-lg font-semibold text-black transition-all hover:text-[#0c5adb]">
                        {item.question}
                      </span>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`h-6 w-6 flex-shrink-0 font-bold text-[#0c5adb] transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      openIndex === index
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="rounded-b-3xl border-b-5 border-l-[0.1rem] border-[#0c5adb] px-4 pb-5 sm:px-6 sm:pb-6">
                      <p className="ml-8 text-gray-600">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-9 text-center text-base text-gray-600">
              Still have questions?{' '}
              <span className="cursor-pointer font-medium text-blue-600 transition-all duration-200 hover:underline">
                Contact our support
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;

import React from 'react';

function OurApproach() {
  return (
    <>
      <div className="mt-[10vw] flex justify-center gap-[3vw]">
        <div className="flex flex-col">
          <div>
            <h1 className="text-[2rem] leading-tight font-bold lg:text-[2.4rem]">
              Our Approach
            </h1>
          </div>
          <div className="flex flex-col">
            <div>
              <p className="w-full leading-relaxed text-[#686868] lg:w-[50vw] lg:leading-loose">
                We believe good technology is not just about features—it’s about
                how it feels to use.
              </p>
            </div>
            <div>
              <p className="w-full leading-relaxed text-[#686868] lg:w-[50vw] lg:leading-loose">
                Clean and intuitive design
              </p>
              <p className="w-full leading-relaxed text-[#686868] lg:w-[50vw] lg:leading-loose">
                Strong and scalable foundations
              </p>
              <p className="w-full leading-relaxed text-[#686868] lg:w-[50vw] lg:leading-loose">
                Thoughtful problem-solving
              </p>
              <p className="w-full leading-relaxed text-[#686868] lg:w-[50vw] lg:leading-loose">
                Attention to small details that improve the overall experience
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            src="../../public/About-2.jpg"
            alt="img"
            className="aspect-square w-[30vw] object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default OurApproach;

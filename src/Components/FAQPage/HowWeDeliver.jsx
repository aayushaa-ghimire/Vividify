import React from 'react';

function HowWeDeliver() {
  return (
    <div className="flex flex-col">
      <div>
        <h1>How We Deliver</h1>
      </div>

      <div className="flex">
        <div className="flex flex-col">
          <div>{/* icon */}</div>

          <div className="flex flex-col">
            <h4>Strategy</h4>
            <p>
              We start by understanding your business objectives, technical
              needs, and long-term vision. Our team works closely with you to
              define a clear roadmap and ensure every requirement is aligned for
              success.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div>{/* icon */}</div>

          <div className="flex flex-col">
            <h4>Execution</h4>
            <p>
              Our experts design and develop scalable, secure, and
              high-performance solutions using modern technologies. We follow
              industry best practices and maintain transparent communication
              throughout the process.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div>{/* icon */}</div>

          <div className="flex flex-col">
            <h4>Support</h4>
            <p>
              After deployment, we provide continuous support, monitoring, and
              updates. Our goal is to ensure your system runs smoothly and
              evolves with your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeDeliver;

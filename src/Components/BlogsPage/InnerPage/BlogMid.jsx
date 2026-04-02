import React from 'react';

function BlogMid() {
  return (
    <>
      <div className="flex">
        {/* left side */}
        <div className="flex flex-col">
          <div>
            <img
              src="https://himalayan-mountaineering.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdnjujfujw%2Fimage%2Fupload%2Fv1774779593%2Fnamas-adventure%2Fvvfb5kwxn7cg0rpgvijc.jpg&w=1920&q=75"
              alt=""
            />
          </div>

          <div>
            <p>
              Nepal is the heart of global mountaineering, home to the world’s
              most iconic peaks, including Mount Everest. For climbers and
              adventure seekers, Nepal offers unmatched opportunities, from
              beginner-friendly trekking peaks to challenging high-altitude
              expeditions. If you’re planning a Himalayan adventure, this guide
              covers everything you need to know about mountaineering in Nepal,
              including routes, costs, seasons, and expert tips.
            </p>
          </div>
          <div>
            <h3>Why Choose Nepal for Mountaineering?</h3>
          </div>
          <p>
            Nepal stands as a global hotspot for mountaineering for several
            reasons:
          </p>
          <p>{/*Bullet Points*/}</p>
          <p>
            Popular climbing regions include Khumbu and Annapurna, both offering
            breathtaking scenery and diverse climbing experiences.
          </p>
        </div>

        {/* Right Side */}

        <div>{/* sidebar */}</div>
      </div>
    </>
  );
}

export default BlogMid;

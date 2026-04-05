import React from 'react';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import BlogSidebar from './BlogSidebar';
import HomeBanner from '../../Homepage/HomeBanner';

function MountaineeringPost() {
  return (
    <div className="max-w-[1200px]  mx-auto p-10">
      <BlogHeader />

      <div className=" flex flex-col md:flex-row md:gap-[4vw] lg:gap-20 lg:mt-10 lg:flex-row">
        <div className="w-2/3">
          <BlogContent />
        </div>

        <div className="w-1/3">
          <BlogSidebar />
        </div>
      </div>
      <div className="mt-[5vw]">
        <HomeBanner />
      </div>
    </div>
  );
}

export default MountaineeringPost;

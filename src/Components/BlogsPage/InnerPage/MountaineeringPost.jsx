import React from 'react';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import BlogSidebar from './BlogSidebar';

function MountaineeringPost() {
  return (
    <div className="max-w-[1200px] mx-auto p-10">
      <BlogHeader />

      <div className="flex gap-20 mt-10">
        <div className="w-2/3">
          <BlogContent />
        </div>

        <div className="w-1/3">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}

export default MountaineeringPost;

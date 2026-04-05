import React from 'react';
import ProjectHero from '../Components/ProjectPage/ProjectHero';
import AllProjects from '../Components/ProjectPage/AllProjects';
import HomeBanner from '../Components/Homepage/HomeBanner';

function Projects() {
  return (
    <>
      <div>
        <div>
          <ProjectHero />
        </div>

        <div>
          <AllProjects />
        </div>

        <div className="mb-[4vw]">
          <HomeBanner />
        </div>
      </div>
    </>
  );
}

export default Projects;

import React from "react";

import SliderSlick from "../slider/SliderSlick";
import CardFullStackBackend from "../Card/CardFullStackBackend";
// import CardFrontend from "../Card/CardFrontend.js";

import { projectsAPI } from "../../helpers/projectsAPI";
import CollageGrid from "../collage/CollageGrid";

const Projects = () => {
  return (
    <div className="mt-10 w-full px-5 sm:w-5/6 md:w-10/12 m-auto index-bg" id="projects">
      <div className="px-5  w-full md:w-4/6 my-5">
        <p className="text-color text-3xl sm:text-5xl mb-4">Projects</p>
        <p className="text-white text-sm sm:text-xl">
          I have done several projects in both backend and frontend, however,
          today I consider myself a backend developer in the area of
          microservices, for more information I have put a link to the direct
          repository of my projects.
        </p>
      </div>

      <div className="text-white  flex items-center justify-center ">
        <div className="container mx-auto p-4">     
          {/* <CardFrontend /> */}

          <p className="text-color text-xl sm:text-3xl mb-4 my-10">Complete Proyects</p>
          <SliderSlick data={projectsAPI} speed={1000}  autoplay={6000}/>
          <p className="text-color text-3xl mb-4 my-10">Frontend Projects</p>
          <CollageGrid />
        </div>
      </div>
    </div>
  );
};

export default Projects;

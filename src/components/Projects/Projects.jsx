import React from "react";
import projects from "../../helpers/projects";
import { projectsFullstack, projectsAPI, projectsMVC } from "../../helpers/projectsAPI";
import Card from "../Card/Card";
import SliderSlick from "../slider/SliderSlick";

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

          <p className="text-color text-xl sm:text-3xl mb-4 my-10">Projects FullStack</p>

          <div className="hidden sm:grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
            {projectsFullstack.map((project, index) => (
              <Card project={project} key={index} />
            ))}
          </div>

          <div className=" block sm:hidden">
            <SliderSlick data={projectsFullstack} speed={600} autoplay={3000}/>
          </div>

          <p className="text-color text-xl sm:text-3xl mb-4 my-10">Projects Backend</p>
          <SliderSlick data={projectsAPI} speed={600}  autoplay={4000}/>
          <p className="text-color text-3xl mb-4 my-10">Projects Frontend</p>
          <SliderSlick data={projects} speed={600} autoplay={5000}/>
        </div>
      </div>
    </div>
  );
};

export default Projects;

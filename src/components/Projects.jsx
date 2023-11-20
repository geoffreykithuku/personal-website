import React from "react";

import data from "../data/projects"
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="w-full my-[100px] projects mx-auto " id="projects">
      <h1 className="text-[36px] font-bold text-[#2f2e41] flex flex-col w-full mx-auto items-center md:items-start mt-10 md:mt-0">
        Check Out <br />
        <span className="text-[#CE5A67]">My Work</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center my-10">
        {data.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;

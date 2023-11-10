import React from "react";

import data from "../data/projects"
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="w-full my-[100px] projects mx-auto ">
      <h1 className="text-[45px] font-bold text-[#2c3333]">
        Check Out <br />
        <span className="text-[#ff2e63]">My Work</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center my-10">
        
          {data.map((project) => {
            return (
              
                <ProjectCard project={project} key={project.id}/>
              
         ) })}
      
      </div>
    </div>
  );
};

export default Projects;

import React from "react";

const ProjectCard = ({ project }) => {
  const { image, title, description, liveProject, sourceCode } = project;

  return (
    <div
      className="rounded-[20px] w-full max-w-[350px]  border mx-auto card hover:translate-y-[-8px] duration-300 bg-white bg-opacity-80 text-[#2f2e41]"
      style={{
        boxShadow: "2px 2px 20px 4px rgba(0, 0, 0, 0.20)",
      }}
    >
      <div className=" max-h-[150px] h-full overflow-hidden border-b">
        <img src={image} alt={title} className="w-full rounded-[20px]" />
      </div>

      <div className="flex flex-col mt-2 p-5 gap-4">
        <h2 className=" font-medium">{title}</h2>
        <p className="text-base">{description}</p>
        <div className="flex justify-between items-center  flex-wrap gap-5">
          <span className="flex-shrink-0 mx-auto hover:text-[#FCF5ED] border hover:bg-[#CE5A67] px-3 py-1 rounded-[10px] border-[#CE5A67]">
            <a href={liveProject} target="_blank" rel="noreferrer">
              Live Project
            </a>
          </span>
          <span className="hover:text-[#FCF5ED] border border-[#CE5A67] flex-shrink-0 mx-auto hover:bg-[#CE5A67] px-3 py-1 rounded-[10px]">
            <a href={sourceCode} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

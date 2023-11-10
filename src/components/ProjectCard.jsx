import React from "react";

const ProjectCard = ({ project }) => {
  const { id, image, title, description, liveProject, sourceCode } = project;

  return (
    <div
      className="rounded-[20px] w-full max-w-[350px]  border mx-auto card"
      style={{
        boxShadow: "2px 2px 20px 4px rgba(0, 0, 0, 0.20)",
      }}
    >
      <div className=" max-h-[150px] h-full overflow-hidden">
        <img src={image} alt={title} className="w-full rounded-[20px]" />
      </div>

      <div className="flex flex-col mt-4 p-5 gap-4">
        <h2 className="text-[28px] font-medium">{title}</h2>
        <p>{description}</p>
        <div className="flex justify-between items-center text-white font-semibold">
          <span className="flex-shrink-0 bg-opacity-60 bg-[#ff2e63] px-3 py-2 rounded-[10px]">
            <a href={liveProject} target="_blank" rel="noreferrer">
              Live Project
            </a>
          </span>
          <span className="flex-shrink-0 bg-opacity-60 bg-[#ff2e63] px-3 py-2 rounded-[10px]">
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

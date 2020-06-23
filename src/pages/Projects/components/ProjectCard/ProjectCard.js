import React from "react";
import "./ProjectCard.css";
import ProjectConnection from "../ProjectConnection/ProjectConnection";

const ProjectCard = ({ project }) => {
  return (
    <div class="w-full md:w-1/2 xl:w-1/3 pl-2 pr-2 mb-4 md:mb-6">
      <img
        src="/profil.jpeg"
        className="h-48 w-full object-cover rounded-t"
        alt="Cover"
      />
      <div class="h-48 border-r border-b border-l border-gray-700 bg-gray-700 rounded-b p-4 flex flex-col justify-between leading-normal">
        <div class="text-white font-bold text-xl mb-2">{project.title}</div>
        <p class="flex-1 text-gray-100 text-base">{project.description}</p>
        <div className="flex flex-row justify-end mt-4">
          {project.connections.map((connection, index) => {
            return (
              <ProjectConnection projectConnection={connection} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

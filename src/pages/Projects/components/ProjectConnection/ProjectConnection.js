import React from "react";

const ProjectConnection = ({ projectConnection }) => {
  return (
    <a href={projectConnection.link} target="_blank" rel="noopener noreferrer">
      <img
        title={projectConnection.name}
        alt={projectConnection.name}
        src={projectConnection.icon}
        className="w-6 h-6 mx-4"
        data-src={projectConnection.icon}
      />
    </a>
  );
};

export default ProjectConnection;

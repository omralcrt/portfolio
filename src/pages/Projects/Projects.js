import React from "react";
import "./Projects.css";
import ProjectCard from "./components/ProjectCard/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Saha",
      description:
        "Saha is a trivia competition platform that allows a massive number of people to show their knowledge about football.",
      imageUrl: "",
      connections: [
        {
          name: "Android",
          icon:
            "https://firebasestorage.googleapis.com/v0/b/omralcorutportfolio.appspot.com/o/logos%2Fandroid.png?alt=media&token=d93add94-7b92-4a2a-914a-a9b4a1a75cd1",
          link: "https://play.google.com/store/apps/details?id=com.gercek.saha",
        },
      ],
    },
    {
      title: "Saha",
      description:
        "Saha is a trivia competition platform.",
      imageUrl: "",
      connections: [
        {
          name: "Android",
          icon:
            "https://firebasestorage.googleapis.com/v0/b/omralcorutportfolio.appspot.com/o/logos%2Fandroid.png?alt=media&token=d93add94-7b92-4a2a-914a-a9b4a1a75cd1",
          link: "https://play.google.com/store/apps/details?id=com.gercek.saha",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-1 items-center">
      <div className="flex flex-wrap w-full justify-center p-8">
        {projects.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;

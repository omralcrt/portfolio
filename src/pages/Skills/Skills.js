import React, { useState, useEffect } from "react";
import "./Skills.css";
import SkillSection from "./components/SkillSection/SkillSection";

const Skills = () => {
  const [skillData, setSkillData] = useState([]);

  useEffect(() => {
    const ac = new AbortController();
    fetch("https://omralcorutportfolio.firebaseio.com/skills.json", {
      signal: ac.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        setSkillData(data);
      })
      .catch((err) => {});
    return () => ac.abort();
  }, []);

  return (
    <div className="skills flex items-center">
      <div className="flex flex-col w-full p-8">
        {skillData.map((skillSet, index) => {
          return <SkillSection skillGroup={skillSet} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Skills;

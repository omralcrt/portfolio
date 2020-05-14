import React from "react";
import SkillCard from "../SkillCard/SkillCard";

const SkillSection = ({ skillGroup }) => {
  return (
    <section className="w-full">
      <div className="flex flex-wrap justify-center text-center -mr-4 mb-4">
        <header className="w-full mb-4 pr-4 flex justify-center">
          <h2 className="font-bold text-sm uppercase text-white">
            {skillGroup.title}
          </h2>
        </header>
        <div className="w-full flex flex-wrap justify-center text-center">
          {skillGroup.items.map((skillItem, index) => {
            return <SkillCard skill={skillItem} key={index}/>;
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;

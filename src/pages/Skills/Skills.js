import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./Skills.css";
import AppStore from "../../stores/AppStore";
import SkillSection from "./components/SkillSection/SkillSection";

const Skills = observer(() => {
  const appStore = useContext(AppStore);
  appStore.changeActivePage("skills");

  const [skillData, setSkillData] = useState([]);

  useEffect(() => {
    fetch("https://omralcorutportfolio.firebaseio.com/skills.json")
      .then((response) => response.json())
      .then((data) => setSkillData(data));
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
});

export default withRouter(Skills);

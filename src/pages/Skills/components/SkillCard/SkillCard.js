import React from "react";
import "./SkillCard.css";

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card w-1/2 md:w-auto pr-4 mb-4 md:mb-6">
      <article className="p-4 border border-gray-700 rounded bg-gray-700 hover:border-gray-600">
        {skill.url ? (
          <figure className="h-full flex flex-col justify-end">
            <a
              href={skill.url}
              title={skill.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                title={skill.name}
                alt={skill.name}
                src={skill.icon}
                className="h-8 md:h-12 mx-auto"
                data-src={skill.icon}
                lazy="loaded"
              />
            </a>
            <figcaption>
              <a
                href={skill.url}
                title={skill.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-semibold pt-2 text-sm text-white">
                  {skill.name}
                </h3>
              </a>
            </figcaption>
          </figure>
        ) : (
          <figure className="h-full flex flex-col justify-end">
            <img
              title={skill.name}
              alt={skill.name}
              src={skill.icon}
              className="h-8 md:h-12 mx-auto"
              data-src={skill.icon}
              lazy="loaded"
            />
            <figcaption>
              <h3 className="font-semibold pt-2 text-sm text-white">
                {skill.name}
              </h3>
            </figcaption>
          </figure>
        )}
      </article>
    </div>
  );
};

export default SkillCard;

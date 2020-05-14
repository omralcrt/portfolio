import React from "react";

const SocialMediaButton = ({ socialMedia }) => {
  return (
    <a href={socialMedia.url} target={socialMedia.newTab ? "_blank" : "_self"} rel="noopener noreferrer">
      <img
        title={socialMedia.name}
        alt={socialMedia.name}
        src={socialMedia.icon}
        className="w-8 h-8 mx-4 transform hover:-translate-y-1 duration-100"
        data-src={socialMedia.icon}
      />
    </a>
  );
};

export default SocialMediaButton;

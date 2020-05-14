import React from "react";
import "./Home.css";
import SocialMediaButton from "./components/SocialMediaButton/SocialMediaButton";
import socialMediaData from "./SocialMedias.json";

const Home = () => {
  return (
    <div className="home flex items-center justify-center">
      <div className="flex flex-col items-center p-8">
        <img src="/profil.jpeg" className="w-56 rounded-full" alt="Avatar" />
        <h1 className="text-4xl text-white text-center my-3">
          Hello, World!&nbsp;
          <span role="img" aria-label="hello">
            👋
          </span>
        </h1>
        <h1 className="text-4xl text-white text-center my-3">
          I am <span className="name">Ömral Cörüt</span>&nbsp;
          <span role="img" aria-label="developer">
            🧑‍💻
          </span>
        </h1>
        <p className="text-2xl text-white text-center mt-1 mb-4">
          I'm a passionate&nbsp;
          <span role="img" aria-label="passion">
            💪
          </span>
          &nbsp;and creative&nbsp;
          <span role="img" aria-label="creative">
            🖌️
          </span>
          &nbsp;mobile application developer&nbsp;
          <span role="img" aria-label="phone">
            📱
          </span>
          &nbsp;from <span className="nation">Tu</span>rk
          <span className="nation">ey</span>&nbsp;
          <span role="img" aria-label="turkey">
            🇹🇷
          </span>
        </p>
        <div className="flex flex-row mb-8">
          {socialMediaData.map((socialMedia, index) => {
            return <SocialMediaButton socialMedia={socialMedia} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

import "./styles.css";
import groupPNG from "../../assets/group.png";

function IntroSection() {
  return (
    <section id="#intro" className="sections">
      <div className="intro">
        <div className="intro__text">
          <h1>EasyConnect Hackville 2023</h1>
          <p>
            This was what our group consisting of Michael, Aaveg, Royce and
            David, made for Hackville 2023. We used libraries and tools such as
            React, React Native, Flask, Selenium, Cohere, and a few more!
          </p>
        </div>
        <div className="intro__image">
          <img src={groupPNG} alt="" />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;

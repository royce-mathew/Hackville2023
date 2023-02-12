import React from "react";

import "./styles.css";
import problemJPG from "../../assets/problem.jpg";

function ProblemSection() {
  return (
    <section id="Problem" className="sections">
      <div className="problem">
        <div className="problem__image">
          <img src={problemJPG} alt="" />
        </div>
        <div className="problem__text">
          <h1>Our Concerns</h1>
          <ul>
            <li>A lot of seniors wish to learn more tech but struggle.</li>
            <li>
              Technologically inexperienced people are often overwhelmed by
              fancy user interfaces.
            </li>
            <li>
              Learning to traverse the internet can be challenging for people
              who are new to technology.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;

import React from "react";

import "./styles.css";
import solutionPNG from "../../assets/demo.png";

function SolutionSection() {
  return (
    <section id="Solution" className="sections">
      <div className="solution">
        <div className="solution__text">
          <h1>Our Solution</h1>
          <ul>
            <li>
              Developing a tool that can automate common tasks on your computer
            </li>
            <li>
              Using image based reinforcement to teach people how to carry out
              these tasks themselves
            </li>
            <li>
              Our product offers a minimalistic and easy-to-understand design.
            </li>
          </ul>
        </div>
        <div className="solution__image">
          <img src={solutionPNG} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;

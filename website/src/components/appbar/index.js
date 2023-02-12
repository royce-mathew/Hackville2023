import React from "react";
import "./styles.css";
import logoPNG from "../../assets/logo.png";

function Appbar() {
  return (
    <div className="appbar">
      <img src={logoPNG} alt="" />
      <div className="appbar__jump-links">
        <a href="Intro">Introduction</a>
        <a href="#Problem">Problem</a>
        <a href="#Solution">Solution</a>
        <a href="#how-to-use">How to use?</a>
        <button>Download</button>
      </div>
    </div>
  );
}

export default Appbar;

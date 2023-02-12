import React from "react";

import "./styles.css";

function HowToUse() {
  return (
    <section className="sections" id="how-to-use">
      <div className="how-to">
        <h1>How To Use:</h1>
        <div className="how-to__blocks-parent">
          <div className="how-to__blocks">
            <h1>Download</h1>
            <p>Download the app for both windows and mobile.</p>
          </div>
          <div className="how-to__blocks">
            <h1>Connect</h1>
            <p>
              Open them both and enter the code show on your laptop in your
              phone.
            </p>
          </div>
          <div className="how-to__blocks">
            <h1>Explore</h1>
            <p>
              And that's it! You are connected and are free to use it however
              you want!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToUse;

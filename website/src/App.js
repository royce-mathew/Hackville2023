import React, { useState, useEffect } from "react";
import Appbar from "./components/appbar";

import NET from "vanta/dist/vanta.net.min";
import IntroSection from "./components/introSection";
import ProblemSection from "./components/problemSection";
import SolutionSection from "./components/solutionSection";
import HowToUse from "./components/howToUse";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: document.body,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3fc8ff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div>
      <Appbar />
      <IntroSection />
      <ProblemSection />
      <SolutionSection />
      <HowToUse />
    </div>
  );
}

export default App;

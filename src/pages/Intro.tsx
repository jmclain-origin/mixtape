import React, { useState, useCallback } from "react";
import AboutIntro from "components/AboutIntro";

const Intro = () => {
  const [cassetteSide, setCassetteSide] = useState<"A" | "B">("A");

  const toggleCassetteSide = useCallback(() => {
    setCassetteSide((prevState) => (prevState === "A" ? "B" : "A"));
  }, []);

  return (
    <AboutIntro
      flipCassette={toggleCassetteSide}
      currentSide={cassetteSide}
    />
  );
};

export default Intro;

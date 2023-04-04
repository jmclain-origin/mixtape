import React, { useState, useCallback } from "react";
import AboutIntro from "components/AboutIntro";

const Intro = () => {
  const [show, setShow] = useState(true);
  const [cassetteSide, setCassetteSide] = useState<"A" | "B">("A");

  const toggleCassetteSide = useCallback(() => {
    setCassetteSide((prevState) => (prevState === "A" ? "B" : "A"));
  }, []);

  const hide = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <AboutIntro
      isShown={show}
      goBack={hide}
      flipCassette={toggleCassetteSide}
      currentSide={cassetteSide}
    />
  );
};

export default Intro;

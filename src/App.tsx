import React, { useState } from "react";
import AboutIntro from "./components/AboutIntro";
import ASide from "./components/ASide";
import BSide from "./components/BSide";
// import BonusTracks from "./components/BonusTracks";
import HeartHero from "./components/HeartHero";
import "./app.style.css";

function App() {
  const [showHeartHero, setShowHeartHero] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [cassetteSide, setCassetteSide] = useState<"A" | "B">("A");
  const [showBSide, setShowBSide] = useState(false);
  const [showASide, setShowASide] = useState(false);

  const toggleHeartHeroToIntro = () => {
    setShowHeartHero(false);
    setShowIntro(true);
  };

  const backFromIntro = () => {
    setShowIntro(false);
    setShowHeartHero(true);
  };

  const toggleCassetteSide = () =>
    setCassetteSide((prevState) => (prevState === "A" ? "B" : "A"));

  const showSelectedCassetteSide = () => {
    if (cassetteSide === "A") {
      setShowASide(true);
      setShowBSide(false);
    } else if (cassetteSide === "B") {
      setShowBSide(true);
      setShowASide(false);
    }
    setShowIntro(false);
  };

  return (
    <main className="px-2 lg:px-40 xl:px-96 min-h-screen">
      <HeartHero
        isShown={showHeartHero}
        toggleNextView={toggleHeartHeroToIntro}
      />

      <AboutIntro
        isShown={showIntro}
        goBack={backFromIntro}
        currentSide={cassetteSide}
        flipCassette={toggleCassetteSide}
        playCassette={showSelectedCassetteSide}
      />
      {showASide && <ASide />}
      {showBSide && <BSide />}

    </main>
  );
}

export default App;

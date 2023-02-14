import React, { useState } from "react";
import AboutIntro from "./components/AboutIntro";
// import ASide from "./components/ASide";
// import BSide from "./components/BSide";
// import BonusTracks from "./components/BonusTracks";
import HeartHero from "./components/HeartHero";
import "./app.style.css";

function App() {
  const [showHeartHero, setShowHeartHero] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  // const [showAbout, setShowAbout] = useState(false);
  // const [showBonusTracks, setShowBonusTracks] = useState(false);
  // const [showBSide, setShowBSide] = useState(false);

  // const toggleIntro = () => {
  //   setShowIntro(!showIntro);
  // };

  // const toggleAbout = () => {
  //   setShowAbout(!showAbout);
  // };

  // const toggleBonusTracks = () => {
  //   setShowBonusTracks(!showBonusTracks);
  // };

  // const toggleBSide = () => {
  //   setShowBSide(!showBSide);
  // };

  const toggleHeartHeroToIntro = () => {
    setShowHeartHero(false);
    setShowIntro(true);
  };
  return (
    <main className="px-2 lg:px-40 xl:px-96 min-h-screen">
        <HeartHero
          isShown={showHeartHero}
          toggleNextView={toggleHeartHeroToIntro}
        />

      <AboutIntro isShown={showIntro} />

      {/* 
      <hr className="my-3 mx-4" />

      <ASide />
      <hr className="my-3 mx-4" />

      <BSide />
      <hr className="my-3 mx-4" />

      <BonusTracks /> */}
    </main>
  );
}

export default App;

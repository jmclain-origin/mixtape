import React, { useState, useCallback } from "react";
import AboutIntro from "./components/AboutIntro";
import ASide from "./components/ASide";
import BSide from "./components/BSide";
import HeartHero from "./components/HeartHero";
import "./app.style.css";

function App() {
  const [showHeartHero, setShowHeartHero] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [cassetteSide, setCassetteSide] = useState<"A" | "B">("A");
  const [showBSide, setShowBSide] = useState(false);
  const [showASide, setShowASide] = useState(false);

  const toggleHeartHeroToIntro = useCallback(() => {
    setShowHeartHero(false);
    setShowIntro(true);
  },[]);

  const backFromIntro = useCallback(() => {
    setShowIntro(false);
    setShowHeartHero(true);
  },[]);

  const toggleCassetteSide =  useCallback(() => {
    setCassetteSide((prevState) => (prevState === "A" ? "B" : "A"))},[]);

  const showSelectedCassetteSide = useCallback(() => {
    if (cassetteSide === "A") {
      setShowASide(true);
      setShowBSide(false);
    } else if (cassetteSide === "B") {
      setShowBSide(true);
      setShowASide(false);
    }
    setShowIntro(false);
  },[cassetteSide]);

  return (
    <main className="px-2 lg:px-40 xl:px-96 min-h-screen overflow-hidden">
      <HeartHero
        isShown={showHeartHero}
        setIsShown={setShowHeartHero}
        toggleNextView={toggleHeartHeroToIntro}
      />

      <AboutIntro
        isShown={showIntro}
        goBack={backFromIntro}
        currentSide={cassetteSide}
        flipCassette={toggleCassetteSide}
        selectSide={showSelectedCassetteSide}
      />
      {showASide && <ASide />}
      {showBSide && <BSide />}

    </main>
  );
}

export default App;

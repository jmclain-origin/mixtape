import React, { useState, useEffect } from "react";
import { FaPlay, FaStepBackward, FaRetweet } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion";
import CassetteTape from "./CassetteTape";
import "./AboutIntro.style.scss";

type Props = {
  isShown: boolean;
  goBack: () => void;
  currentSide: "A" | "B";
  flipCassette: () => void;
  selectSide: () => void;
};

const parAnim: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      delayChildren: 1.2,
      staggerChildren: 0.2,
    },
  },
};

const itemAnim: Variants = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const AboutIntro = ({
  isShown,
  goBack,
  currentSide,
  flipCassette,
  selectSide,
}: Props) => {
  const [cassetteFlipRotation, setCassetteFlipRotation] = useState(0);
  const [displayCassette, setDisplayCassette] = useState(true);

  const playCassette = () => {
    setDisplayCassette(false);
  };

  useEffect(() => {
    if (currentSide === "A") setCassetteFlipRotation(360);
    else if (currentSide === "B") setCassetteFlipRotation(0);
  }, [currentSide, flipCassette]);

  return (
    <AnimatePresence>
      {isShown && (
        <>
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-center mt-2 space-y-1"
          >
            {/* <h1 className="text-3xl">Valentine's Day</h1> */}
            <h2 className="text-3xl text-black bg-black">&#10084; Mixtape &#10084;</h2>
          </motion.header>
          <motion.section
            variants={parAnim}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center space-y-2 mt-3 text-sm"
          >
            <hr className="mx-4" />
            <motion.p variants={itemAnim}>
              Blah blah, blah blah blah, blah blah blah blah, blah blah blah.
              Yackity smackity. there was something here but now it just a 404.
            </motion.p>
            <motion.p variants={itemAnim}>
              Updates to be determined and shall be release on the 5th Saturday
              of February 2023. Ticking time is running out as my temperature
              declines.
            </motion.p>
            <motion.p variants={itemAnim}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              autem voluptas. Laboriosam nihil amet rerum eaque eum aperiam
              fugiat minus provident eveniet error at, tenetur quis quae.
            </motion.p>
            <motion.p variants={itemAnim}>
              Wtf, fml!? I digress into something cold, drunk and Fing
              hilarious. Fail my way forward, what doesn't kill you gives you a
              dark sense of humor and a few unhealthy coping mechanisms.
            </motion.p>
            <hr className="mx-4" />
          </motion.section>
          <motion.div
            id="controlButtons"
            className="flex flex-row w-100 items-center justify-around py-3 mt-2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 1.5 } }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.5 } }}
          >
            <FaStepBackward className="control-button" onClick={goBack} />
            <FaPlay className="control-button" onClick={playCassette} />
            <FaRetweet className="control-button" onClick={flipCassette} />
          </motion.div>
          <AnimatePresence>
            {displayCassette && (
              <motion.div
                initial={{ scale: 0.75, y: 250, rotateY: cassetteFlipRotation }}
                animate={{
                  scale: 1,
                  y: 0,
                  rotateY: cassetteFlipRotation,
                  transition: { duration: 1.5 },
                }}
                exit={{ scale: 0.75, y: 250, transition: { duration: 1 } }}
                onAnimationComplete={(def: any) => {
                  if (def?.y > 0) selectSide();
                }}
                className="relative"
              >
                <CassetteTape currentSide={currentSide} />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default AboutIntro;

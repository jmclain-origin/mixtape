import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaStepBackward, FaRetweet } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion";
import CassetteTape from "./CassetteTape";
import "./AboutIntro.style.scss";

type Props = {
  isShown: boolean;
  goBack: () => void;
  currentSide: "A" | "B";
  flipCassette: () => void;
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
}: Props) => {
  const navigate = useNavigate();
  const [cassetteFlipRotation, setCassetteFlipRotation] = useState(0);
  const [displayCassette, setDisplayCassette] = useState(true);

  const playCassette = useCallback(() => {
    setDisplayCassette(false);
  }, [setDisplayCassette]);

  useEffect(() => {
    if (currentSide === "A") setCassetteFlipRotation(360);
    else if (currentSide === "B") setCassetteFlipRotation(0);
  }, [currentSide, flipCassette]);

  return (
    <AnimatePresence>
      {isShown && (
        <>
          {/* <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-center mt-2 space-y-1"
          >
           
          </motion.header> */}
          <motion.section
            variants={parAnim}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center space-y-2 mt-3 text-sm"
          >
            <hr className="mx-4" />
            <motion.p variants={itemAnim}>
              Sometimes I wish for a simpler time, when we had less technology
              embedded in our lives. Tech has made somethings in life better but
              there's a disconnect being so connected.
            </motion.p>
            <motion.p variants={itemAnim}>
              One thing I miss is the concept of a mix tape. There's something
              nostalgic and romantic about sitting by the stereo queuing up
              tracks from your collection or trying to catch that one song on
              the radio and hitting record to capture it on a cassette tape.
            </motion.p>
            <motion.p variants={itemAnim}>
              The closest thing we get these days is creating a playlist on some
              streaming platform which is missing something, the effort. Making
              a mix tape took time and preparation.
            </motion.p>
            <motion.p variants={itemAnim}>
              So I present you with my idea of a modern day mix tape. Put
              together with care and effort. Hope you enjoy.
            </motion.p>
            <hr className="mx-4" />
          </motion.section>
          <motion.div
            id="controlButtons"
            className="flex flex-row w-100 items-center justify-around py-3"
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
                    if (def?.y > 0) navigate(`/play/${currentSide}`);
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

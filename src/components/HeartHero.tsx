import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeartHero.style.scss";

type Props = {
  isShown: boolean;
  setIsShown: (isShown: boolean) => void;
  toggleNextView: () => void;
};

const HeartHero = ({ isShown, setIsShown, toggleNextView }: Props) => {
  return (
    <AnimatePresence>
      {isShown && (
        <>
          <motion.h1
            initial={{ y: -200 }}
            animate={{ y: 0, transition: { duration: 6 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="freehand text-5xl text-center pt-16"
          >
            Happy Valentine's Day
          </motion.h1>
          <motion.h2
            initial={{ y: 125, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 3, delay: 5 },
            }}
            exit={{ scale: 0, transition: { duration: 1 } }}
            className="freehand text-4xl text-center pt-12"
          >
            Tap the heart
          </motion.h2>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1.5 }}
            onAnimationComplete={(def: any) => {
              if (def?.scale === 0) toggleNextView();
            }}
          >
            <svg
              className="heart-loader"
              viewBox="0 0 90 90"
              version="1.1"
              onClick={() => setIsShown(false)}
            >
              <g className="heart-loader__group">
                <path
                  className="heart-loader__square"
                  strokeWidth="1"
                  fill="none"
                  d="M0,30 0,90 60,90 60,30z"
                />
                <path
                  className="heart-loader__circle m--left"
                  strokeWidth="1"
                  fill="none"
                  d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"
                />
                <path
                  className="heart-loader__circle m--right"
                  strokeWidth="1"
                  fill="none"
                  d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"
                />
                <path
                  className="heart-loader__heartPath"
                  strokeWidth="2"
                  d="M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0"
                />
              </g>
            </svg>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HeartHero;

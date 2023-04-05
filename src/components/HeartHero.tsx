import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/HeartHero.style.scss";

type Props = {
  isShown: boolean;
  setIsShown: (isShown: boolean) => void;
};

const HeartHero = ({ isShown, setIsShown }: Props) => {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      {isShown && (
        <>
          <motion.h1
            initial={{ y: -200 }}
            animate={{ y: 0, transition: { duration: 6 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="font-sassy text-5xl text-center pt-16"
          >
            Happy Valentine's Day
          </motion.h1>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1.5 }}
            onAnimationComplete={(def: any) => {
              if (def?.scale === 0) navigate("/intro");
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

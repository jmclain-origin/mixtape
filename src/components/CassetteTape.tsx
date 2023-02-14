import React from "react";
import "./CassetteTape.style.scss";
type Props = {
    currentSide: "A" | "B",
}

const CassetteTape = ({ currentSide }: Props) => {
  return (
    <div className="container">
      <div className="cassette">
        <div className="cassette__label">
          <div className="cassette__details">
            <div className="cassette__side">{currentSide}</div>
            <div className="cassette__info">
              <div className="cassette__block">
                <div className="cassette__lines"></div>
                <div className="cassette__spool">
                  <div className="cassette__circle"></div>
                  <div className="cassette__wire"></div>
                  <div className="cassette__circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cassette__mechanics">
          <div className="cassette__tuning"></div>
          <div className="cassette__tuning"></div>
        </div>
      </div>
    </div>
  );
};

export default CassetteTape;

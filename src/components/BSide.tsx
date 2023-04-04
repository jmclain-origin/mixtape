import React from "react";
import { v4 as uuid } from 'uuid';
import { TrackComponent } from "./TrackComponent";
import { bSide } from "assets/data";

const BSide = () => {
  return (
    <>
      <section id="Bside" className="space-y-4">
        <h3 className="text-2xl text-center">
          Words are hard, music is better
        </h3>
        <p className="text-sm px-4 font-redacted">
          I've had this on going playlist I've been putting together for myself.
          It's inspired by you/us. Instead of sharing the whole thing (which may
          be a bit much), I've picked out some better ones for this list,
          attaching links and some context. Sometimes it's hard to know what to
          say or if I should at all, so I'll let music try and speak for me.
        </p>
        {bSide.map((track) => (
          <TrackComponent key={uuid()} {...track} />
        ))}
      </section>
    </>
  );
};

export default BSide;

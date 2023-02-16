import React from "react";

type Props = {};

const BonusTracks = (props: Props) => {
  return (
    <section id="bonusTracks">
      <h3 className="text-4xl text-center">Bonus Tracks</h3>
      <p className="text-md px-4">How the hell did you get here?</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HUngLgGRJpo"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default BonusTracks;

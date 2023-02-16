import React from "react";

type Props = {};

const ASide = (props: Props) => {
  return (
    <section id="Aside" className="space-y-4">
      <h2 className="text-5xl text-center">A Side?</h2>
      <p className="text-sm px-4">
        more like no side. I think it got to close to a magnet. downside to
        cassettes. since you're here, enjoy a cat video.
      </p>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/wB9afdV2BgA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default ASide;

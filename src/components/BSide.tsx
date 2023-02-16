import React from "react";

type Props = {};

const BSide = (props: Props) => {
  return (
    <section id="Bside" className="space-y-4">
      <h2 className="text-5xl text-center">B Side</h2>
      <h3 className="text-2xl text-center">Darkside?</h3>
      <p className="text-sm px-4">
        You're still here. Well there's nothing
        cause this is not the content you are looking for, and we're all out of
        cookies too. Wanna make this weird, watch the video.
      </p>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/w_MSFkZHNi4"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default BSide;

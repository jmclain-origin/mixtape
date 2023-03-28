import React from "react";
import { TrackInfoType } from "assets/data";

export const TrackComponent = ({ title, src, comment }: TrackInfoType) => {
  return (
    <article className="space-y-2">
      <p className="text-md">
        <span className="font-bold underline">{title}</span>{" "}
        <p className="text-sm px-4">{comment}</p>
      </p>
      <iframe
        title={title}
        src={src}
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </article>
  );
};

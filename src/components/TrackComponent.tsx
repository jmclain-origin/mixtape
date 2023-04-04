import React from "react";
import { TrackInfoType } from "assets/data";

export const TrackComponent = ({ title, src, comment }: TrackInfoType) => {
  return (
    <article className="space-y-2">
      <p className="text-md">
        <span className="font-bold underline font-redacted">{title}</span>{" "}
        <p className="text-sm px-4 font-redacted">{comment}</p>
      </p>
      <iframe
        title={title}
        src={src}
        width="100%"
        height="152"
        loading="lazy"
      ></iframe>
    </article>
  );
};

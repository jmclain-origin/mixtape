import React, { useState } from "react";
import { TrackInfo } from "assets/dataV2";

export const TrackComponent = ({ title, src, comment }: TrackInfo) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <article className="space-y-2">
      <span
        className="font-bold underline"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
      </span>{" "}
      <p className="text-sm px-4 font-redacted">{comment}</p>
      <div className={`transition-all ${isExpanded ? "block" : "hidden"}` }>
        <iframe
          title={title}
          src={src}
          width="60%"
          height="152"
          loading="lazy"
        ></iframe>
      </div>
    </article>
  );
};

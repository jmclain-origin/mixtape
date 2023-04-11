import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { TrackComponent } from "./TrackComponent";
import { ListDetail, A_SIDE, B_SIDE } from "assets/dataV2";

type Props = { selectedSide?: "A" | "B" | "C" | "Bonus" };

const Playlist = ({ selectedSide }: Props) => {
  const [data, setData] = useState<ListDetail>();
  useEffect(() => {
    if (selectedSide === "A") setData(A_SIDE);
    if (selectedSide === "B") setData(B_SIDE);
  }, [selectedSide, data]);
  if (data && selectedSide) {
    return (
      <>
        <section className="space-y-4">
          <h3 className="text-2xl text-center">{data.header}</h3>
          <p className="text-sm px-4 font-redacted">{data.note}</p>
          {data.tracks.map((track) => (
            <TrackComponent key={uuid()} {...track} />
          ))}
        </section>
      </>
    );
  } else { 
    return null;
  }
};

export default Playlist;

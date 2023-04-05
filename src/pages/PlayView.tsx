import React from "react";
import { useParams } from "react-router-dom";
import Playlist from "components/Playlist";

type T = { side?: "A" | "B" | "C" | "Bonus" };

function PlayView(): JSX.Element {
  const { side }: T = useParams();
return <Playlist selectedSide={side} />;
}

export default PlayView;

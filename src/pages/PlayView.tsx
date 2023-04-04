import React from "react";
import { useParams } from "react-router-dom";
import ASide from "components/ASide";
import BSide from "components/BSide";

type T = { side?: "A" | "B"  };

function PlayView(): JSX.Element {
  const { side }: T = useParams();

 if (side === "A") {
    return <ASide />;
  } else if (side === "B") {
    return <BSide />;
  } else {
    throw new Error("Invalid side");
 }
}

export default PlayView;

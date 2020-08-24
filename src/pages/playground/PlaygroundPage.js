import React from "react";
// import { Try3D } from "./Try3D";
import { DicePage } from "./TryDice";

export const PlaygroundPage = React.forwardRef((props, ref) => {
  return (
    <div>
      {/* This is playground. */}
      {/* <Try3D /> */}
      <DicePage />
    </div>
  );
});

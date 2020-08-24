import React from "react";

import "./try.scss";

const labels = ["top", "bottom", "left", "right", "front", "back"];

const wobbleDice = (label) => {
  const randomNumber = 10;
  // const randomNumber = Math.ceil(Math.random() * 10);
  const r2 = Math.floor(Math.random() * 6);

  const cube = document.getElementById("CUBE");
  console.log("wobbleDice -> cube", cube);

  for (let i = 0; i < randomNumber; i++) {
    // cube.classList = "cube show-" + labels[r2];
    cube.classList.toggle("show-" + r2);
    cube.classList.toggle("show-" + r2);
  }
  cube.classList.toggle("show-" + label);
};

export const Try3D = React.forwardRef((props, ref) => {
  const [currentFace, setCurrentFace] = React.useState("front");

  const onLabelBtnPress = (label) => {
    // const cube = document.getElementById("CUBE");

    wobbleDice(label);

    // cube.classList.toggle('show-'+currentFace);
    // cube.classList.toggle('show-'+label);
    setCurrentFace(label);
  };

  return (
    <div id="try3d">
      <div className="scene">
        <div id="CUBE" className={`cube show-${currentFace}`}>
          <div className="cube__face cube__face--front">F</div>
          <div className="cube__face cube__face--back">B</div>
          <div className="cube__face cube__face--right">R</div>
          <div className="cube__face cube__face--left">L</div>
          <div className="cube__face cube__face--top">T</div>
          <div className="cube__face cube__face--bottom">B</div>
        </div>
      </div>

      <div>
        {labels.map((l) => (
          <button
            key={l}
            onClick={() => {
              onLabelBtnPress(l);
            }}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
});

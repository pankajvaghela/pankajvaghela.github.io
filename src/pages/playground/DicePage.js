import React from "react";

import "./tryDice.scss";

const getArrayOf1toN = (n) => Array.from(new Array(n), (_, i) => ++i);

const Dot = () => <span className="dot"></span>;

const DieItem = ({ side }) => (
  <li className="die-item" data-side={side}>
    {getArrayOf1toN(side).map((n) => (
      <Dot key={side + n} />
    ))}
  </li>
);

export const DicePage = React.forwardRef((props, ref) => {
  const [diceSide, setDiceSide] = React.useState(1);

  const onRoll = () => {
    rollDice();
    setDiceSide(getRandomNumber(1, 6));
  };

  return (
    <div>
      <h1 className="headingPage">Dice Roll</h1>
      <div className="wrapper clearfix">
        <div id="tryDice">
          <div className="dice">
            <ol className="die-list roll-1" data-roll={diceSide} id="dice1">
              {getArrayOf1toN(6).map((n) => (
                <DieItem key={n} side={n} />
              ))}
            </ol>
          </div>
        </div>
        <button id="button" onClick={onRoll}>
          Roll
        </button>
      </div>
    </div>
  );
});

function rollDice() {
  const dice = document.getElementById("dice1");
  toggleClasses(dice);
}

function toggleClasses(die) {
  die.classList.toggle("roll-1");
  die.classList.toggle("roll-2");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

import React from "react";
import "./Box.css";

const Box = ({ title, item, result }) => {
  if (title === "Computer" && result !== "Tie" && result !== "") {
    result = result === "Win" ? "Lose" : "Win";
  } else {
    result = result;
  }
  if (title === "Computer") {
    console.log(`Computer ${result}`);
  }
  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <img
        className="item-img"
        src={item && item.img}
        alt={item && item.name}
      />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;

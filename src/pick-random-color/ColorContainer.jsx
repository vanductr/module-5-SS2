import React from "react";
import Color from "./Color";
import "../App.css";

const ColorContainer = ({ colors }) => {
  return (
    <div className="ColorContainer">
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </div>
  );
};

export default ColorContainer;

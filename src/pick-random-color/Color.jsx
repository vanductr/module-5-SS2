import React, { useState } from "react";
import "../App.css";

const Color = ({ color }) => {
  const [currentColor, setCurrentColor] = useState(color.color);

  // Xử lý sự kiện click để đổi màu
  const changeColor = () => {
    const randomColor = () => Math.floor(Math.random() * 256);
    const randomRGB = () =>
      `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    setCurrentColor(randomRGB());
  };

  return (
    <div
      className="Color"
      style={{ backgroundColor: currentColor }}
      onClick={changeColor}
    ></div>
  );
};

export default Color;

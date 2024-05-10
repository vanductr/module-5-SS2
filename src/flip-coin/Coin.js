import React from "react";
import "./Coin.css";

const Coin = ({ side }) => {
  return (
    <div className="coin-container">
      <div className={`coin ${side.toLowerCase()}`}>
        <img
          className="side front"
          src={side === "Head" ? "https://www.pcgs.com/UserImages/1864_gold_dollar_obv.jpg" : "https://www.pcgs.com/UserImages/1864_gold_dollar_rev.jpg"}
          alt="Head"
        />
      </div>
    </div>
  );
};

export default Coin;

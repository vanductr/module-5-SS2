import React, { Component } from "react";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rolling: false,
      die1: "one",
      die2: "one",
    };
  }

  rollDice = () => {
    if (!this.state.rolling) {
      this.setState({ rolling: true });
      setTimeout(() => {
        const random1 = Math.floor(Math.random() * 6) + 1;
        const random2 = Math.floor(Math.random() * 6) + 1;
        this.setState({
          die1: this.getFace(random1),
          die2: this.getFace(random2),
          rolling: false,
        });
      }, 1000);
    }
  };

  getFace = (num) => {
    switch (num) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      default:
        return "one";
    }
  };

  render() {
    const { rolling, die1, die2 } = this.state;
    return (
      <div className="RollDice">
        <div className="dice">
          <Die face={die1} shaking={rolling} />
          <Die face={die2} shaking={rolling} />
        </div>
        <button onClick={this.rollDice} disabled={rolling}>
          {rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

const Die = ({ face, shaking }) => {
  return (
    <i className={`fa-solid fa-dice-${face} ${shaking ? "shaking" : ""}`}></i>
  );
};

export default RollDice;

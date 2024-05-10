import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  // Thiết lập interval để cập nhật thời gian mỗi giây khi component được mount
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // Xóa interval khi component bị unmount
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Hàm tick để cập nhật thời gian mới
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <div>
        <h2>Current Time: {this.state.time}</h2>
      </div>
    );
  }
}

export default Clock;


// =============================== Thực hành 1: Props trong ReactJS ================================
// import "./App.css";
// import Button from "./Button";
// import Header from "./component/Header";
// import ListItems from "./component/ListItem";

// function App() {
  
//   return (
//     <div className="App">
//       <Header/>
//       <ListItems/>

//       <div>
//         {/* Button */}
//         <Button text = "Click Me" color="red" background="blue"/>
//         {/* Button */}
//       </div>
//     </div>
    
//   );
// }

// export default App;



// ================================ Thực hành 2: Truyền State trong ReactJS =======================
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0,
//     };
//   }


//   render() {
//     return (
//       <div style={{ textAlign: "center" }}>
//         <button onClick={() => this.setState({ value: this.state.value + 1 })}>
//           click me
//         </button>
//         <br />
//         <label>{this.state.value}</label>
//       </div>

//     )
//   }
// }


// ========================= Thực hành 3: Sử dụng State để quản lý trạng thái của Component ======================
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     // Khởi tạo 1 state là count có giá trị khởi tạo là 1
//     this.state = {
//       count: 0,
//     };

//     // Khai báo phương thức để sử dụng từ khoá this
//     this.handleCount = this.handleCount.bind(this);
//   }

//   // Khai báo một hàm handleCount để mỗi khi click vào button sẽ gọi hàm này và cập nhật lại count
//   handleCount() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }

//   render() {
//     return (
//       <div>
//         {/* Hiển thị số lần bấm */}
//         <p>Số lần bấm của bạn là: {this.state.count}</p>

//         {/* Gắn sự kiện khi Click vào button thì gọi hàm handleCount */}
//         <button onClick={this.handleCount}>Click me!</button>
//       </div>
//     )
//   }
// }


// ============================== Sử dụng state để quản lý trạng thái của component(Sử dụng event để quản lý sự kiện của component) ===========================
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     // Khởi tạo 1 state là textInput có giá trị khởi tạo là "" để lưu giá trị người dùng nhập từ ô input
//     this.state = {
//       textInput: "",
//     };

//     // Khai báo phương thức để sử dụng từ khoá this
//     this.handleChangeInputValue = this.handleChangeInputValue.bind(this);
//     this.handleSubmitForm = this.handleSubmitForm.bind(this);
//   }

//   // Khởi tạo phương thức để cập nhật giá trị người dùng nhập vào ô input và lưu vào biến textInput
//   handleChangeInputValue(event) {
//     this.setState({
//       textInput: event.target.value
//     })
//   }

//   // Khởi tạo phương thức khi có sự kiện submit form
//   handleSubmitForm(event) {
//     event.preventDefault();
//     alert("Bạn vừa nhập: '"+this.state.textInput+"'")
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmitForm}>
//           <input value={this.state.textInput} onChange={this.handleChangeInputValue}/>
//           <button>Submit</button>
//         </form>
//       </div>
//     )
//   }
// }


// ================================ Thực hành 5: Ứng dụng tính tổng các số người dùng nhập vào ===============================
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     // Khởi tạo các state
//     this.state = {
//       number: "",
//       array: [],
//       total: 0
//     }

//     // Khai báo phương thức để sử dụng từ khoá this.
//     this.handleChangeInput = this.handleChangeInput.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // Khởi tạo phương thức quản lý sự thay đổi của ô input
//   handleChangeInput(event) {
//     this.setState({
//       number: +event.target.value
//     })
//   }

//   // Khởi tạo phương thức khi Submit Form thì hiển thị kết quả
//   handleSubmit(event) {
//     event.preventDefault();
//     this.setState({
//       array: [...this.state.array, this.state.number],
//       total: this.state.total + this.state.number,
//       number: ""
//     })
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}> 
//           <input type='number' value={this.state.number} onChange={this.handleChangeInput}/>
//           <button type='submit'>
//             Add
//           </button>
//         </form>
//         <span>Kết quả:</span>
//         <div style={{color: "red"}}>
//           {this.state.array.join("+") + "=" + this.state.total}
//         </div>
//       </div>
//     )
//   }
// }


// ======================== Sử dụng props và state để tuỳ chỉnh giao diện người dùng ================================
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     // Khởi tạo các state
//     this.state = {
//       color: "black",
//       isShow: true,
//       fontSize: 12,
//       content: "hello baby :v!"
//     }

//     // Khai báo phương thức để sử dụng từ khoá this
//     this.handleToggle = this.handleToggle.bind(this);
//     this.handleChangeBackground = this.handleChangeBackground(this);

//   }

//   // Phương thức handleToggle sẽ thay đổi gía trị state isShow, từ đó ẩn hiện các phần tử
//   handleToggle() {
//     this.setState({
//       isShow: !this.state.isShow,
//     });
//   }

//   // Phương thức handleChangeBackground để thay đổi màu sắc với cỡ chữ của đoạn văn bản
//   handleChangeBackground() {
//     console.log("Đã ăn hàm!");
//     this.setState({
//       color: this.state.color === "black" ? "pink" : "black",
//       fontSize: this.state.fontSize === 12 ? 14 : 12,
//       content: this.state.content === "hello baby :v!" ? "U look so beatiful, honey!" : "hello baby :v!",
//     });
//   }

//   render() {
//     return (
//       <div>
//         {/* Sử dụng toán tử 3 ngôi để ẩn hiện đoạn văn và nút thay đổi định dạng của đoạn văn */}
//         {this.state.isShow ? (
//           <>
//             <p style={{color: this.state.color, fontSize: this.state.fontSize}}>{this.state.content}</p>
//             <button onClick={this.handleChangeBackground}>Change</button>
//           </>
//         ) : (
//           ""
//         )}
//         <button onClick={this.handleToggle}>Toggle</button>
//       </div>
//     )
//   }
// }


// ===================================== Ứng dụng tung đồng xu - Let’s flip a coin =====================================
// import React, { Component } from 'react';
// import './App.css';
// import Coin from './flip-coin/Coin';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       coinSide: null,
//       headCount: 0,
//       tailCount: 0
//     };
//   }

//   flipCoin = () => {
//     const randomSide = Math.random() < 0.5 ? 'Head' : 'Tail';
//     console.log(randomSide);
//     this.setState((prevState) => ({
//       coinSide: randomSide,
//       headCount: prevState.headCount + (randomSide === 'Head' ? 1 : 0),
//       tailCount: prevState.tailCount + (randomSide === 'Tail' ? 1 : 0)
//     }));
  
//   }

//   render() {
//     const { coinSide, headCount, tailCount } = this.state;

//     return (
//       <div className="App">
//         <h1>Let's Flip a Coin</h1>
//         <button onClick={this.flipCoin}>Flip Coin</button>
//         {coinSide && <Coin side={coinSide} />}
//         <div>
//           <p>Mặt trước: {headCount}</p>
//           <p>Mặt sau: {tailCount}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// ==================================== Ứng dụng tung xúc xắc (roll-dice) ====================================
// import React from 'react';
// import './App.css';
// import RollDice from './roll-dice/RollDice';

// function App() {
//   return (
//     <div className="App">
//       <h1>Let's Roll the Dice!</h1>
//       <RollDice />
//     </div>
//   );
// }

// export default App;


// ==================================== Ứng dụng chọn màu ngẫu nhiên (pick-random-color) ==============================
// import React, { useState } from 'react';
// import "./App.css";
// import ColorContainer from './pick-random-color/ColorContainer';

// const App = () => {
//   const [colors, setColors] = useState([]);

//   // Tạo mảng colors chứa các màu ngẫu nhiên
//   const generateRandomColor = () => {
//     const randomColor = () => Math.floor(Math.random() * 256);
//     const randomRGB = () => `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
//     const newColors = Array.from({ length: 18 }, (_, index) => ({
//       id: index + 1,
//       color: randomRGB()
//     }));
//     setColors(newColors);
//   };

//   return (
//     <div className="App">
//       <h1>Random Color Picker</h1>
//       <button onClick={generateRandomColor}>Generate Colors</button>
//       <ColorContainer colors={colors} />
//     </div>
//   );
// }

// export default App;

// ===================================== Ứng dụng tiêu tiền hộ Elon-Musk =======================================
import React from "react";
import "./App.css";
import Header from "./spend-elon-fortune/Header";
import ListItems from "./spend-elon-fortune/ListItems";


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <ListItems />
      </div>
    );
  }
}


export default App;

// ================================ Ứng Dụng Clock - Bài tập trên lớp Session 3 ===================================
// import React, { Component } from 'react'
// import Clock from './session3/Clock'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Clock/>
//       </div>
//     )
//   }
// }

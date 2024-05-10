import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <img src="https://i.imgur.com/Tc9d8Ns.jpg" alt="photo"></img>
        </div>
        <div className="header-content">
          <h1>Hãy tiêu hết Tiền của Elon Musk!</h1>
          <p>
            Nếu Elon rút toàn bộ cổ phiếu và tài sản của mình ra tiền mặt ngày
            hôm nay thì anh ấy sẽ có khoảng $ 217000000000 (Đô la Mỹ) trong tài
            khoản ngân hàng của anh ấy.
          </p>
          <p>¿Bạn sẽ chi tiêu nó vào việc gì? Có biên nhận của bạn ở cuối!</p>
        </div>
        <div className="navbar-content">
          <div>Còn lại: $ 217000000000 </div>
          <div>Bạn chưa tiêu một đô la nào! bắt đầu mua!</div>
        </div>
      </header>
    );
  }
}

export default Header;

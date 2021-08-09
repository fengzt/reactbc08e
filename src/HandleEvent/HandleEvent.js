import React, { Component } from "react";

export default class HandleEvent extends Component {
  // Khi truyền vào return, không dùng dấu (). Vì nó chỉ chạy khi sự kiện click diễn ra
  // Khác với binding là khi hiện lên đã chạy
  // Gọi theo cách thông thường, nếu gọi trực tiếp trong html -> hàm nặc danh
  // biến event sẽ học sau
  handleClick = () => {
    alert("Feng đẹp trai");
  };

  showMessage = (mess) => {
    alert(`hello ${mess}`);
  };

  render() {
    let name = "Feng1";
    return (
      <div className="container">
        handle event
        <br />
        <button
          id="btn"
          onClick={(event) => {
            // event.target.style.backgroundColor = "red";
            //   alert(`${name} đẹp trai`);
            this.showMessage("Feng");
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

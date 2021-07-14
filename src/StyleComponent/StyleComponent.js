import React, { Component } from "react";

import style from "./StyleComponent.module.css";
// Gọi style như đối tượng, và các selector trong css như thuộc tính
// Và chỉ tác động đúng file được import
// Không bị ảnh hưởng bởi các css khác, kể cả css tổng
// phải dùng kết hợp khi lớp css có các kí tự khác như '-'
// style.fontBold = style['fontBold']
// mục đích: thay đổi css của component khi có sự kiện xảy ra
// Khi truyền style, chỉ nhận vào chuỗi

export default class StyleComponent extends Component {
  render() {
    let fontSize = 50;
    return (
      <div className="container">
        style component
        <p
          style={{
            fontSize: `${fontSize}px`,
            padding: "10px",
            paddingTop: "15px",
          }}
          className={`${style.fontBold} ${style["p-green"]}`}
        >
          Hello
        </p>
      </div>
    );
  }
}

// document.getElementById('id').style.padding = '10px';

// Có 3 cách css
// c1: tổ chức css trong asset, vì index.js đã liên kết với index.css
// c2: import css để chỉnh từng component


// c3: inline style={{}}
// Dấu {} đầu tiên là data binding, giúp viết hàm ở ngoài rồi truyền vào, tương tự như HandleEvent
// Dấu {} là object để truyền vào
// Có thể viết hàm arrow function để truyền vào vẫn được
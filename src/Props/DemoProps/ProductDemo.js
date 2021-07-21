import React, { Component } from "react";

export default class ProductDemo extends Component {
  // trường phái rcc: react class component
  // Hướng dẫn dùng props bằng rcc

  render() {
    // this.props: thuộc tính có sẵn từ RCC (do extends Component)
    // this.props chỉ nhận giá trị từ component cha, không thể thay đổi giá trị, là giá trị read-only
    // this,props có thể nhận BẤT KÌ GIÁ TRỊ nào từ component cha
    /*
            So sánh giữa state và props
            + Giống nhau: Cả 2 đều là thuộc tính sẵn có của class Component để binding dữ liệu -> hiển thị giao diện
            + Khác nhau:
                -+- this.state: dùng để chứa các giá trị THAY ĐỔI trên giao diện, và có thể gán lại được,
                                thông qua phương thức setState
                -+- this.props: dùng để nhận giá trị từ component cha truyền vào, KHÔNG THỂ THAY ĐỔI tại component dùng thuộc tính này
        */

    // khai báo theo es6, bóc tách phần tử
    let { product } = this.props;
    return (
      <div className="card">
        {/* <img src="https://picsum.photos/200/200" alt="..." /> */}
        <img src={product.img} alt="..." />

        <div className="card-body bg-dark text-white">
          {/* <h3>{this.props.productName}</h3> */}
          {/* <h3>{this.props.price}</h3> */}
          <h3>{product.name}</h3>
          <h3>{product.price}</h3>
        </div>
      </div>
    );
  }
}

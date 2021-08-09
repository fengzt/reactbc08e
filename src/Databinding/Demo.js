import React, { Component } from "react";

export default class Demo extends Component {
  name = "Feng";
  // Thuộc tính: dùng this đi kèm. thuộc tính (key): giá trị (value)
  // Biến chỉ có hiệu lực trong phạm vi hàm, phải dùng let, const
  renderName = () => {
      return <span>
        {this.name} đẹp trai
    </span>
  };
  render() {
    //   let productName = "Iphone X";
    let product = {
      name: "Iphone XZ",
      price: 5000,
    };
    // Gọi trong return, dùng dấu {} được gọi là binding lấy giá trị bên ngoài

    return (
        <div className="container">
            <h3>Sản phẩm của : {this.renderName()}</h3>
        <div className="card w-25 bg-dark text-white">
          <img src="https://picsum.photos/200/200" alt="" />

          <div className="card-body">
            {/* <h3>{productName}</h3> */}
            <h3>{product.name}</h3>
            <p>{product.price} $</p>
            <button className="btn btn-success">Xem chi tiết</button>
          </div>
        </div>
      </div>
    );
  }
}

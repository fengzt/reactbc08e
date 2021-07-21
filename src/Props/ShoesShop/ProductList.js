import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProduct() {
    // this.props là thuộc tính
    // let { arrProduct } = this.props; // es6
    let arrProduct = this.props.arrProduct; // es5
    return arrProduct.map((product, index) => {
      return (
        <div className="col-4 mt-2" key={index}>
          <ProductItem prd={product} />
        </div>
      );
    });
  }
  render() {
    // Từ mảng, tạo ra giao diện như bài tập, và sử dụng thẻ <ProductItem /> để hiển thị thông tin
    // console.log(this.props.arrProduct);
    return (
      <div>
        <h2 className="text-center">Shoes Shop</h2>
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}

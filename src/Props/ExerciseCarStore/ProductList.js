import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProductList = () => {
    let { productData, viewDetail } = this.props;
    return productData.map((product, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem item={product} viewDetail={viewDetail} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.renderProductList()}</div>
      </div>
    );
  }
}

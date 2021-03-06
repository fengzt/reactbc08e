import { render } from "@testing-library/react";
import React, { Component } from "react";
import ProductItemCart from "./ProductItemCart";

export default class ProductListCart extends Component {
  //   renderSanPham = () => {
  //       let { mangSanPham } = this.props;
  //       console.log(mangSanPham);
  //     return mangSanPham.map((product, index) => {
  //       return (
  //         <div className="col-4" key={index}>
  //           <ProductItemCart product={product} />
  //         </div>
  //       );
  //     });
  //   };


  render() {
    let { mangSanPham, themGioHang } = this.props;
    return (
      <div className="row">
        {mangSanPham.map((product, index) => {
          return (
            <div className="col-4" key={index}>
              <ProductItemCart product={product} themGioHang={themGioHang} />
            </div>
          );
        })}
      </div>
    );
  }
}

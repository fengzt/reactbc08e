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

  tinhTongTien = () => {
    let { gioHang } = this.state;
    let tongTien = gioHang.reduce((thanhTien, sanPham, index) => {
      return (thanhTien += sanPham.soLuong * sanPham.giaBan);
    }, 0);
    return tongTien.toLocaleString();
  };

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

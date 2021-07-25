import React, { Component } from "react";
import Cart from "./Cart";
import ProductListCart from "./ProductListCart";
// import dataPhone from "../../assets/data/dataPhone.json"
export default class ExerciseCart extends Component {
  dataPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    gioHang: [
      //   {
      //     maSP: 3,
      //     tenSP: "Iphone XS Max",
      //     manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      //     giaBan: 27000000,
      //     hinhAnh: "./img/applephone.jpg",
      //     soLuong: 1,
      //   },
    ],
  };

  // state nằm ở đâu thì phương thức setState sẽ được khai báo tại Component đó
  themGioHang = (sanPhamClick) => {
    // console.log(sanPhamClick);
    //spread operator
    // Khi click vào, sanPhamClick thêm thuộc tính soLuong. Vì mangSanPham không có thuộc tính này
    let spGioHang = { ...sanPhamClick, soLuong: 1 };

    // Lấy sp đó thêm vào giỏ hàng
    let gioHangCapNhat = [...this.state.gioHang];

    // Kiểm tra sanPhamClick có tồn tại trong mảng giỏ hàng hay chưa

    // C1: dùng findIndex
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
    }

    // C2: dùng find
    // "=" gán địa chỉ ô nhớ
    // let spGH = gioHangCapNhat.find(sp => sp.maSP === spGioHang.maSP);
    // if (spGH) {
    //     spGH.soLuong += 1;
    // } else {
    //     // Thêm vào giỏ hàng
    //     gioHangCapNhat.push(spGioHang);
    //     // gioHangCapNhat = [...gioHangCapNhat, spGioHang]
    // }

    // setState: cập nhật lại giá trị mới cho giỏ hàng
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  xoaGioHang = (maSPClick) => {
    console.log(maSPClick);

    //Tìm index
    // let gioHangCapNhat = [...this.state.gioHang];
    let { gioHang } = this.state;
    // let index = gioHang.findIndex((sp) => sp.maSP === maSPClick);
    // if (index !== -1) {
    //   gioHang.splice(index, 1);
    // }

    gioHang = gioHang.filter((sp) => sp.maSP !== maSPClick);

    // Xử lý setState => thay đổi gioHang
    this.setState({
      gioHang: gioHang,
    });
  };

  tangGiamSoLuong = (maSPClick, soLuong) => {
    console.log(maSPClick, soLuong);
    let { gioHang } = this.state;
    let spTangGiam = gioHang.find((sp) => sp.maSP === maSPClick);
    if (spTangGiam) {
      // 2 + 1 = 3 => tăng
      // 2 + -1 = 1 => giảm
      spTangGiam.soLuong += soLuong;
      if (spTangGiam.soLuong < 1) {
        alert("Số lượng tối thiểu là 1!");
        // 0 - - 1 = 1
        spTangGiam.soLuong -= soLuong;
      }
    }
    this.setState({
      gioHang: gioHang,
    });
  };

  tinhTongSoLuong = () => {
    let { gioHang } = this.state;
    let tongSoLuong = gioHang.reduce((soLuong, sanPham, index) => {
      return (soLuong += sanPham.soLuong);
    }, 0);
    return tongSoLuong.toLocaleString();
  };

  tinhTongTien = () => {
    let { gioHang } = this.state;
    let tongTien = gioHang.reduce((thanhTien, sanPham, index) => {
      return (thanhTien += sanPham.soLuong * sanPham.giaBan);
    }, 0);
    return tongTien.toLocaleString();
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Bài tập giỏ hàng</h3>
        <div className="text-right">
          <span
            style={{ cursor: "pointer" }}
            className="text text-danger font-weight-bold"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.tinhTongTien()} - {this.tinhTongSoLuong()})
          </span>
        </div>
        <Cart
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
          tinhTongTien={this.tinhTongTien}
        />
        <ProductListCart
          mangSanPham={this.dataPhone}
          themGioHang={this.themGioHang}
        />
      </div>
    );
  }
}

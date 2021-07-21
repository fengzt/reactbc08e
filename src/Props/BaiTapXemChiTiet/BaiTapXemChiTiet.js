import React, { Component } from "react";
import SanPham from "./SanPham";

export default class BaiTapXemChiTiet extends Component {
  mangDienThoai = [
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
      hinhAnh: "./img/BaiTapXemChiTiet/vsphone.jpg",
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
      hinhAnh: "./img/BaiTapXemChiTiet/meizuphone.jpg",
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
      hinhAnh: "./img/BaiTapXemChiTiet/applephone.jpg",
    },
  ];

  state = {
    sanPhamChiTiet: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/BaiTapXemChiTiet/applephone.jpg",
    },
  };

  renderPhone() {
    return this.mangDienThoai.map((dt, index) => {
      // callback Function là 1 hàm chưa được gọi, đóng vai trò là tham số truyền đi.
      // Sẽ được gọi tại hàm hoặc component nhận hàm này
      return (
        <div className="col-4" key={index}>
          <SanPham sp={dt} xemCT={this.xemChiTiet} />
        </div>
      );
    });
  }
    
  // Nên viết theo arrow function, không viết (){} / sẽ hiểu theo es5

  xemChiTiet = (dtClick) => {
    console.log(dtClick);

    // set lại state khi click
    this.setState({
      sanPhamChiTiet: dtClick,
    });
  };
  //  bạn sợ trễ bài ko, bạn học bài tiếp theo r cái này fix sau hay h fix tiếp nhỉ, sợ ko theo kịp bài
  // vậy để cuối buổi học hen?
  //  ok , cho mình thêm 1p , cuoi gio inh fix nh ekoa
  render() {
    let { sanPhamChiTiet } = this.state; //bóc tách phần tử sanPhamChiTiet từ State
    return (
      <div className="container">
        <h3 className="text-center">Danh sách sản phẩm</h3>
        <div className="row">{this.renderPhone()}</div>

        <div className="row mt-5">
          <div className="col-4 text-center">
            <h3>{sanPhamChiTiet.tenSP}</h3>
            <img src={sanPhamChiTiet.hinhAnh} alt="..." width={300} />
          </div>
          <div className="col-8">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              {/* className="table" giúp có đường kẻ và giãn cách */}
              <tr>
                <td>Màn hình</td>
                <td>{sanPhamChiTiet.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{sanPhamChiTiet.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{sanPhamChiTiet.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{sanPhamChiTiet.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{sanPhamChiTiet.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{sanPhamChiTiet.rom}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

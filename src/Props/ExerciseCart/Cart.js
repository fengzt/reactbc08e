import React, { Component } from "react";

export default class Cart extends Component {
  renderGioHang = () => {
    let { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return gioHang.map((spGioHang, index) => {
      return (
        <tr key={index}>
          <td>{spGioHang.maSP}</td>
          <td>{spGioHang.tenSP}</td>
          <td>
            <img src={spGioHang.hinhAnh} width={50} alt="..." />
          </td>
          <td>
            <button
              onClick={() => tangGiamSoLuong(spGioHang.maSP, 1)}
              className="btn btn-primary mr-2"
            >
              +
            </button>
            {spGioHang.soLuong}
            <button
              onClick={() => tangGiamSoLuong(spGioHang.maSP, -1)}
              className="btn btn-primary mr-2"
            >
              -
            </button>
          </td>
          <td>{spGioHang.giaBan.toLocaleString()}</td>
          <td>{(spGioHang.giaBan * spGioHang.soLuong).toLocaleString()}</td>
          <td>
            <button
              onClick={() => xoaGioHang(spGioHang.maSP)}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    // Thêm className="modal-lg" vào modal-dialog
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            style={{ maxWidth: "750px" }}
            className="modal-dialog"
            role="document"
          >
            <div className="modal-content" style={{ width: "750px" }}>
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Số lượng</th>
                      <th>Giá bán</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderGioHang()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

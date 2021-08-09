import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { sp, xemCT } = this.props;
    return (
      <div className="card">
        <img src={sp.hinhAnh} alt="..." height={300} />
        <div className="card-body">
          <h3 style={{ fontSize: "20px" }}>{sp.tenSP}</h3>
          <p>{sp.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              xemCT(sp);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}

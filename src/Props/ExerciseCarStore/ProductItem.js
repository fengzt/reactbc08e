import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item, viewDetail } = this.props;
    // Thêm vào để bật modal hiện lên
    //       data-toggle="modal"
    // data-target="#modelId"
    return (
      <div className="card">
        <img src={item.img} alt="..." />
        <div className="card-body">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button
            className="btn btn-success"
            data-toggle="modal"
                    data-target="#modelId"
                    onClick={() => {
                        viewDetail(item)
                    }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
// Thư viện kết nối redux
import { connect } from "react-redux";

class GioHang extends Component {
  renderGioHang = () => {
    // Gọi gioHang đúng với mapStateToProps đã gọi
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            <img src={spGH.hinhAnh} width={50} alt="..." />
          </td>
          <td>
            <button
              className="btn btn-outline-primary mr-2"
              onClick={() => {
                const action = {
                  type: "TANG_GIAM_SO_LUONG",
                  maSPClick: spGH.maSP,
                  soLuong: 1,
                };
                //Gọi hàm dispatch gửi dữ liệu lên redux
                this.props.dispatch(action);
              }}
            >
              +
            </button>
            {spGH.soLuong}
            <button
              className="btn btn-outline-primary mr-2"
              onClick={() => {
                const action = {
                  type: "TANG_GIAM_SO_LUONG",
                  maSPClick: spGH.maSP,
                  soLuong: -1,
                };
                //Gọi hàm dispatch gửi dữ liệu lên redux
                this.props.dispatch(action);
              }}
            >
              -
            </button>
          </td>
          <td>{spGH.giaBan.toLocaleString()}</td>
          <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                // Tạo ra action chứa dữ liệu gửi lên redux
                // Cách 1
                // const action = {
                //   type: "XOA_GIO_HANG",
                //   maSPClick: spGH.maSP,
                // };
                // Dùng hàm this.props.dispatch từ redux để gửi dữ liệu về redux (reducer)
                // Hay dispatch redux
                // this.props.dispatch(action);
                this.props.xoaGioHang(spGH.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    //b4-modal-defaul
    //"modal-dialog modal-lg" để cho modal bự ra
    // Gọi thành công redux: ở đây là thuộc tính gioHang và dispatch
    console.log(this.props);
    return (
      <div>
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

// Cách 2: mapDispatchToProps
// Hàm này sẽ giúp gửi dữ liệu lên redux hàng loạt (giống hệt this.props.dispatch)
const mapDispatchToProps = (dispatch) => {
  // trả về props là hàm
  return {
    xoaGioHang: (maSPClick) => {
      const action = {
        type: "XOA_GIO_HANG",
        maSPClick: maSPClick,
      };
      dispatch(action);
    },
  };
};


// Chỉ được dùng 1 trong 2 cách, nếu đã dùng mapDispatchToProps thì this.props.dispatch sẽ bị thay thế hoàn toàn
// Vì vậy, theo cách 2 chỉ làm đúng được chức năng xóa, vì tăng giảm chưa viết
// Nên theo cách 1, dễ hiểu hơn lúc bắt đầu dùng redux


// Hàm này giúp lấy giá trị state từ redux về biến đổi thành props của component
// gioHangReducer gọi đúng với tên đã đặt ở configStore
// Khi nào cần lấy dữ liệu từ redux mới gọi hàm mapStateToProps
const mapStateToProps = (rootReducer) => {
  // trả về props là giá trị
  return {
    gioHang: rootReducer.gioHangReducer,
  };
};

// kết hợp component GioHang với redux - HOC (buổi 10)
// Hàm lồng hàm: a(1)(2): a()=>{blabla return function(){}}
// biến 1 để chạy blabla => có kết quả chạy vào hàm function trong return cùng với biến 2
// const ComponentGioHangRedux = connect(mapStateToProps)(GioHang);
const ComponentGioHangRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(GioHang);


export default ComponentGioHangRedux;

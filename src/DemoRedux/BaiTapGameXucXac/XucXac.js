import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  // Nào tính toán được thì không đưa vào lưu trữ state
  renderKetQua = () =>{
    // Tính tổng điểm
    let tongDiem = this.props.mangXucXac.reduce((tong, xxnn, index) => {
      return (tong += xxnn.diem);
    }, 0);

    let ketQua = tongDiem > 11 ? ' Tài' : ' Xỉu';
    
    return `${tongDiem} - ${ketQua}`

  }
  render() {
    // props(redux)
    let { mangXucXac } = this.props;

    // console.log(mangXucXac);
    // Dùng container để ngăn hiện scroll ngang. Vì row 100% + margin 2 bên (mặc định)
    // thẻ button chỉ padding theo chiều ngang, chiều dọc hạn chế -> sinh ra thẻ span để bọc text -> dễ chỉnh
    // img link theo public cho đơn giản, tránh import nhiều
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <button
              className="btn btn-danger"
              onClick={() => {
                const action = {
                  type: "DAT_CUOC",
                  banChon: true,
                };
                this.props.dispatch(action);
              }}
            >
              <div className="p-5 display-4">Tài</div>
            </button>
          </div>
          <div className="col-6 text-center">
            <img src={mangXucXac[0].hinhAnh} width={50} alt="..." />
            <img src={mangXucXac[1].hinhAnh} width={50} alt="..." />
            <img src={mangXucXac[2].hinhAnh} width={50} alt="..." />
            <br />
            <div className="display-4">{this.renderKetQua()}</div>
          </div>

          <div className="col-3">
            <button
              className="btn bg-dark text-white"
              onClick={() => {
                const action = {
                  type: "DAT_CUOC",
                  banChon: false,
                };
                // Props từ redux cung cấp để gửi action đi baiTapGameXucXacReducer
                this.props.dispatch(action);
              }}
            >
              <div className="p-5 display-4">Xỉu</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangXucXac: rootReducer.baiTapGameXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);

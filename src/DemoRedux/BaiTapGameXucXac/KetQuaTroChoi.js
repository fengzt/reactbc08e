import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    //C1
    let { banChon, soBanChoi, soBanThang } = this.props.baiTapGameXucXacReducer;
    return (
      <div className="container text-center">
        <div className="display-4">
          Bạn chọn:
          <span className="text-warning">{banChon ? " Tài" : " Xỉu"}</span>
        </div>
        <div className="display-4">
          Số bàn thắng: <span className="text-success">{soBanThang}</span>
        </div>
        <div className="display-4 mb-5">
          Tổng số bàn chơi: <span className="text-primary">{soBanChoi}</span>
        </div>
        <button
          className="btn btn-success"
          onClick={() => {
            const action = {
              type: "PLAY_GAME",
              // Không gửi các state khác, tránh thao túng kết quả trò chơi
              // Chỉ tạo tín hiệu cho reducer random lại mảng mới
            };
            this.props.dispatch(action);
          }}
        >
          <div className="display-4">Play game</div>
        </button>
        <button className="btn btn-primary ml-5" onClick={() => {
          const action = {
            type: "RESET_GAME",
          }
          this.props.dispatch(action);
        }}>
          <div className="display-4">Reset</div>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    // C1
    baiTapGameXucXacReducer: rootReducer.baiTapGameXucXacReducer,
    // C2
    // banChon: rootReducer.baiTapGameXucXacReducer.banChon,
    // soBanThang: rootReducer.baiTapGameXucXacReducer.soBanThang,
    // soBanChoi: rootReducer.baiTapGameXucXacReducer.soBanChoi,
  };
};

export default connect(mapStateToProps)(KetQuaTroChoi);

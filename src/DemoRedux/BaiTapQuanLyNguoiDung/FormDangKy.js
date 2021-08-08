import React, { Component } from "react";
import { connect } from "react-redux";

class FormDangKy extends Component {
  state = {
    values: {
      // name: value -> được bóc tách từ event.target
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDienThoai: "",
      maLoaiNguoiDung: "KhachHang",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDienThoai: "",
      maLoaiNguoiDung: "",
    },
  };

  // Nghiệp vụ chỉnh sửa
  // handleChangeInput thay đổi giá trị -> render -> đè lại giá trị nguoiDungChinhSua nên k gõ được
  // Giải pháp:
  // -> Chuyển all state lên redux để xử lý, đảm bảo thông tin setState luôn mới
  handleChangeInput = (event) => {
    let { value, name } = event.target; // {valueEmai,email} = <input typeEmail = "email" name="email"/>

    // Cần tạo mảng mới để redux nhận thấy sự thay đổi
    // let newValues = { ...this.state.values }; // newValues = {taiKhoan:'',matKhau: ''....}
    let newValues = { ...this.props.nguoiDung.values };
    newValues[name] = value; // newValues['email'] = valueEmail

    let regex; // regex = undefined

    let attriValue = ""; // attriValue = null
    if (event.target.getAttribute("typeemail")) {
      // giá trị true : tìm thấy typeemail trong event.target
      attriValue = event.target.getAttribute("typeemail"); // attriValue = email mà người dùng nhập
      // regex email javascript
      regex =
        /^(([^<>()[\],;:\s@"]+(\.[^<>()[\],;:\s@]+)*)|(".+"))@(([^<>()[\],;:\s@"]+\.)+[^<>()[\],;:\s@]{2,})$/i;
    }

    // let newErrors = { ...this.state.errors };
    let newErrors = { ...this.props.nguoiDung.errors };
    let messageError = "";
    // Bị lỗi mới gắn lỗi, không lỗi thì chuỗi rỗng
    if (value.trim() === "") {
      messageError = name + " không được bỏ trống!";
    }

    // Nếu là email, regex có giá trị nên là true
    if (regex) {
      if (attriValue === "email" && value !== "") {
        // kiểm tra value có đúng regex không
        // sai mới báo lỗi
        if (!regex.test(value)) {
          messageError = name + " phải đúng định dạng!";
        }
      }
    }

    newErrors[name] = messageError;

    // Xử lý setState
    // this.setState({
    //   values: newValues,
    //   errors: newErrors,
    // });

    this.props.dispatch({
      type: "HANDLE_CHANGE_INPUT",
      nguoiDung: {
        values: newValues,
        errors: newErrors,
      },
    });

    // Do hàm setState là hàm bất đồng bộ
    // this.setState(
    //   {
    //     [name]: value,
    //   },
    //   () => {
    //     // Kiểm tra giá trị state thay đổi sau khi render
    //     // console.log(this.state);
    //   }
    // );
  };

  handleSubmit = (event) => {
    // Cản sự kiện submit browser => cản load lại trang khi submit
    event.preventDefault();
    console.log("state", this.state);

    // Bắt trường hợp lỗi => không cho submit
    let valid = true;

    // Duyệt bắt errors phải = rỗng mới hợp lệ
    for (let key in this.props.nguoiDung.errors) {
      if (this.props.nguoiDung.errors[key] !== "") {
        valid = false;
        break;
      }
    }

    // Duyệt bắt all values phải khác rỗng mới hợp lệ
    for (let key in this.props.nguoiDung.values) {
      if (this.props.nguoiDung.values[key] === "") {
        valid = false;
        break;
      }
    }
    console.log(valid);
    if (!valid) {
      alert("Dữ liệu không hợp lệ");
      return;
    }
    // submit lên redux tại đây khi all hợp lệ
    // Cách 1:
    const action = {
      type: "THEM_NGUOI_DUNG",
      nguoiDung: this.props.nguoiDung.values,
    };
    this.props.dispatch(action);

    // Cách 2:
    // this.props.themNguoiDung(this.state.values);
  };

  render() {
    let { taiKhoan, hoTen, matKhau, email, soDienThoai, maLoaiNguoiDung } =
      this.props.nguoiDung.values;
    // Dùng onSubmit ở thẻ form để enter cũng gửi form đi, không nhất thiết phải bấm 'Đăng kí'
    return (
      <form className="card mt-5" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white">
          <h2>Form Đăng Ký</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>Tài Khoản</p>
                <input
                  value={taiKhoan}
                  className="form-control"
                  name="taiKhoan"
                  // Dùng onBlur, vừa rời input sẽ bắt sự kiện ngay, khác với onChange, thay đổi mới bắt sự kiện
                  onBlur={this.handleChangeInput}
                  //   onBlur={(e) => {console.log(e.target)}}
                />
                <p style={{ color: "red" }}>
                  {this.props.nguoiDung.errors.taiKhoan}
                </p>
              </div>
              <div className="form-group">
                <p>Mật Khẩu</p>
                <input
                  value={matKhau}
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={this.handleChangeInput}
                />
                <p style={{ color: "red" }}>
                  {this.props.nguoiDung.errors.matKhau}
                </p>
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  value={email}
                  typeemail="email"
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p style={{ color: "red" }}>
                  {this.props.nguoiDung.errors.email}
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Họ Tên</p>
                <input
                  value={hoTen}
                  className="form-control"
                  name="hoTen"
                  onChange={this.handleChangeInput}
                />
                <p style={{ color: "red" }}>
                  {this.props.nguoiDung.errors.hoTen}
                </p>
              </div>
              <div className="form-group">
                <p>Số Điện Thoại</p>
                <input
                  value={soDienThoai}
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p style={{ color: "red" }}>
                  {this.props.nguoiDung.errors.soDienThoai}
                </p>
              </div>
              <div className="form-group">
                <p>Mã Loại Người Dùng</p>
                <select
                  value={maLoaiNguoiDung}
                  className="form-control"
                  name="maLoaiNguoiDung"
                  onChange={this.handleChangeInput}
                >
                  <option value="KhachHang">Khách Hàng</option>
                  <option value="QuanTri">Quản Trị</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-left">
          <button className="btn btn-outline-success mt-2" type="submit">
            Đăng Kí
          </button>
          <button
            onClick={() => {
              // Cập nhật dữ liệu
              const action = {
                type: "CAP_NHAT_NGUOI_DUNG",
                nguoiDungCapNhat: this.props.nguoiDung.values,
              };
              this.props.dispatch(action);
            }}
            className="btn btn-outline-primary mt-2 ml-2"
          >
            Cập Nhật
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungChinhSua: state.baiTapQuanLyNguoiDungReducer.nguoiDungChinhSua,
    nguoiDung: state.baiTapQuanLyNguoiDungReducer.nguoiDung,
  };
};

// const mapStateToDispatch = (dispatch) => {
//   return {
//     themNguoiDung: (nguoiDung) => {
//       const action = {
//         type: "THEM_NGUOI_DUNG",
//         nguoiDung,
//       };
//       dispatch(action);
//     },
//   };
// };
// mapStateToDispatch
export default connect(mapStateToProps)(FormDangKy);

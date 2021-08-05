import React, { Component } from "react";
import { connect } from "react-redux";

class FormDangKy extends Component {
  state = {
    values: {
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

  handleChangeInput = (event) => {
    let { value, name } = event.target; // {valueEmai,email} = <input typeEmail = "email" name="email"/>

    let newValues = { ...this.state.values }; // newValues = {taiKhoan:'',matKhau: ''....}
    newValues[name] = value; // newValues['email'] = valueEmail

    let regex; // regex = undefine

    let attriValue = "";
    if (event.target.getAttribute("typeemail")) {
      // !undefine
      attriValue = event.target.getAttribute("typeemail"); // attriValue = email
      // regex email javascript
      regex =
        /^(([^<>()[\],;:\s@"]+(\.[^<>()[\],;:\s@]+)*)|(".+"))@(([^<>()[\],;:\s@"]+\.)+[^<>()[\],;:\s@]{2,})$/i;
    }

    let newErrors = { ...this.state.errors };
    let messageError = "";
    // Bị lỗi mới gắn lỗi, không lỗi thì chuỗi rỗng
    if (value.trim() === "") {
      messageError = name + " không được bỏ trống!";
    }

    // Nếu là email, regex có giá trị nên là true
    if (regex) {
      if (attriValue === "email") {
        // kiểm tra value có đúng regex không
        // sai mới báo lỗi
        if (!regex.test(value)) {
          messageError = name + " phải đúng định dạng!";
        }
      }
    }

    newErrors[name] = messageError;

    // Xử lý setState
    this.setState({
      values: newValues,
      errors: newErrors,
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

  // Viết trên thẻ form, enter là submit, không cần phải bấm đúng button
  handleSubmit = (event) => {
    // Cản sự kiện submit browser
    event.preventDefault();
    console.log("state", this.state);

    // Bắt trường hợp lỗi => không cho submit
    let valid = true;

    // Duyệt bắt errors phải = rỗng mới hợp lệ
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        valid = false;
        break;
      }
    }

    // Duyệt bắt all values phải khác rỗng mới hợp lệ
    for (let key in this.state.values) {
      if (this.state.values[key] === "") {
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
    const action = {
      type: "THEM_NGUOI_DUNG",
      nguoiDung: this.state.values,
    };
    this.props.dispatch(action);
  };

  render() {
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
                  className="form-control"
                  name="taiKhoan"
                  // Dùng onBlur, vừa rời input sẽ bắt sự kiện ngay, khác với onChange, thay đổi mới bắt sự kiện
                  onBlur={this.handleChangeInput}
                  //   onBlur={(e) => {console.log(e.target)}}
                />
                <p>{this.state.errors.taiKhoan}</p>
              </div>
              <div className="form-group">
                <p>Mật Khẩu</p>
                <input
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={this.handleChangeInput}
                />
                <p>{this.state.errors.matKhau}</p>
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  typeemail="email"
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p>{this.state.errors.email}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Họ Tên</p>
                <input
                  className="form-control"
                  name="hoTen"
                  onChange={this.handleChangeInput}
                />
                <p>{this.state.errors.hoTen}</p>
              </div>
              <div className="form-group">
                <p>Số Điện Thoại</p>
                <input
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p>{this.state.errors.soDienThoai}</p>
              </div>
              <div className="form-group">
                <p>Mã Loại Người Dùng</p>
                <select
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
          <button className="btn btn-outline-primary mt-2 ml-2">
            Cập Nhật
          </button>
        </div>
      </form>
    );
  }
}

// const mapStateToDispatch = (action) => {
//     return {

//     }
// }

export default connect()(FormDangKy);

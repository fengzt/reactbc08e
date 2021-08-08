// Nên lưu dạng object để khi có state phát sinh khác thì vẫn thêm vào được
const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      hoTen: "Nguyễn Văn A",
      matKhau: "123456789",
      email: "nguyenvana@gmail.com",
      soDienThoai: "0311313131",
      maLoaiNguoiDung: "KhachHang",
    },
    {
      taiKhoan: "nguyenvanb",
      hoTen: "Nguyễn Văn B",
      matKhau: "123456789",
      email: "nguyenvanb@gmail.com",
      soDienThoai: "0311313131",
      maLoaiNguoiDung: "QuanTri",
    },
  ],
  nguoiDungChinhSua: {
    taiKhoan: "nguyenvana",
    hoTen: "Nguyễn Văn A",
    matKhau: "123456789",
    email: "nguyenvana@gmail.com",
    soDienThoai: "0311313131",
    maLoaiNguoiDung: "KhachHang",
  },
  nguoiDung: {
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
  },
  nguoiDungCapNhat: {},
};

export const baiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  // console.log("action", action);
  switch (action.type) {
    case "THEM_NGUOI_DUNG": {
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      // state.mangNguoiDung.push(action.nguoiDung)

      return { ...state };
    }
    case "XOA_NGUOI_DUNG": {
      //   const mangNguoiDungCapNhat = [...state.mangNguoiDung];
      state.mangNguoiDung = state.mangNguoiDung.filter(
        (nguoiDung) => nguoiDung.taiKhoan !== action.taiKhoan
      );
      return { ...state };
    }
    case "CHINH_SUA": {
      state.nguoiDung.values = action.nguoiDungChinhSua;
      state.nguoiDung = { ...state.nguoiDung };
      return { ...state };
    }
    case "HANDLE_CHANGE_INPUT": {
      state.nguoiDung = action.nguoiDung;

      return { ...state };
    }
    case "CAP_NHAT_NGUOI_DUNG": {
      console.log(action.nguoiDungCapNhat)
      const mangNguoiDungCapNhat = [...state.mangNguoiDung];

      // Tìm ra người dùng cần cập nhật

      // Cách 1
      // let nguoiDungCapNhat = mangNguoiDungCapNhat.find(
      //   (nguoiDung) => nguoiDung.taiKhoan === action.nguoiDungCapNhat.taiKhoan
      // );

      // if (nguoiDungCapNhat) {
      //   nguoiDungCapNhat.hoTen = action.nguoiDungCapNhat.hoTen;
      //   nguoiDungCapNhat.email = action.nguoiDungCapNhat.email;
      //   nguoiDungCapNhat.soDienThoai = action.nguoiDungCapNhat.soDienThoai;
      //   nguoiDungCapNhat.matKhau = action.nguoiDungCapNhat.matKhau;
      //   nguoiDungCapNhat.maLoaiNguoiDung =
      //     action.nguoiDungCapNhat.maLoaiNguoiDung;
      // }
      // console.log(mangNguoiDungCapNhat);

      // Cách 2
      let index = mangNguoiDungCapNhat.findIndex(
        (nguoiDung) => nguoiDung.taiKhoan === action.nguoiDungCapNhat.taiKhoan
      );
      if (index !== -1) {
        mangNguoiDungCapNhat[index] = action.nguoiDungCapNhat;
      }

      state.mangNguoiDung = mangNguoiDungCapNhat;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

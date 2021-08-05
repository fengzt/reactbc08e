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
      email: "nguyenvana@gmail.com",
      soDienThoai: "0311313131",
      maLoaiNguoiDung: "QuanLy",
    },
  ],
};

export const baiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  console.log("action", action);
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
    default:
      return { ...state };
  }
};

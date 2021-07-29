const gioHang = [
  //   {
  //     maSP: 1,
  //     tenSP: "Iphone",
  //     giaBan: 1000,
  //     soLuong: 1,
  //     hinhAnh: "https://picsum.photos/200/200",
  //   },
];

export const gioHangReducer = (state = gioHang, action) => {
  // console.log(action)
  // All state sẽ cùng chạy, phân biệt dựa vào type
  // gọi các thuộc tính action nhận được từ GioHang, phải có action.
  // vd: action.type, action.maSPClick
  switch (action.type) {
    case "XOA_GIO_HANG": {
      const gioHangCapNhat = state.filter((sp) => sp.maSP !== action.maSPClick);
      return [...gioHangCapNhat];
    }
    case "THEM_GIO_HANG": {
      // Dựa vào sanPhamClick để tạo đối tượng spGH mới có thêm thuộc tính soLuong
      const spGH = { ...action.sanPhamClick, soLuong: 1 };
      // kiểm tra sản phẩm có trong giỏ hàng chưa

      let gioHangCapNhat = state; // đặt lại tên biến
      let spGioHang = gioHangCapNhat.find((sp) => sp.maSP === spGH.maSP);
      // Có tồn tại trong giỏ hàng
      if (spGioHang) {
        spGioHang.soLuong += 1;
      } else {
        // Không tồn tại
        gioHangCapNhat.push(spGH);
      }

      console.log("gioHangCapNhat", gioHangCapNhat);
      // imutable: tính bất biến object phải trả về object mới, arr phải về arr mới => sao chép ra vùng mới
      // imutable là tính chất của redux. Redux chỉ nhận ra sự thay đổi của arr, object thông qua địa chỉ mới. Khi đó mới chạy reducer
      return [...gioHangCapNhat];
      // trả về state mới (lưu ý: kiểu dữ liệu state trả về phải giống với state cũ)
    }
    // Nếu bị báo lỗi thì đổi return state vào trong switch
    // Vì switch phải có default : xử lý các trường hợp khác ngoài case
      case "TANG_GIAM_SO_LUONG": {
          let gioHangCapNhat = [...state];

          let spGH = gioHangCapNhat.find(sp => sp.maSP === action.maSPClick);
          if (spGH) {
              spGH.soLuong += action.soLuong;
              if (spGH.soLuong < 1) {
                  alert('Số lượng tối thiểu bằng 1');
                  spGH.soLuong -= action.soLuong;
            }
          }
          // Đã tách ra ô nhớ mới ở gioHangCapNhat dòng 45, tách tiếp dòng này cho chắc ăn thêm 101% không bị báo lỗi redux
          return [...gioHangCapNhat]
    }
    default:
      return state;
  }
  // return state;
};

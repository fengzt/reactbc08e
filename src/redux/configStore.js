import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";

const gioHang = [
  //   {
  //     maSP: 1,
  //     tenSP: "Iphone",
  //     giaBan: 1000,
  //     soLuong: 1,
  //     hinhAnh: "https://picsum.photos/200/200",
  //   },
];

// state trong redux là reducer
const rootReducer = combineReducers({
  // Các state ứng dụng sẽ được lưu tại đây
  // Giá trị ban đầu là mảng gioHang
  // Chứa hàm để tạo nên state, chứ không chứa state
  // gọi gioHangReducer đúng trong mapStateToProps ở GioHang.js
    gioHangReducer: gioHangReducer,
//   gioHangReducer: (state = gioHang, action) => {
//     // console.log(action)
//     // All state sẽ cùng chạy, phân biệt dựa vào type
//     switch (action.type) {
//       case "XOA_GIO_HANG": {
//         const gioHangCapNhat = state.filter((sp) => sp.maSP !== action.maSPClick);
//         return [...gioHangCapNhat];
//       }
//       case "THEM_GIO_HANG": {
//         // Dựa vào sanPhamClick để tạo đối tượng spGH mới có thêm thuộc tính soLuong
//         const spGH = { ...action.sanPhamClick, soLuong: 1 };
//         // kiểm tra sản phẩm có trong giỏ hàng chưa

//         let gioHangCapNhat = state; // đặt lại tên biến
//         let spGioHang = gioHangCapNhat.find((sp) => sp.maSP === spGH.maSP);
//         // Có tồn tại trong giỏ hàng
//         if (spGioHang) {
//           spGioHang.soLuong += 1;
//         } else {
//           // Không tồn tại
//           gioHangCapNhat.push(spGH);
//         }

//         console.log("gioHangCapNhat", gioHangCapNhat);
//         // imutable: tính bất biến object phải trả về object mới, arr phải về arr mới => sao chép ra vùng mới
//         // imutable là tính chất của redux. Redux chỉ nhận ra sự thay đổi của arr, object thông qua địa chỉ mới. Khi đó mới chạy reducer
//         return [...gioHangCapNhat];
//         // trả về state mới (lưu ý: kiểu dữ liệu state trả về phải giống với state cũ)
//       }
//       // Nếu bị báo lỗi thì đổi return state vào trong switch
//       // Vì switch phải có default : xử lý các trường hợp khác ngoài case
//       default:
//         return state;
//     }
//     // return state;
//   },

  // reducerB: ( state='', action )=> {
  // console.log(action)
  // return state;
  // },

  // reducerC: ( state='', action )=> {
  // console.log(action)

  // return state;
  // }
});

export const store = createStore(rootReducer);

import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";
// export const thì phải có 2 dấu {} và trỏ đúng tên
// export default thì không cần 2 dấu {}, và có thể đặt tên bất kì, miễn đúng đường dẫn
import { baiTapGameXucXacReducer } from "./reducers/baiTapGameXucXacReducer";
import { baiTapQuanLyNguoiDungReducer } from "./reducers/baiTapQuanLyNguoiDungReducer"

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

  // reducerB: ( state='', action )=> {
  // console.log(action)
  // return state;
  // },

  // reducerC: ( state='', action )=> {
  // console.log(action)

  // return state;
  // }
  baiTapGameXucXacReducer,
  baiTapQuanLyNguoiDungReducer,
});

export const store = createStore(
  rootReducer,
  // github.com/zalmoxisus/redux-devtools-extension#installation -> 1.1 Basic store//
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

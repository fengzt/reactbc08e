// Liệt kê các state của ứng dụng baiTapGameXucXac
const stateDefault = {
  soBanChoi: 0,
  soBanThang: 0,
  banChon: true,
  mangXucXac: [
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
    { hinhAnh: "./img/gameXucXac/2.png", diem: 2 },
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
  ],
};

// reducer giống state, nhưng chứa thêm cả tham số action
export const baiTapGameXucXacReducer = (state = stateDefault, action) => {
  //   console.log(action);
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.banChon;
      return { ...state };
    }
    case "PLAY_GAME": {
      // Tạo ra xúc sắc ngẫu nhiên từ số random
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        // Mỗi lần tạo ra 1 số ngẫu nhiên
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        // Từ số ngẫu nhiên, tạo ra 1 object xúc sắc ngẫu nhiên
        let xxnn = {
          hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
          diem: soNgauNhien,
        };
        // Thêm vào mảng xúc sắc ngẫu nhiên
        mangXucXacNgauNhien.push(xxnn);
      }
      // set lại state.mangXucXac = mảng xúc xắc ngẫu nhiên
      state.mangXucXac = mangXucXacNgauNhien;

      // Xử lý thắng cuộc
      let tongDiem = mangXucXacNgauNhien.reduce((tong, xxnn, index) => {
        return (tong += xxnn.diem);
      }, 0);

      if (
        (state.banChon && tongDiem > 11) ||
        (!state.banChon && tongDiem <= 11)
      ) {
        state.soBanThang += 1;
      }

      state.soBanChoi += 1;
      return { ...state };
    }

    case "RESET_GAME": {
      state.mangXucXac = [
        { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
        { hinhAnh: "./img/gameXucXac/2.png", diem: 2 },
        { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
      ];
      state.soBanThang = 0;
      state.soBanChoi = 0;
      state.banChon = true;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

import { TOKEN, USER_LOGIN } from '../../ultils/settings/config';
import { LOGIN, SET_INFO_USER } from '../types/UserType';

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  thongTinNguoiDung: {},
};

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOGIN: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
      return { ...state, userLogin: thongTinDangNhap };
    }
    case SET_INFO_USER: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

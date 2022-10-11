import { userService } from '../../services/userServices';
import { LOGIN, SET_INFO_USER } from '../types/UserType';

export const loginAction = (loginInfo) => {
  return async (dispatch) => {
    try {
      const {
        data: { content, statusCode },
      } = await userService.Login(loginInfo);

      if (statusCode === 200) {
        dispatch({
          type: LOGIN,
          thongTinDangNhap: content,
        });
      }
    } catch (error) {
      return error;
    }
  };
};

export const getInfoUserAction = () => {
  return async (dispatch) => {
    try {
      const {
        data: { statusCode, content },
      } = await userService.GetInfoUser();

      if (statusCode === 200) {
        dispatch({
          type: SET_INFO_USER,
          thongTinNguoiDung: content,
        });
      }

      console.log('result', content);
    } catch (error) {
      console.log('error', error.response.data);
    }
  };
};

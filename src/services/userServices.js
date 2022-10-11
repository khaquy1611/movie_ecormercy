import { baseServices } from './baseServices';
export class UserService extends baseServices {
  constructor() {
    super();
  }

  Login = (loginInfo) => {
    // {taiKhoan:'',matKhau:''}
    return this.post(`api/QuanLyNguoiDung/DangNhap`, loginInfo);
  };

  GetInfoUser = () => {
    return this.post('api/QuanLyNguoiDung/ThongTinTaiKhoan');
  };
}

export const userService = new UserService();

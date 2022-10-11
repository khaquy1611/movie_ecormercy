import { baseServices } from './baseServices';
import { GROUPID } from '../ultils/settings/config';
export class ManagerBannerServices extends baseServices {
  constructor() {
    super();
  }
  getListBanner = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
  };
  getListMovie = (tenPhim = '') => {
    if (tenPhim.trim() != '') {
      return this.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`
      );
    }
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };
  AddMovueUploadImage = (formData) => {
    return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };
  getListInfoMovie = (maPhim) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };
  UpdateMovieUpload = (formData) => {
    return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };

  DeleteMovie = (maPhim) => {
    return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
}

export const manageMovie = new ManagerBannerServices();

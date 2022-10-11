import { baseServices } from './baseServices';
import { GROUPID } from '../ultils/settings/config';
export class ManageTheater extends baseServices {
  constructor() {
    super();
  }
  getListManageTheater = () => {
    return this.get(
      `api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };
  getDetailMovie = (maPhim) => {
    return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`);
  };
  getInfoTheater = () => {
    return this.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
  };
  getInfoTheaterGroup = (maHeThongRap) => {
    return this.get(
      `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  };
}
export const manageTheater = new ManageTheater();

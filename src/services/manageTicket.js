import { baseServices } from './baseServices';
import { GROUPID } from '../ultils/settings/config';
import { InfoBookTicket } from '../models/InfoBookTickets';
export class TicketServices extends baseServices {
  constructor() {
    super();
  }
  getDetailTicket = (maLichChieu = GROUPID) => {
    return this.get(
      `api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };
  bookTicket = (thongTinDatVe = new InfoBookTicket()) => {
    return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe);
  };
  createShowTime = (thongTinLichChieu) => {
    return this.post(`/api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu);
  };
}
export const manageTicketService = new TicketServices();

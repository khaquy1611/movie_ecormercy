import { connection } from '../../index';
import { manageTicketService } from '../../services/manageTicket';
import { InfoBookTicket } from '../../models/InfoBookTickets';
import { displayLoadingAction, hideLoadingAction } from './LoadingActions';
import {
  SET_DETAIL_ROOM_TICKET,
  BOOK_TICKET,
  BOOK_COMPLEATE,
  CHANGE_TAB,
} from '../types/TicketType';

export const getDetailsRoomTicketAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const {
        status,
        data: { content },
      } = await manageTicketService.getDetailTicket(maLichChieu);

      // console.log('result',result);
      if (status === 200) {
        dispatch({
          type: SET_DETAIL_ROOM_TICKET,
          chiTietPhongVe: content,
        });
      }
    } catch (error) {
      return error;
    }
  };
};

export const BookingTicketAction = (thongTinDatVe = new InfoBookTicket()) => {
  return async (dispatch, getState) => {
    try {
      dispatch(displayLoadingAction);

      const result = await manageTicketService.bookTicket(thongTinDatVe);
      console.log(result.data.content);
      //Đặt vé thành công gọi api load lại phòng vé
      await dispatch(getDetailsRoomTicketAction(thongTinDatVe.maLichChieu));
      await dispatch({ type: BOOK_COMPLEATE });
      await dispatch(hideLoadingAction);

      let userLogin = getState().UserReducer.userLogin;
      connection.invoke(
        'datGheThanhCong',
        userLogin.taiKhoan,
        thongTinDatVe.maLichChieu
      );

      dispatch({ type: CHANGE_TAB });
    } catch (error) {
      dispatch(hideLoadingAction);
      console.log(error.response.data);
    }
  };
};

export const BookingChairAction = (ghe, maLichChieu) => {
  return async (dispatch, getState) => {
    //Đưa thông tin ghế lên reducer
    await dispatch({
      type: BOOK_TICKET,
      gheDuocChon: ghe,
    });

    //Call api về backend
    let danhSachGheDangDat = getState().UserReducer.danhSachGheDangDat;
    let taiKhoan = getState().UserReducer.userLogin.taiKhoan;

    //Biến mảng thành chuỗi
    danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);

    //Call api signalR
    connection.invoke('datGhe', taiKhoan, danhSachGheDangDat, maLichChieu);
  };
};

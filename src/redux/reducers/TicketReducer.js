import {
  BOOK_TICKET,
  SET_DETAIL_ROOM_TICKET,
  BOOK_COMPLEATE,
  CHANGE_TAB,
} from '../types/TicketType';
import { InfoCalendarMovie } from '../../models/InfoTicketRooms';

const stateDefault = {
  chiTietPhongVe: new InfoCalendarMovie(),
  danhSachGheDangDat: [],
  danhSachGheKhachDat: [],
  // [{maGhe:48041},{maGhe:48042}],
  tabActive: '1',
};

export const TicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DETAIL_ROOM_TICKET: {
      state.chiTietPhongVe = action.chiTietPhongVe;
      return { ...state };
    }

    case BOOK_TICKET: {
      //Cập nhật danh sách ghế đang đặt
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];

      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe
      );
      if (index != -1) {
        //Nếu tìm thấy ghế được chọn trong mảng có nghĩa là trước đó đã click vào rồi => xoá đi
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon);
      }
      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    }
    case BOOK_COMPLEATE: {
      state.danhSachGheDangDat = [];
      return { ...state };
    }

    case CHANGE_TAB: {
      state.tabActive = '2';
      return { ...state };
    }

    case 'CHANGE_TAB_ACTIVE': {
      console.log('action', action);
      state.tabActive = action.number;
      return { ...state };
    }

    case 'DAT_GHE': {
      state.danhSachGheKhachDat = action.arrGheKhachDat;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

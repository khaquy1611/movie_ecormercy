import {
  GET_MOVIE_LIST,
  GET_MOVIE_SHOW,
  GET_MOVIE_COMMING,
  GET_THONG_TIN_PHIM,
} from '../types/MovieType';
import { GET_DETAIL_MOVIE } from '../types/TheaterType';
const initialState = {
  arrFilm: [
    {
      maPhim: 1282,
      tenPhim: 'Ban tay diet quy',
      biDanh: 'ban-tay-diet-quy',
      trailer: 'https://www.youtube.com/embed/uqJ9u7GSaYM',
      hinhAnh: 'http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png',
      moTa: "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
      maNhom: 'GP00',
      ngayKhoiChieu: '2019-07-29T00:00:00',
      danhGia: 5,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
    {
      maPhim: 1282,
      tenPhim: 'Ban tay diet quy',
      biDanh: 'ban-tay-diet-quy',
      trailer: 'https://www.youtube.com/embed/uqJ9u7GSaYM',
      hinhAnh: 'http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png',
      moTa: "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
      maNhom: 'GP00',
      ngayKhoiChieu: '2019-07-29T00:00:00',
      danhGia: 5,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
  ],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
  filmDetail: {},
  thongTinPhim: {},
};

export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST: {
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;
      return { ...state };
    }
    case GET_MOVIE_SHOW: {
      state.dangChieu = !state.dangChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    }
    case GET_MOVIE_COMMING: {
      state.sapChieu = !state.sapChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    }
    case GET_DETAIL_MOVIE: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }
    case GET_THONG_TIN_PHIM: {
      state.thongTinPhim = action.thongTinPhim;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

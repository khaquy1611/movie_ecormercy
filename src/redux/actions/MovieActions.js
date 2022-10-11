import {
  GET_MOVIE_LIST,
  GET_MOVIE_SHOW,
  GET_MOVIE_COMMING,
  GET_THONG_TIN_PHIM,
} from '../types/MovieType';
import { manageMovie } from '../../services/manageMovie';
import { Navigate } from 'react-router-dom';
export const getMovieListAction = (tenPhim = '') => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const {
        data: { content },
      } = await manageMovie.getListMovie(tenPhim);

      //Sau khi lấy dữ liệu từ api về => redux (reducer)
      dispatch({
        type: GET_MOVIE_LIST,
        arrFilm: content,
      });
    } catch (errors) {
      return errors;
    }
  };
};

export const AddMovieUploadImageAction = (formData) => {
  return async () => {
    try {
      let result = await manageMovie.AddMovueUploadImage(formData);
      alert('Thêm phim thành công!');
      console.log('result', result.data.content);
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const getInfoListMovieAction = (maPhim) => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const {
        data: { content },
      } = await manageMovie.getListInfoMovie(maPhim);

      dispatch({
        type: GET_THONG_TIN_PHIM,
        thongTinPhim: content,
      });
    } catch (errors) {
      return errors;
    }
  };
};

export const UpdateMovieUpLoadAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await manageMovie.UpdateMovieUpload(formData);
      alert('Cập nhật phim thành công!');
      console.log('result', result.data.content);

      dispatch(getMovieListAction());
      <Navigate to="/admin/films" />;
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const getMovieListShow = () => {
  return {
    type: GET_MOVIE_SHOW,
  };
};

export const getMovieListComming = () => {
  return {
    type: GET_MOVIE_COMMING,
  };
};
export const DeleMovieAction = (maPhim) => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await manageMovie.DeleteMovie(maPhim);
      console.log('result', result.data.content);
      alert('Xoá phim thành công !');
      //Sau khi xoá load lại danh sách phim mới;
      dispatch(getMovieListAction());
    } catch (errors) {
      console.log('errors', errors.response?.data);
    }
  };
};

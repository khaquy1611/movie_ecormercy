import { manageTheater } from '../../services/manageTheater';
import { GET_THEATER_MOVIE, GET_DETAIL_MOVIE } from '../types/TheaterType';

export const getListMovieTheaterAction = () => {
  return async (dispatch) => {
    try {
      const {
        status,
        data: { content },
      } = await manageTheater.getListManageTheater();
      if (status === 200) {
        dispatch({
          type: GET_THEATER_MOVIE,
          heThongRapChieu: content,
        });
      }
    } catch (err) {
      return err;
    }
  };
};
export const getDetailInfoMovie = (id) => {
  return async (dispatch) => {
    try {
      const {
        data: { content },
      } = await manageTheater.getDetailMovie(id);
      //Lấy được dữ liệu từ api về  => reducer

      dispatch({
        type: GET_DETAIL_MOVIE,
        filmDetail: content,
      });
    } catch (errors) {
      return errors.response?.data;
    }
  };
};

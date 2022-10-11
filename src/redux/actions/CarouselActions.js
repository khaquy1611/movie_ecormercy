import { GET_CAROUSEL_BANNER } from '../types/CarouselType';
import { manageMovie } from '../../services/manageMovie';

export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      const {
        data: { content },
      } = await manageMovie.getListBanner();
      dispatch({
        type: GET_CAROUSEL_BANNER,
        arrImg: content,
      });
    } catch (err) {
      return err;
    }
  };
};

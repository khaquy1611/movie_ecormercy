import { GET_CAROUSEL_BANNER } from '../types/CarouselType';

const initialState = {
  arrImg: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: 'http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png',
    },
  ],
};
export const CarouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAROUSEL_BANNER: {
      state.arrImg = action.arrImg;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

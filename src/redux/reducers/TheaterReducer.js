import { GET_THEATER_MOVIE } from '../types/TheaterType';

const initialState = {
  heThongRapChieu: [],
};

export const TheaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THEATER_MOVIE: {
      state.heThongRapChieu = action.heThongRapChieu;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDetailInfoMovie } from '../redux/actions/TheaterActions';
import { useParams } from 'react-router-dom';

export const GetDetailMovie = () => {
  const filmDetail = useSelector((state) => state.MovieReducer.filmDetail);
  //Lấy thông tin param từ url
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailInfoMovie(id));
  }, [dispatch, id]);
  return { filmDetail };
};

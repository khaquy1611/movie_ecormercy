import { useEffect } from 'react';
import HomeMenu from './HomeMenu/HomeMenu';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieListAction } from '../../redux/actions/MovieActions';
import { getListMovieTheaterAction } from '../../redux/actions/TheaterActions';
import MultipleRowSlick from './../../components/CardSlick/MultipleRowSlick';

const Home = () => {
  const { arrFilm } = useSelector((state) => state.MovieReducer);
  const { heThongRapChieu } = useSelector((state) => state.TheaterReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieListAction());
    dispatch(getListMovieTheaterAction());
  }, [dispatch]);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto ">
          <MultipleRowSlick arrFilm={arrFilm} />
        </div>
      </section>

      <div className="xl:mx-36 lg:mx-36 sm:mx-2">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
    </div>
  );
};

export default Home;

/* eslint-disable jsx-a11y/no-static-element-interactions */
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import styleSlick from './MultipleRowSlick.module.css';
import Film_Flip from '../Film/Film_Flip';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMovieListShow,
  getMovieListComming,
} from './../../redux/actions/MovieActions';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: 'block', left: '-50px' }}
      onClick={onClick}
    ></div>
  );
}

const MultipleRowSlick = ({ arrFilm }) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector((state) => state.MovieReducer);

  const renderFilms = () => {
    return arrFilm.slice(0, 12).map((item, index) => {
      return (
        <div className="mt-2" key={index}>
          <Film_Flip item={item} />
        </div>
      );
    });
  };
  let activeClassDC = dangChieu === true ? 'active_Film' : 'none_active_Film';

  let activeClassSC = sapChieu === true ? 'active_Film' : 'none_active_Film';

  const settings = {
    className: 'center variable-width',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    autoplay: true,
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          className: 'center variable-width',
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          slidesPerRow: 1,
          variableWidth: true,
          centerMode: true,
          centerPadding: '60px',
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          className: 'center variable-width',
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          slidesPerRow: 1,
          variableWidth: true,
          centerMode: true,
          centerPadding: '60px',
          arrows: false,
        },
      },
    ],
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <button
        className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`}
        onClick={() => dispatch(getMovieListShow())}
        style={{ margin: '10px' }}
      >
        PHIM ĐANG CHIẾU
      </button>
      <button
        className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`}
        onClick={() => dispatch(getMovieListComming())}
        style={{ margin: '10px' }}
      >
        PHIM SẮP CHIẾU
      </button>
      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  );
};

MultipleRowSlick.propTypes = {
  arrFilm: PropTypes.array,
};
SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
export default MultipleRowSlick;

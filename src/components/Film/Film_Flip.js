import PropTypes from 'prop-types';
import { PlayCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Film_Flip.css';

const Film_Flip = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="flip-card mt-2">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              background: `url(${item.hinhAnh}) no-repeat`,
            }}
          >
            <img
              src={item.hinhAnh}
              alt={item.tenPhim}
              style={{ width: 300, height: 300 }}
              className="opacity-0"
            />
          </div>
        </div>
        <div
          className="flip-card-back"
          style={{ position: 'relative', backgroundColor: 'rgba(0,0,0,.9)' }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0 }}>
            <img
              src={item.hinhAnh}
              alt={item.tenPhim}
              style={{ width: 300, height: 300 }}
            />
          </div>
          <div
            className="w-full h-full"
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="rounded-full cursor-pointer">
                <PlayCircleOutlined style={{ fontSize: '50px' }} />
              </div>
              <div className="text-2xl mt-2 font-bold">{item.tenPhim}</div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-16">
        {item.tenPhim}
      </h1>
      <p className="leading-relaxed mb-3 h-16">
        {item.moTa.length > 100 ? (
          <span>{item.moTa.slice(0, 100)} ...</span>
        ) : (
          <span>{item.moTa}</span>
        )}
      </p>
      <button
        onClick={() => navigate(`/detail/${item.maPhim}`)}
        className="bg-orange-300 text-center w-full cursor-pointer py-2 my-2 text-success-50 font-bold"
      >
        ĐẶT VÉ
      </button>
    </div>
  );
};
Film_Flip.propTypes = {
  item: PropTypes.object,
};
export default Film_Flip;

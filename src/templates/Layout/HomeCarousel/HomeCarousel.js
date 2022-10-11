import { Carousel } from 'antd';
import CarouselHooks from '../../../hooks/CarouselHooks';

const contentStyle = {
  height: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
const HomeCarousel = () => {
  const [arrImg] = CarouselHooks();

  const renderCarouselList = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={`${item.hinhAnh}`}
              className="w-full opacity-0"
              alt={`${item.hinhAnh}`}
            />
          </div>
        </div>
      );
    });
  };
  return (
    <Carousel effect="fade" autoplay={true}>
      {renderCarouselList()}
    </Carousel>
  );
};

export default HomeCarousel;

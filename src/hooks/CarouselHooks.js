import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCarouselAction } from '../redux/actions/CarouselActions';
const CarouselHooks = () => {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarouselAction());
  }, [dispatch]);
  return [arrImg];
};

export default CarouselHooks;

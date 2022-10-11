import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header/Header';
import HomeCarousel from './../Layout/HomeCarousel/HomeCarousel';
import Footer from './../Layout/Footer/Footer';
const HomeTemplate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <HomeCarousel />
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeTemplate;

import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router';
import { USER_LOGIN } from '../../ultils/settings/config';

const PrivateTemplate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  //path, exact, Component
  return !localStorage.getItem(USER_LOGIN) ? (
    <Navigate to="/login" />
  ) : (
    <Outlet />
  );
};
export default PrivateTemplate;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, Select } from 'antd';
import { getWindowDemensions } from '../../../hooks/getWindowDemensions';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { TOKEN, USER_LOGIN } from '../../../ultils/settings/config';
import './Header.css';

const { Option } = Select;

const Header = () => {
  const { userLogin } = useSelector((state) => state.UserReducer);

  const { t, i18n } = useTranslation();

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDemensions()
  );
  const showDrawer = () => {
    setOpen(true);
  };

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <>
          <button
            onClick={() => {
              navigate('/login');
            }}
            className="self-center px-8 py-3 rounded"
          >
            {t('signin')}
          </button>
          <button
            onClick={() => {
              navigate('/register');
            }}
            className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50"
          >
            {t('signup')}
          </button>
        </>
      );
    }

    return (
      <>
        {' '}
        <button
          onClick={() => {
            navigate('/profile');
          }}
          className="self-center px-8 py-3 rounded"
        >
          Hello ! {userLogin.taiKhoan}
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            navigate('/home');
            window.location.reload();
          }}
          className="text-yellow-500 mr-5"
        >
          Đăng xuất
        </button>
      </>
    );
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDemensions());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowDimensions.width >= 1200) {
      setOpen(false);
    }
  }, [windowDimensions]);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-opacity-40 bg-black text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          href="/home"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://phimmoichills.net/dev/images/logo.png"
            alt="logo.vn"
          />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              href="/contact"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600"
            >
              Trang Chủ
            </a>
          </li>
          <li className="flex">
            <a
              href="/news"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white"
            >
              Liên Hệ
            </a>
          </li>
          <li className="flex">
            <a
              href="!#"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white"
            >
              Tin Tức
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {renderLogin()}

          <Select
            defaultValue="en"
            style={{ width: 100 }}
            onChange={handleChange}
          >
            <Option value="en">Eng</Option>
            <Option value="chi">Chi</Option>

            <Option value="vi">Vi</Option>
          </Select>
        </div>
        <button className="p-4 lg:hidden" onClick={showDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Drawer
          className="mobile-header"
          placement="right"
          mask={false}
          onClose={onClose}
          keyboard={true}
          footer={null}
          headerStyle={{ background: '#000' }}
          contentWrapperStyle={{
            background: '#000',
            color: '#fff',
          }}
          bodyStyle={{ background: '#000', color: '#fff' }}
          open={open}
        >
          <div className="container flex-col justify-between h-16 mx-auto">
            <ul className="items-center flex-col justify-center space-x-3 lg:flex">
              <li className="flex">
                <a
                  href="/home"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600"
                >
                  Trang Chủ
                </a>
              </li>
              <li className="flex">
                <a
                  href="/contact"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white"
                >
                  Liên Hệ
                </a>
              </li>
              <li className="flex">
                <a
                  href="/news"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white"
                >
                  Tin Tức
                </a>
              </li>
            </ul>
            <div className="items-center flex-shrink-0 sm:flex lg:flex">
              {renderLogin()}

              <Select
                defaultValue="en"
                style={{ width: 100 }}
                onChange={handleChange}
              >
                <Option value="en">Eng</Option>
                <Option value="chi">Chi</Option>

                <Option value="vi">Vi</Option>
              </Select>
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;

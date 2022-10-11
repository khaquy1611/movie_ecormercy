import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Radio, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
const { TabPane } = Tabs;

const HomeMenu = ({ heThongRapChieu }) => {
  const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  const renderListTabsTheater = () => {
    return heThongRapChieu?.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <img
              src={heThongRap.logo}
              alt={heThongRap.tenHeThongRap}
              className="rounded-full"
              width="50"
            />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div style={{ width: '300px', display: 'flex' }}>
                      <img
                        src={cumRap.hinhAnh}
                        width="50"
                        alt={cumRap.tenCumRap}
                      />{' '}
                      <br />
                      <div className="text-left ml-2">
                        {cumRap.tenCumRap}
                        <p className="text-red-200">Chi tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {/*Load phim tương ứng */}
                  {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                    return (
                      <div key={index}>
                        <div className="my-5">
                          <div style={{ display: 'flex' }}>
                            <img
                              style={{ height: 75, width: 75 }}
                              src={phim.hinhAnh}
                              alt={phim.tenPhim}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://picsum.photos/75/75';
                              }}
                            />

                            <div className="ml-2">
                              <h1 className="text-2xl text-green-700">
                                {phim.tenPhim}
                              </h1>
                              <p>{cumRap.diaChi}</p>
                              <div className="grid grid-cols-6 gap-6">
                                {phim.lstLichChieuTheoPhim
                                  ?.slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        className="lg:text-2xl xl:text-2xl text-green-400 md:text-sm sm:text-sm"
                                        to="/"
                                        key={index}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format('hh:mm A')}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </div>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <>
      <Space style={{ marginBottom: 24 }}>
        Vị trí:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">Trên</Radio.Button>
          <Radio.Button value="bottom">Dưới</Radio.Button>
          <Radio.Button value="left">Trái</Radio.Button>
          <Radio.Button value="right">Phải</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs tabPosition={tabPosition}>{renderListTabsTheater()}</Tabs>
    </>
  );
};

HomeMenu.propTypes = {
  heThongRapChieu: PropTypes.array,
};
export default React.memo(HomeMenu);

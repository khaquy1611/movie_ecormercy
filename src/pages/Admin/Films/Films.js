/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Fragment, useEffect } from 'react';
import { Button, Table, Input } from 'antd';

import {
  EditOutlined,
  SearchOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMovieListAction,
  DeleMovieAction,
} from '../../../redux/actions/MovieActions';
import { NavLink, useNavigate } from 'react-router-dom';
const { Search } = Input;

export default function Films() {
  const navigate = useNavigate();
  const { arrFilmDefault } = useSelector((state) => state.MovieReducer);

  const dispatch = useDispatch();

  console.log('arrFilmDefault', arrFilmDefault);

  useEffect(() => {
    dispatch(getMovieListAction());
  }, [dispatch]);

  const columns = [
    {
      title: 'Mã phim',
      dataIndex: 'maPhim',
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ['descend', 'ascend'],
      width: '15%',

      // sortOrder:'descend'
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      render: (text, film, index) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: '15%',
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Tên phim',
      dataIndex: 'tenPhim',
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend', 'ascend'],
      width: '25%',
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      // sorter: (a, b) => {
      //     let moTaA = a.moTa.toLowerCase().trim();
      //     let moTaB = b.moTa.toLowerCase().trim();
      //     if(moTaA > moTaB) {
      //         return 1;
      //     }
      //     return -1;
      // },
      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + ' ...'
              : film.moTa}
          </Fragment>
        );
      },
      sortDirections: ['descend', 'ascend'],
      width: '25%',
    },
    {
      title: 'Hành động',
      dataIndex: 'maPhim',
      render: (text, film) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" mr-2  text-2xl"
              to={`/admin/films/edit/${film.maPhim}`}
            >
              <EditOutlined style={{ color: 'blue' }} />{' '}
            </NavLink>
            <span
              style={{ cursor: 'pointer' }}
              key={2}
              className="text-2xl"
              onClick={() => {
                //Gọi action xoá
                if (
                  window.confirm('Bạn có chắc muốn xoá phim ' + film.tenPhim)
                ) {
                  //Gọi action
                  dispatch(DeleMovieAction(film.maPhim));
                }
              }}
            >
              <DeleteOutlined style={{ color: 'red' }} />{' '}
            </span>

            <NavLink
              key={1}
              className=" mr-2 text-2xl"
              to={`/admin/films/showtime/${film.maPhim}/${film.tenPhim}`}
              onClick={() => {
                localStorage.setItem('filmParams', JSON.stringify(film));
              }}
            >
              <CalendarOutlined style={{ color: 'green' }} />{' '}
            </NavLink>
          </Fragment>
        );
      },
      sortDirections: ['descend', 'ascend'],
      width: '25%',
    },
  ];
  const data = arrFilmDefault;

  const onSearch = (value) => {
    console.log(value);
    //Gọi api layDanhSachPhim
    dispatch(getMovieListAction(value));
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <div>
      <h3 className="text-4xl">Quản lý Phim</h3>
      <Button
        className="mb-5"
        onClick={() => {
          navigate('/admin/films/addnew');
        }}
      >
        Thêm phim
      </Button>
      {/* <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /> */}
      <Search
        className="mb-5"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />

      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={'maPhim'}
      />
    </div>
  );
}

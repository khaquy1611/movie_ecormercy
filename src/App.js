import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplates/HomeTempaltes';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import PrivateTemplate from './templates/PrivateTemplate/PrivateTemplate';
import Checkout from './pages/Checkout/Checkout';
import UserTemplates from './templates/UserTemplates/UserTemplates';
import Loading from './components/Loading/Loading';
import Profile from './pages/Profile/Profile';
import AdminTemplates from './templates/AdminTemplates/AdminTemplates';
import Dashboard from './pages/Admin/Dashboard/DashBoard';
import Films from './pages/Admin/Films/Films';
import AddNew from './pages/Admin/AddNew/AddNew';
import Edit from './pages/Admin/Edit/Edit';
import ShowTime from './pages/Admin/Showtime/Showtime';
function App() {
  return (
    <Router>
      <Loading />
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route path="home" index element={<Home />} />
          <Route path="" index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="/checkout/:id" exact element={<PrivateTemplate />}>
          <Route path="" element={<Checkout />} />
        </Route>
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<UserTemplates />}>
          <Route path="" exact element={<Login />} />
        </Route>
        <Route path="/admin" exact element={<AdminTemplates />}>
          <Route path="dashboard" exact element={<Dashboard />} />
          <Route path="films" exact element={<Films />} />
          <Route path="films/addnew" exact element={<AddNew />} />
          <Route path="films/edit/:id" exact element={<Edit />} />
          <Route
            path="films/showtime/:id/:tenphim"
            exact
            element={<ShowTime />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import BaiTapGioHang from './BaiTapGioHang/BaiTapGioHang'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
// import HeaderHome from './components/HeaderHome'
import HomeTemplate from './templates/HomeTemplate'
import UserTemplate from './templates/UserTemplate'
import Profile from './pages/Profile'
import ChangePassword from './pages/ChangePassword'
import HistoryOrder from './pages/HistoryOrder'
import Page404 from './pages/Page404'
import ForgotPassword from './pages/ForgotPassword'
import FormComponent from './pages/FormComponent/FormComponent'
import FormikDemo from './pages/FormComponent/FormikDemo'
//setup redux
import { store } from './redux/store'
import {Provider} from 'react-redux'

import NumberState from './pages/DemoRedux/NumberState'
import ChatApp from './pages/DemoRedux/ChatApp'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div>
      <BaiTapGioHang />
    </div> */}
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="form" element={<FormComponent />} />
            <Route path="formik" element={<FormikDemo />} />
            <Route path="number-state" element={<NumberState />} />
            <Route path="chat-app" element={<ChatApp />} />
          </Route>
          <Route path="user" element={<UserTemplate />}>
            <Route path="profile" element={<Profile />} />
            <Route path="history" element={<HistoryOrder />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="*" element={<Navigate to="/user/profile" />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

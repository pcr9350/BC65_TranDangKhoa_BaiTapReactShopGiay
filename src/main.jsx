import React from 'react'
import ReactDOM from 'react-dom/client'
import BaiTapGioHang from './BaiTapGioHang/BaiTapGioHang'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import HeaderHome from './components/HeaderHome'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div>
      <BaiTapGioHang />
    </div> */}
    <BrowserRouter>
      <HeaderHome />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import React from 'react'
import { NavLink } from 'react-router-dom'
import useRedux from '../CustomHook/useRedux'

const HeaderHome = () => {
// cần lấy state login về
const {state, dispatch} = useRedux();
const {userLogin} = state.userReducer;

const renderLoginLink = () => {
  if (userLogin) {
    // nếu có dữ liệu trên store thì là đăng nhập rồi
    return <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/user/profile">Hello {userLogin.email}</NavLink>
  }
  // chưa có dữ liệu trên store thì là link login
  return <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/login">Login</NavLink>

}


  return (   
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid bg-warning">
    <NavLink className="navbar-brand" to="/">React Hook</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse row navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-10" style={{fontSize:'13px'}}>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/demo-antd">Demo Antd</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/admin/users">Admin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          {renderLoginLink()}
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/user/profile">User</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/form">Form Demo</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/formik">Formik Demo</NavLink>
        </li>
        <li className="nav-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
              className={({ isActive }) =>
                isActive ? "nav-link bg-white text-dark" : "nav-link"
              }
              to="/product-list"
            >
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
              className={({ isActive }) =>
                isActive ? "nav-link bg-white text-dark" : "nav-link"
              }
              to="/demo-hoc"
            >
              HOC
            </NavLink>
          </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Redux demo
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/number-state">Number state</NavLink></li>
            <li><NavLink className="dropdown-item" to="/chat-app">Chat App</NavLink></li>
            <li><NavLink className="dropdown-item" to="/form-sinh-vien">Form Sinh Vien</NavLink></li>
            <li><NavLink className="dropdown-item" to="/table-list-sinh-vien">Table list sinh vien</NavLink></li>
            <li><NavLink className="dropdown-item" to="/bookingTicket">Đặt vé xem phim</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Lifecycle - Hook
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/useEffect-mounting">Mounting component</NavLink></li>
            <li><NavLink className="dropdown-item" to="/useEffect-updating">Updating component</NavLink></li>
            <li><NavLink className="dropdown-item" to="/useEffect-unmount">Unmount component</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hook Tối ưu render
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/useCallBack">Use Callback</NavLink></li>
            <li><NavLink className="dropdown-item" to="/useMemo">Use Memo</NavLink></li>
            <li><NavLink className="dropdown-item" to="/detail/1">Use Param</NavLink></li>
            <li><NavLink className="dropdown-item" to="/use-ref">UseRef</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hook Router
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/use-history">Use History</NavLink></li>
            <li><NavLink className="dropdown-item" to="/use-search-param">UseSearchParam</NavLink></li>
            
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex my-2 my-lg-0 col-2">
        <NavLink className='text-white mx-2' to='/cart-page'>(1) <i className='fa fa-cart-plus fs-4'></i></NavLink>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


  )
}

export default HeaderHome
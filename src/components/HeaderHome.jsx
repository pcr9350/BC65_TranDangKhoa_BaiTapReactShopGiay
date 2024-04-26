import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderHome = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid bg-warning">
    <NavLink className="navbar-brand" to="/">React Hook</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/user">User</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/form">Form Demo</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default HeaderHome
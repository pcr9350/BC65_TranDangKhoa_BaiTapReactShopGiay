import React from 'react'
import HeaderHome from '../components/HeaderHome'
import { Outlet } from 'react-router-dom'

const HomeTemplate = () => {
  return (
    <>
        <HeaderHome />
            <div className='content' style={{minHeight:650}}>
            <Outlet />
            </div>
            
        <footer className='fs-1 bg-dark text-white text-center p-1'>
            Footer
        </footer>
    </>
  )
}

export default HomeTemplate
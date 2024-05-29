import React from 'react'
import { Outlet } from 'react-router-dom'

const UserTemplate = () => {
  return (
    <>
        <div className='bg-success text-white p-3'>
            <img className='logo' src='../../public/vite.svg' width={75} height={75} alt='logo'/>
        </div>
        <div className='d-flex'>
            <div style={{minHeight:'100vh',width:250}} className='dash-board bg-dark text-white d-flex flex-column justify-content-start align-items-center'>
                <img src='https://i.pravatar.cc?u=1' alt='...' className='my-5 rounded-circle' width={150} height={150} />
                <nav>
                <ul>
                    <li>menu item 1</li>
                    <li>menu item 2</li>
                    <li>menu item 3</li>
                    <li>menu item 4</li>
                    <li>menu item 5</li>
                </ul>
            </nav>
            </div>
            <div className='content'>
                <Outlet />
            </div>
            
        </div>
    </>
  )
}

export default UserTemplate
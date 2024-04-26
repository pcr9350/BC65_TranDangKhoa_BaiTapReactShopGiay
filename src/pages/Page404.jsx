import React from 'react'
import { NavLink } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='text-center'>
        <h3>404 không tìm thấy nội dung</h3>
        <h3>
            <NavLink to="/">Bấm vào đây</NavLink> để trở về trang chủ
        </h3>

    </div>
  )
}

export default Page404
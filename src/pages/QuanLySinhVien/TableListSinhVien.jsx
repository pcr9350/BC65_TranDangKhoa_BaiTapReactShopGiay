import React from 'react'
import {useSelector} from 'react-redux'
const TableListSinhVien = () => {
    const {arrSinhVien} = useSelector(state => state.sinhVienReducer);
  return (
    <div className='container'>
        <h3>Danh sách sinh viên</h3>
        <table className='table'>
            <thead>
                <tr>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                </tr>
            </thead>
            <tbody>
                {arrSinhVien.map((sv, index)=>{
                    return <tr key={index}>
                    <td>{sv.maSinhVien}</td>
                    <td>{sv.tenSinhVien}</td>
                    <td>{sv.email}</td>
                    <td>{sv.soDienThoai}</td>
                    <td>
                        <button className='btn btn-danger mx-3'>Xóa</button>
                        <button className='btn btn-primary mx-3'>Sửa</button>
                    </td>
                </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default TableListSinhVien
//rafce
import React from 'react'

const GioHang = (props) => {
    const {mangGioHang, xoaSanPham, thayDoiSoLuong} = props;
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Mã Sản Phẩm</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Giá tiền</th>
                    <th>Số lượng</th>
                    <th>Tổng cộng</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {mangGioHang.map((itemGioHang, index) => {
                    return <tr key={index}>
                    <td>{itemGioHang.id}</td>
                    <td>{itemGioHang.name}</td>
                    <td><img src={itemGioHang.image} alt='...' width={50}/></td>
                    <td>{itemGioHang.price}</td>
                    <td>
                        <button className='btn btn-dark mx-2' onClick={()=>{
                            thayDoiSoLuong(itemGioHang.id, 1)
                        }}>+</button>
                        {itemGioHang.quanlity}
                        <button className='btn btn-dark mx-2' onClick={()=>{
                            thayDoiSoLuong(itemGioHang.id, -1)
                        }}>-</button>
                    </td>
                    <td>{itemGioHang.price * itemGioHang.quanlity}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=> {
                            xoaSanPham(itemGioHang.id)
                        }}><i className='fa fa-trash'></i></button>
                    </td>
                </tr>
                })}
                
            </tbody>
        </table>
    </div>
  )
}

export default GioHang
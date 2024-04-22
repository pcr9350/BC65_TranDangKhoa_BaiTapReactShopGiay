//rafce
import React from 'react'

const DanhSachSanPham = (props) => {
    const {sanPham, themGioHang} = props;

  return (
    <div className='mb-4'>
        <div className='row'>
            {sanPham.map((sp, index) => {
                return <div className='col-3 mt-2' key={index}>
                    <div className='card'>
                        <img src={sp.image} alt='...'/>
                        <div className='card-body'>
                            <h3>{sp.name}</h3>
                            <p>{sp.price}</p>
                            <button className='btn btn-dark' onClick={()=>{
                                themGioHang(sp)
                            }}>Thêm vào giỏ hàng <i className='fa fa-cart-plus'></i></button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default DanhSachSanPham
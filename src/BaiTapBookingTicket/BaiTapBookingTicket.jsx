import React from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from './danhSachGhe.json'
import HangGhe from './HangGhe'

const BaiTapBookingTicket = () => {
    
    const renderHangGhe=()=>{
        return danhSachGheData.map((hangGhe,index)=>{
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
            </div>
        })
    };
  return (
    <div className='bookingMovie' style={{width:'100%', height:'100%', backgroundImage:"url('./img/bookingTicket/bgmovie.jpg')", backgroundSize:'100%'}}>
        <div style={{width:'100%',height:'100%', backgroundColor:'rgba(0,0,0,0.7'}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 text-center">
                        <div className='text-warning display-6'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                        <div className='mt-2 text-light' style={{fontSize:'25px'}}>Màn Hình</div>
                        <div className="mt-2" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            
                            <div className='screen'>
                            </div>
                            <div>
                        {renderHangGhe()}
                        </div>                 
                        </div>
                        
                        
                    </div>
                    <div className="col-4">
                    <div style={{fontSize:'30px'}} className='text-light'>
                        DANH SÁCH GHẾ BẠN CHỌN
                    </div>
                    <ThongTinDatGhe />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BaiTapBookingTicket
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { huyGhe } from '../redux/reducers/datVeReducer';
const ThongTinDatGhe = () => {
  const {danhSachGheDangDat} = useSelector(state=>state.datVeReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="mt-5">
        <button className="gheDuocChon"></button>
        <span className="text-light" style={{ fontSize: "20px" }}>
          Ghế đã đặt
        </span>
        <br />
        <button className="gheDangChon"></button>
        <span className="text-light" style={{ fontSize: "20px" }}>
          Ghế đang đặt
        </span>
        <br />
        <button className="ghe" style={{ marginLeft: "0" }}></button>
        <span className="text-light" style={{ fontSize: "20px" }}>
          Ghế chưa đặt
        </span>
      </div>
      <div className='mt-5'>
        <table className="table" >
          <thead>
            <tr className='text-light' style={{fontSize:'25px'}}>
              <th>Số ghế</th>
              <th>Giá</th>
              <th />
            </tr>
          </thead>
          <tbody>
          {danhSachGheDangDat.map((gheDangDat, index)=>{
            return <tr key={index}>
              <td>{gheDangDat.soGhe}</td>
              <td>{gheDangDat.gia}</td>
              <td><button className='btn btn-danger' onClick={()=>{
                const action = huyGhe(gheDangDat);
                dispatch(action);
              }}>Hủy</button></td>
            </tr>
          })}
          </tbody>
          <tfoot>
            <tr>
              <td>Tổng tiền</td>
              <td>{danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                return tongTien+=gheDangDat.gia;
              },0).toLocaleString()}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default ThongTinDatGhe
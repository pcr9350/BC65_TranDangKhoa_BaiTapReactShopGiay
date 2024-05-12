import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { datGhe } from '../redux/reducers/datVeReducer';
const HangGhe = (props) => {
    const {danhSachGheDangDat} = useSelector(state=>state.datVeReducer);
    const dispatch = useDispatch();
    const renderGhe = ()=>{
        return props.hangGhe.danhSachGhe.map((ghe,index)=>{
            // if(index === 0){
            //     return <span className='rowNumber'>{ghe.soGhe}</span>
            // }
            let cssGheDaDat='';
            let disabled = false;
            // Trạng thái ghế đã bj người khác đặt rồi
            if(ghe.daDat){
                cssGheDaDat='gheDuocChon';
                disabled = true;
            }
            //Xét trạng thái ghế đang đặt
            let cssGheDangDat = '';
            
            let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat !== -1){
                cssGheDangDat = 'gheDangChon'
            }
            return <button onClick={()=>{
                const action = datGhe(ghe);
                dispatch(action);
            }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }
    const renderSoHang = ()=>{
        return props.hangGhe.danhSachGhe.map((hang,index)=>{
            return <button className='rowNumber' key={index}>
                {hang.soGhe}
            </button>
        })
        
    }
    const renderHangGhe = ()=>{
        if(props.soHangGhe === 0){
            return <div className='mx-4'>
                {props.hangGhe.hang} {renderSoHang()}
            </div>
        }else{
            return <div>
                {props.hangGhe.hang} {renderGhe()}
            </div>
        }
    }
  return (
    <div className='text-light text-start ml-5 mt-3 fs-4'>
        {/* {props.hangGhe.hang} */}
        {renderHangGhe()}
    </div>
  )
}

export default HangGhe
//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrSinhVien: [
        {maSinhVien: 1,tenSinhVien:'Nguyễn Văn A',email:'email@gmail.com',soDienThoai:'0909090909'}
    ]
}

const sinhVienReducer = createSlice({
  name: 'sinhVienReducer', // tạo ra tên action {type: 'sinhVienReducer/themSinhVienAction'}
  initialState,
  reducers: {
    themSinhVienAction: (state, action)=>{
        state.arrSinhVien.push(action.payload);
    }
  }
});

export const {themSinhVienAction} = sinhVienReducer.actions

export default sinhVienReducer.reducer
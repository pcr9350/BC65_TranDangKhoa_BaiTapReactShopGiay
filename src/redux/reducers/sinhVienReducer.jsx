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
    },
    xoaSinhVienAction: (state, action) => {
      const id=action.payload;
      let index = state.arrSinhVien.findIndex(sv => sv.maSinhVien === id);
            if (index != -1) {
                state.arrSinhVien.splice(index,1);
            }
    },
    suaSinhVienAction: (state, action) => {
      const sinhVienMoi=action.payload;
      let indexSinhVienCapNhat = state.arrSinhVien.findIndex(sv => sv.maSinhVien === sinhVienMoi.maSinhVien);
      if (indexSinhVienCapNhat !== -1) {
        let sinhVienCapNhat = state.arrSinhVien[indexSinhVienCapNhat];
        sinhVienCapNhat.tenSinhVien = sinhVienMoi.tenSinhVien;
        sinhVienCapNhat.email = sinhVienMoi.email;
        sinhVienCapNhat.soDienThoai = sinhVienMoi.soDienThoai;
      }
    }
  }
});

export const {themSinhVienAction, xoaSinhVienAction, suaSinhVienAction} = sinhVienReducer.actions

export default sinhVienReducer.reducer
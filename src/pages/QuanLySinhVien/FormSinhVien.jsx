import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import { themSinhVienAction } from '../../redux/reducers/sinhVienReducer'
const FormSinhVien = () => {
    const dispatch = useDispatch();
    const frmSV = useFormik({
        initialValues: {
            maSinhVien: '',
            tenSinhVien: '',
            email: '',
            soDienThoai: ''
        },
        onSubmit: (sinhVien) => {
            // console.log(sinhVien)
            // tạo ra action
            //Cách 1:
            // const action = {
            //     type: 'sinhVienReducer/themSinhVienAction',
            //     payload: sinhVien
            // }
            // Cách 2:
            const action = themSinhVienAction(sinhVien);
            // dispatch lên reducer
            dispatch(action);
        }
    })
  return (
    <div className='container'>
    <form className='w-50 mx-auto' onSubmit={frmSV.handleSubmit}>
        <h3>Thêm thông tin sinh viên</h3>
        <div className='form-group'>
            <p>Mã sinh viên</p>
            <input className='form-control' name='maSinhVien' onInput={frmSV.handleChange}/>
        </div>
        <div className='form-group'>
            <p>Tên sinh viên</p>
            <input className='form-control' name='tenSinhVien' onInput={frmSV.handleChange}/>
        </div>
        <div className='form-group'>
            <p>Email</p>
            <input className='form-control' name='email' onInput={frmSV.handleChange}/>
        </div>
        <div className='form-group'>
            <p>Số điện thoại</p>
            <input type='number' className='form-control' name='soDienThoai' onInput={frmSV.handleChange}/>
        </div>
        <div className='form-group mt-2'>
            <button type='submit' className='btn btn-success'>Thêm sinh viên</button>
        </div>
    </form>
    </div>
  )
}

export default FormSinhVien
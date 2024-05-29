import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {useDispatch, useSelector} from 'react-redux'
import { themSinhVienAction } from '../../redux/reducers/sinhVienReducer'

const regexName = /^[a-z A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểễỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸửữựỳỵỷỹ]{3,}$/u;
const regexPhone = /^(0|84)[3|5|7|8|9]{1}[0-9]{8}$/;
const FormSinhVien = () => {
    const {arrSinhVien} = useSelector(state => state.sinhVienReducer);
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
            let indexSinhVien = arrSinhVien.findIndex(sv => sv.maSinhVien === sinhVien.maSinhVien);
            if (indexSinhVien !== -1){
                alert('Mã sinh viên đã tồn tại !')
            } else {
                const action = themSinhVienAction(sinhVien);
                //dispatch lên reducer
                dispatch(action);
                alert('Đã thêm sinh viên thành công !')
            }
        },
        validationSchema: Yup.object().shape({
            maSinhVien: Yup.number().required('Mã sinh viên không để trống !'),
            tenSinhVien: Yup.string().required('Họ tên không được để trống !').matches(regexName, 'Họ tên sai định dạng'),
            email: Yup.string().required('Email không được để trống').email('Email sai định dạng !'),
            soDienThoai: Yup.string().required('Số điện thoại không được để trống !').matches(regexPhone, 'Số điện thoại không đúng định dạng Việt Nam!'),
        })
    })
  return (
    <div className='container'>
          <form className='w-50 mx-auto' onSubmit={frmSV.handleSubmit}>
              <h3>Thêm thông tin sinh viên</h3>
              <div className='form-group'>
                  <p>Mã sinh viên</p>
                  <input type='number' className='form-control' name="maSinhVien" onInput={frmSV.handleChange} onBlur={frmSV.handleBlur}/>
                  {frmSV.errors.maSinhVien && <p className='text text-danger'>{frmSV.errors.maSinhVien}</p>}
              </div>
              <div className='form-group'>
                  <p>Tên sinh viên</p>
                  <input className='form-control' name="tenSinhVien" onInput={frmSV.handleChange} onBlur={frmSV.handleBlur}/>
                  {frmSV.errors.tenSinhVien && <p className='text text-danger'>{frmSV.errors.tenSinhVien}</p>}
              </div>
              <div className='form-group'>
                  <p>Email</p>
                  <input className='form-control' name="email" onInput={frmSV.handleChange} onBlur={frmSV.handleBlur}/>
                  {frmSV.errors.email && <p className='text text-danger'>{frmSV.errors.email}</p>}
              </div>
              <div className='form-group'>
                  <p>Số điện thoại</p>
                  <input className='form-control' name="soDienThoai" onInput={frmSV.handleChange} onBlur={frmSV.handleBlur}/>
                  {frmSV.errors.soDienThoai && <p className='text text-danger'>{frmSV.errors.soDienThoai}</p>}
              </div>
              <div className='form-group mt-2'>
                  <button type='submit' className='btn btn-primary' disabled={!frmSV.isValid}>Thêm sinh viên</button>
              </div>
          </form>
      </div>
  )
}

export default FormSinhVien
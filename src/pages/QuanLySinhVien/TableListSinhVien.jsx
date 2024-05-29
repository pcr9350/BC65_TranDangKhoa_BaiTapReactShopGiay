import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { suaSinhVienAction, xoaSinhVienAction } from '../../redux/reducers/sinhVienReducer';
import { useFormik } from 'formik'
import * as Yup from 'yup'

const regexName = /^[a-z A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểễỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸửữựỳỵỷỹ]{3,}$/u;
const regexPhone = /^(0|84)[3|5|7|8|9]{1}[0-9]{8}$/;

const TableListSinhVien = () => {
    const {arrSinhVien} = useSelector(state => state.sinhVienReducer);
    const dispatch = useDispatch();
    const frmSV = useFormik({
        initialValues: {
          maSinhVien: '',
          tenSinhVien: '',
          email: '',
          soDienThoai: ''
        },
        onSubmit: (newSinhVien) => { 
            newSinhVien = {
                maSinhVien: +document.querySelector("#maSinhVien").value,
                tenSinhVien: document.querySelector("#tenSinhVien").value,
                email: document.querySelector("#email").value,
                soDienThoai: document.querySelector("#soDienThoai").value,
            }
            const action = suaSinhVienAction(newSinhVien);
            dispatch(action);
            alert('Đã sửa sinh viên thành công !')
            },
            validationSchema: Yup.object().shape({
                tenSinhVien: Yup.string().required('Họ tên không được để trống !').matches(regexName, 'Họ tên sai định dạng'),
                email: Yup.string().required('Email không được để trống').email('Email sai định dạng !'),
                soDienThoai: Yup.string().required('Số điện thoại không được để trống !').matches(regexPhone, 'Số điện thoại không đúng định dạng Việt Nam !'),
            })    
      })

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
                        <button className='btn btn-danger mx-3' onClick={()=>{
                            const action = xoaSinhVienAction(sv.maSinhVien);
                            dispatch(action);
                        }}>Xóa</button>

                        <button className='btn btn-primary mx-3' onClick={()=>{
                            document.querySelector('#maSinhVien').value = sv.maSinhVien;
                            document.querySelector('#tenSinhVien').value = sv.tenSinhVien;
                            document.querySelector('#email').value = sv.email;
                            document.querySelector('#soDienThoai').value = sv.soDienThoai;
                        }}>Sửa</button>
                    </td>
                </tr>
                })}
            </tbody>
        </table>
        <hr />
        <h3>Sửa Sinh Viên</h3>
        <form className='w-50 mx-auto' onSubmit={frmSV.handleSubmit}>
              <div className='form-group'>
                  <p>Mã sinh viên</p>
                  <input className='form-control' id='maSinhVien' name="maSinhVien" readOnly onInput={frmSV.handleChange}/>
              </div>
              <div className='form-group'>
                  <p>Tên sinh viên</p>
                  <input className='form-control' id='tenSinhVien' name="tenSinhVien" onInput={frmSV.handleChange} onBlur={frmSV.handleBlur}/>
                  {frmSV.errors.tenSinhVien && <p className='text text-danger'>{frmSV.errors.tenSinhVien}</p>}
              </div>
              <div className='form-group'>
                  <p>Email</p>
                  <input className='form-control' id='email' name="email" onInput={frmSV.handleChange} onBlur={frmSV.handleBlur}/>
                  {frmSV.errors.email && <p className='text text-danger'>{frmSV.errors.email}</p>}
              </div>
              <div className='form-group'>
                  <p>Số điện thoại</p>
                  <input className='form-control' id='soDienThoai' name="soDienThoai" onInput={frmSV.handleChange} onBlur={frmSV.handleBlur}/>
                  {frmSV.errors.soDienThoai && <p className='text text-danger'>{frmSV.errors.soDienThoai}</p>}
              </div>
              <div className='form-group mt-2'>
                  <button type='submit' className='btn btn-primary' disabled={!frmSV.isValid}>Sửa sinh viên</button>
              </div>
          </form>
    </div>
  )
}

export default TableListSinhVien
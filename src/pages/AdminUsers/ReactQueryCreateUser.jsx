import {  useMutation, useQueryClient } from '@tanstack/react-query'
import { useFormik } from 'formik'
import React from 'react'
import { userApi } from '../../services/apiStore/user/userApi'

const ReactQueryCreateUser = () => {
  const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey: ['addUserApi'],
        mutationFn: userApi.addUser,
        onSuccess: (res) => {
            // console.log(res)
            // Xử lý sau khi success api
            //queryClient invalidateQueries (queryKey): queryKey chạy lại function
            queryClient.invalidateQueries('userListApi');
        }
    })

    const frmRegister = useFormik({
      initialValues: {
        name:'',
        email:'',
        password:'',
        phone:'',
        gender:true
      },
      onSubmit: (values) => {
       // Lấy dữ liệu từ form thành công
            mutation.mutateAsync(values);
      }
    })
  
    return (
      <form className='container' onSubmit={frmRegister.handleSubmit}>
        <h3>Create user</h3>
        <div className='w-75 mx-auto'>
          <div className='form-group'>
            <label>Name</label>
            <input className='form-control' name="name" onChange={frmRegister.handleChange} />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input className='form-control' name="email"  onChange={frmRegister.handleChange} />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input type='password' className='form-control' name="password"  onChange={frmRegister.handleChange}/>
          </div>
          <div className='form-group me-2 my-2'>
            <label className='me-2'>Gender:</label>
            <div>
            <label htmlFor="male">Male</label> 
            <input checked id="male" type='radio' className='form-check-input  mx-2' name="gender" value={true}  onChange={frmRegister.handleChange} />
            </div>
            <div>
            <label htmlFor="female">Female</label> 
            <input id='female' type='radio' className='form-check-input mx-2' name="gender" value={false}   onChange={frmRegister.handleChange}/>
            </div>
          </div>
          <div className='form-group'>
            <label>Phone</label>
            <input className='form-control' name="phone"  onChange={frmRegister.handleChange} />
          </div>
          <div className='form-group'>
            <button className='btn btn-dark mt-2' type="submit">Create</button>
          </div>
        </div>
      </form>)
}

export default ReactQueryCreateUser
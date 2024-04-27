import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
const FormikDemo = () => {
    const regexName = /[^a-z0-9A-Z_àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]/u;
    const form = useFormik({
        initialValues: {
            email:'',
            fullName:'',
            gender:true,
            phone:'',
            password:''
        },
        onSubmit: (frmValue)=>{
            if(!form.isSubmitting){
                console.log(frmValue)
            }
            
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required('Email cannot be blank!').email('Email is invalid !'),
            fullName: Yup.string().required('FullName cannot be blank!').matches(regexName,'Full name is invalid !'),
            password: Yup.string().required('Password cannot be blank!').min(6,'Password must be 6 to 12 characters').max(12,'Password must be 6 to 12 characters'),
            phone: Yup.number().required('Phone cannot be blank!'),
        })
    })

  return (
    <div>
  <div className="container">
    
    <form className='w-50 mx-auto' onSubmit={form.handleSubmit}>
        <h3>Register</h3>
      <div className="form-group">
        <label>Email</label>
        <input data-type='email' className="form-control" name="email" id="email" onInput={form.handleChange} onBlur={form.handleBlur}/>
        {form.errors.email && <p className='text text-danger'>{form.errors.email}</p>}
      </div>
      <div className="form-group">
        <label>FullName</label>
        <input data-type='name' className="form-control" name="fullName" id="fullName" onInput={form.handleChange} onBlur={form.handleBlur}/>
        {form.errors.fullName && <p className='text text-danger'>{form.errors.fullName}</p>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" name="password" id="password" onInput={form.handleChange} onBlur={form.handleBlur}/>
        {form.errors.password && <p className='text text-danger'>{form.errors.password}</p>}
      </div>
      <div className="form-group my-2">
        <label className='me-2'>Gender</label>
        <input type="radio" className="form-check-input" name="gender" id="Male" value={'true'} checked={form.values.gender === 'true'} onChange={form.handleChange}/>
        <label className='mx-2' htmlFor="gender">Male</label>
        <input type="radio" className="form-check-input" name="gender" id="Female" value={'false'} checked={form.values.gender === 'false'} onChange={form.handleChange}/>
        <label className='mx-2' htmlFor="gender">Female</label>
        
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input data-type='phone' className="form-control" name="phone" id="phone" type="number" onInput={form.handleChange} onBlur={form.handleBlur}/>
        {form.errors.phone && <p className='text text-danger'>{form.errors.phone}</p>}
      </div>
      <div className="form-group mt-2">
        {form.isSubmitting ? <button className="btn btn-primary mx-2" type="button" disabled={true}>Loading...</button> : <button className="btn btn-primary" type="submit" disabled={!form.isValid}>Register</button> }
        
        
      </div>
    </form>
  </div>
</div>
  )
}

export default FormikDemo
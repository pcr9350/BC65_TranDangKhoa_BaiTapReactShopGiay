import { useFormik } from 'formik'
import React from 'react'
import { addUserActionApi, addUserActionAsync } from '../../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';


const CreateUser = () => {
  const dispatch = useDispatch();
  const frmRegister = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      gender: true,
    },
    onSubmit: (values) => {
      // console.log(values);

      //Cách 1: action Thunk
      // const actionThunk = addUserActionApi(values);
      // dispatch(actionThunk);

      // Cách 2: ActionAsync từ createActionThunk
      const actionThunk = addUserActionAsync(values);
      dispatch(actionThunk)
    },
  });


  return (
    <form action="" className='container' onSubmit={frmRegister.handleSubmit}>
      <h3>Create User</h3>
      <div className='w-75 mx-auto'>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" name='name' className='form-control' onChange={frmRegister.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" name='email' className='form-control' onChange={frmRegister.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="">password</label>
            <input type="text" name='password' className='form-control' onChange={frmRegister.handleChange}/>
          </div>
          <div className="form-group mx-2 my-2">
            <label htmlFor="" className='me-2'>Gender: </label>
            <div>
            <label htmlFor="male">Male</label>
            <input value={true} checked name='gender' id='male' className='form-check-input mx-2' type='radio' onChange={frmRegister.handleChange}/>
            </div>
            <div>
            <label htmlFor="female">Female</label>
            <input value={false} name='gender' id='female' className='form-check-input mx-2' type='radio' onChange={frmRegister.handleChange}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">Phone</label>
            <input type="text" name='phone' className='form-control' onChange={frmRegister.handleChange}/>
          </div>
          <div className="form-group">
            <button className='btn btn-dark mt-2' type='submit'>Create</button>
          </div>
      </div>
    </form>
  )
}

export default CreateUser
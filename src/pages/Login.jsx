import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik'
import axios from 'axios'
import { TOKEN_AUTHOR, setCookie, setDataTextStorage } from '../util/utilFunction';
const Login = () => {
    //hook của react router dom giúp chuyển hướng trang sau một xử lý
    // const navigate = useNavigate();
    
    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     const userLogin = {
    //         email: document.querySelector('#email').value,
    //         password: document.querySelector('#password').value
    //     }
    //     if(userLogin.email == 'cybersoft@gmail.com' && userLogin.password === '123456'){
    //         //chuyển hướng về page profile
    //         navigate('/user/profile');
    //     }else{
    //         //chuyển hướng về page forgot password
    //         navigate('/forgot');
    //     }
    // }
    const userLoginForm = useFormik({
        initialValues:{
            email: '',
            password: ''
        },
        onSubmit: async (values)=>{
            // console.log(values)
            // Gọi api để đăng nhập
            const res = await axios.post('https://apistore.cybersoft.edu.vn/api/Users/signin', values);
            // console.log(res.data)
            // Lưu vào localstorage
            setDataTextStorage(TOKEN_AUTHOR, res.data.content.accessToken);
            setCookie(TOKEN_AUTHOR, res.data.content.accessToken);
        }
    });
  return (
    <div className='container'>
        <form className='w-50 mx-auto' onSubmit={userLoginForm.handleSubmit}>
            <h3 className='text-center'>Login</h3>
            <div className='form-group'>
                <label>Email</label>
                <input className='form-control' name='email' id='email' onInput={userLoginForm.handleChange}/>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input className='form-control' name='password' id='password' onInput={userLoginForm.handleChange}/>
            </div>
            <div className='form-group mt-2'>
                <button type='submit' className='btn btn-success'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login
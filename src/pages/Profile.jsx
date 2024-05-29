import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TOKEN_AUTHOR, getDataTextStorage } from '../util/utilFunction';
import useRoute from '../CustomHook/useRoute'
import { httpStore } from '../util/config';

const Profile = () => {
  // state chứa user profile sau khi gọi api
  const [userProfile, setUserProfile] = useState({})
  const {navigate} = useRoute()
  const getProfileApi = async ()=>{
    try{
      const res = await httpStore.post('/api/Users/getProfile',null);
    setUserProfile(res.data.content);
    // console.log(res.data.content)
    }
    catch(err){
      console.log(err.response?.status)
      if (err.response?.status == 401){
        navigate('/login')
      }
    }
    finally{
      // Đúng hay sai gì cũng chạy
    }
    
  }  

  useEffect(()=>{
    getProfileApi();
  },[])
  return (
    <div className='container'>
      <h3>Profile Page</h3>
      <div className="d-flex">
        <div className="w-25">
          <img src={userProfile.avatar} className='w-100 rounded rounded-circle' alt="..." />
          <br /><br />
          
        </div>
        <div className="w-75">
          <h3>Info</h3>
          <h3>Email: {userProfile.email}</h3>
          <h3>Name: {userProfile.name}</h3>
        </div>

      </div>
    </div>
  )
}

export default Profile
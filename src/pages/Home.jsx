import React from 'react'
import useGetApi from '../CustomHook/useGetApi'
import useRoute from '../CustomHook/useRoute';
import useRedux from '../CustomHook/useRedux';

const Home = () => {
  const data = useGetApi('https://shop.cyberlearn.vn/api/product');
  // console.log(data)
  const {
    navigate,
    params,
    searchParam,
    setSearchParam
  } = useRoute();
  const {state,dispatch} = useRedux();
  // console.log(state);
  
  return (
    <div className="container">
      <button className='about btn btn-primary' onClick={()=>{
        navigate('about')
      }}>Next page</button>
      <h3>Shop Shoe</h3>
      <div className="row">
        {data.content?.map((prod,index)=>{
          return <div className='col-3 mt-2' key={index}>
            <div className='card'>
              <img src={prod.image} alt="" />
              <div className="card-body">
              <p>{prod.name}</p>
              </div>
              
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Home
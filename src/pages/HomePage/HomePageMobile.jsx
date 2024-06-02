import React from 'react'
import useGetApi from '../../CustomHook/useGetApi';
import { NavLink } from 'react-router-dom';

const HomePageMobile = () => {
  const data = useGetApi('/api/Product');
  return (
    <div className='container'>
      <h3>Shoes Shop</h3>
      {data?.content?.map((prod, index)=>{
        return <div className='d-flex mt-2' key={index}>
          <img className='w-25' src={prod.image} alt='...' />
          <div className='info d-flex flex-column'>
            <div>
              <h3>{prod.name}</h3>
              <p>{prod.shortDescription}</p>
            </div>
            <div className='text-end'>
              <NavLink to={`/detail/${prod.id}`} className={'btn btn-dark'}>
              View Detail</NavLink>
              </div>
          </div>
        </div>
      })}
    </div>
  )
}

export default HomePageMobile
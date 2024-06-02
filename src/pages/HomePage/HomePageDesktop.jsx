import React, { useEffect } from 'react'
import useGetApi from '../../CustomHook/useGetApi'
import { NavLink } from 'react-router-dom';
const HomePageDesktop = () => {
    const data = useGetApi('/api/Product');

    
  return (
    <div className='container'>
        <h3>Shop Shoes</h3>
        <div className="row">
            {data?.content?.map((product, index)=>{
                return <div className='col-md-4 col-6 col-lg-3 mt-2' key={index}>
                    <div className="card">
                        <img src={product.image} alt={product.alias} />
                        <div className="card-body">
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                            <NavLink to={`/detail/${product.id}`} className='btn btn-dark'>View Detail</NavLink>
                        </div>
                    </div>
                    </div>
            })}
        </div>
    </div>
  )
}

export default HomePageDesktop
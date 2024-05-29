import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import { httpStore } from '../util/config';

const Detail_UseParam = (props) => {
    const [productDetail, setProductDetail] = useState({});
    // useParam => Lấy param trên url
    const params = useParams();

    let productId = +params.idProduct;
    
    
    // if (productId === 19) {
    //     document.querySelector('#nextProduct').classList.add('disabled');
    // } else {
    //     document.querySelector('#nextProduct').classList.add('enabled');
    // }
    
    const getProductDetail = async ()=>{
        const res = await httpStore.get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.idProduct}`);
        setProductDetail(res.data.content);
        // console.log(res.data.content)
    };
    useEffect(()=>{
        getProductDetail();
        if (productId === 1) {
          document.querySelector("#preProduct").classList.add("disabled");
        } else {
          document.querySelector("#preProduct").classList.remove("disabled");
        }
        if (productId === 19) {
          document.querySelector("#nextProduct").classList.add("disabled");
        } else {
          document.querySelector("#nextProduct").classList.remove("disabled");
        }
    },[params.idProduct]);
  return (
    <div className='container'>
        <h3>Detail</h3>
        <p>Params id: {params.idProduct} - {productDetail.name}</p>
        <NavLink id='preProduct' className='btn btn-danger' to={`/detail/${productId-1}`}>Previous Product</NavLink>
        <NavLink id='nextProduct' className='btn btn-primary mx-2' to={`/detail/${productId+1}`}>Next Product</NavLink>
        <div className='row'>
            <div className='col-2'>
                <img src={productDetail.image} alt={productDetail.alias} className='w-100' />
            </div>
            <div className="col-10">
                <h3>{productDetail.name}</h3>
                <p>{productDetail.description}</p>
                {/* optional chaining: ? nếu như ref có giá trị thì render còn không có giá trị thì bỏ qua */}
                {productDetail.size?.map((size)=>{
                    return <button key={size} className='btn btn-dark me-2'>{size}</button>
                })}
                <br />
                <button className='btn btn-primary mt-2'>Add to cart <i className='fa fa-cart-plus'></i></button>
            </div>
        </div>
        <h3>Related Products</h3>
        <div className="row mt-2">
            {productDetail.relatedProducts?.map((prod, index)=>{
                return <div className='col-4' key={index}>
                    <div className="card">
                        <img src={prod.image} className='w-100' alt={prod.alias} />
                        <div className="card-body">
                            <h3>{prod.name}</h3>
                            <p>{prod.price}</p>
                            <NavLink className='btn btn-dark' to={`/detail/${prod.id}`}>View Detail</NavLink>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Detail_UseParam
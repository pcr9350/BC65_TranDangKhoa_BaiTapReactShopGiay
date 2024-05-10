import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ChildUpdating = (props) => {
    const [productDetail, setProductDetail] = useState({});
    const getProductDetail = async ()=>{
        const res = await axios.get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${props.idProduct}`);
        setProductDetail(res.data.content)
    };
    useEffect(()=>{
        // console.log('child update')
        getProductDetail();
    }, [props.idProduct]);
  return (
    <div className='bg-dark text-white p-2 mt-2'>Child Component Updating {props.idProduct}
        <div className='card w-25'>
            <img className='w-100' src={productDetail.image} alt={productDetail.name} />
            <h3>{productDetail.name}</h3>
            <p>{productDetail.price}</p>
        </div>
    </div>
  )
}

export default ChildUpdating
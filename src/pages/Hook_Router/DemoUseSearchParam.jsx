import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import {useFormik} from 'formik'
import axios from 'axios'

const DemoUseSearchParam = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [arrProduct, setArrProduct] = useState([]);
    const frm = useFormik({
        initialValues:{
            keyword:''
        },
        onSubmit: (values)=>{
            // console.log(values)
            //setSearchParam đưa dữ liệu người dùng nhập lên url
            setSearchParam({
            k: values.keyword
            })
        }
    });

    const getProductByKeyword = async ()=>{
        const k = searchParam.get('k');
        const res = await axios.get(`https://shop.cyberlearn.vn/api/Product?keyword=${k}`);
        console.log(res.data.content);

        setArrProduct(res.data.content);
    }

    useEffect(()=>{
        // console.log(searchParam.get('k'));
        // Lấy tham só để call api
        getProductByKeyword();
    },[searchParam.get('k')]);

  return (
    <div className='container'>
        <h3>Tìm kiếm sản phẩm</h3>
        <form action="" onSubmit={frm.handleSubmit}>
            <input type="text" className='w-25 d-inline form-control' name='keyword' onInput={frm.handleChange}/>
            <button className='btn btn-success mx-3'>Search</button>
        </form>
        <h3>Kết quả tìm kiếm</h3>
        <div className="row result">
            {arrProduct.map((prod,index)=>{
                return <div className="col-4" key={index}>
                <div className="card">
                    <img src={prod.image} alt="..." />
                    <div className="card-body">
                        <h3>{prod.name}</h3>
                        <p>{prod.price}</p>
                        <NavLink to={`/detail/${prod.id}`} className={'btn btn-success'}>View Detail</NavLink>
                    </div>
                </div>
            </div>
            })}
        </div>
        </div>

  )
}

export default DemoUseSearchParam
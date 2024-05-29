import React, { useEffect, useState } from 'react'
import ChildComponent from './ChildComponent'
import axios from 'axios'
//Mounting là quá trình react render component lên giao diện

const DemoMountingComponent = () => {
    // console.log('component mount')
    const [state, setState] = useState(1);
    const [arrProduct, setArrayProduct] = useState([]);
    useEffect(()=>{
        // console.log('Hàm chạy sau mỗi lần render mount và mỗi lần component update')
        getProductApi()

    }, []); // Ý nghĩa tham số thứ 2 của useEffect (Dependencies) dùng để so sánh lần render trước và lần render sau có bị thay đổi giá trị hay không, nếu giá trị nầy thay đổi thì sẽ callback thực thi (tham số 1). 
    // Hàm gọi api
    const getProductApi = async () => {
        const res = await axios.get('https://shop.cyberlearn.vn/api/Product')
        // console.log(res.data.content)
        setArrayProduct(res.data.content)
    }
  return (
    <div className='container'>
        <h3>Parent Component</h3>
        <button className='btn btn-primary my-2' onClick={()=>{
            setState(state+1)
        }}>{state}</button>
        <ChildComponent />
        <hr />
        <h3>Get Api Product</h3>
        <button className='btn btn-success' onClick={()=>{
            getProductApi();
        }}>Call Api</button>
        <h3>Products</h3>
        <div className='row'>
            {arrProduct.map((prod)=>{
                return <div className='col-3' key={prod.id}>        
                <div className='card'>
                    <img src={prod.image} alt={prod.name} />
                    <div className="card-body">
                        <h3>{prod.name}</h3>
                        <p>{prod.price}</p>
                    </div>
                </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default DemoMountingComponent

//useEffect có các cách sử dụng sau:
// 1. render giao diện product sau mỗi lần mounting.
// 2. khi component cha thay đổi thì component con updating theo. 
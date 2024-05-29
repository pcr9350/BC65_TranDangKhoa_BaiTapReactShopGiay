import React from 'react'
import {useDispatch} from 'react-redux';
const ProductCard = (props) => {
  const dispatch = useDispatch();
    const {prod} = props;
  return (
    <div className='card'>
        <img src={prod.img} alt='...'/>
        <div className='card-body'>
            <h3>{prod.name}</h3>
            <p>{prod.price}</p>
            <button className='btn btn-primary' onClick={()=>{
              //tạo action và đưa lên hàm reducer xử lý thông qua việc dispatch
              const action = {
                type: 'ADD_ITEM',
                payload: prod
              }
              dispatch(action);
            }}><i className='fa fa-cart-plus'></i> Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import _ from 'lodash'
const CartPage = () => {
    let arrCart = useSelector(state=>state.cartReducer);
    const dispatch = useDispatch();
    arrCart = _.orderBy(arrCart,['id']);
    const handleDelItem = (id)=> {
        //gởi id đó lên reducer thông qua action
        const action = {
            type: 'DEL_ITEM',
            payload: id
        }
        dispatch(action);
    }
    const handleChangeQuantity=(id,quantity)=>{
        // tạo ra action
        const action = {
            type: 'CHANGE_QUANTITY',
            payload: {
                id,
                quantity
            }
        }
        // dispatch action
        dispatch(action);
    }
  return (
    <div className='container'>
        <h3>Cart Page</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>img</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {arrCart.map((itemCart, index)=>{
                    return <tr key={index}>
                    <td>{itemCart.id}</td>
                    <td><img src={itemCart.img} alt='...' width={50} height={50}/></td>
                    <td>{itemCart.price}</td>
                    <td>
                        <button className='btn btn-success mx-2' onClick={()=>{
                            handleChangeQuantity(itemCart.id, 1)
                        }}>+</button>
                        <input id='inputQuantity' min={1} type='number' className='form-control d-inline' style={{width:100}} value={itemCart.quantity}
                        onChange={(e)=>{
                            let {value} = e.target;
                            const regexNumber = /^[1-9][0-9]?$/;
                            if(regexNumber.test(value)) {
                                const action = {
                                    type: 'CHANGE_INPUT_QUANTITY',
                                    payload: {
                                        id: itemCart.id,
                                        quantity: Number(value)
                                    }
                                }
                                dispatch(action);
                            }else {
                                alert('Nhập từ 1 tới 99')
                            }
                        }} />
                        <button className='btn btn-success mx-2' onClick={()=>{
                            if(document.querySelector('#inputQuantity').value > 1) {
                                handleChangeQuantity(itemCart.id, -1)
                            }
                            
                        }}>-</button>
                    </td>
                    <td>{itemCart.quantity * itemCart.price}</td>
                    <td>
                        <button className='btn btn-danger'><i className='fa fa-trash' onClick={()=>{
                            handleDelItem(itemCart.id)
                        }}></i></button>
                    </td>
                </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default CartPage
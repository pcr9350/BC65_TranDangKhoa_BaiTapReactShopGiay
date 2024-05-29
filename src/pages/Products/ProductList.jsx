import React from 'react'
import ProductCard from '../../components/ProductCard';

const products = [
    { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './img/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
    { id: 4, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 }
    ];

const ProductList = () => {
  return (
    <div className='container'>
        <h3>Product List</h3>
        <div className='row'>
            {products.map((item,index)=>{
                return <div className='col-3' key={index}>
                    <ProductCard prod={item} />
                </div>
            })}
        </div>
    </div>
  )
}

export default ProductList
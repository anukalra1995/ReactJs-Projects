import React from 'react'
import { Rating } from 'react-simple-star-rating';
import '../CSS/Product.css';

function Product({id,title,image,rating,price,addtoBasket}) {

  return (
    <div className="product">
        <img src={image} alt="product" />
        <div className="product_info">
          <div>{title}</div>
          <div className="product_price">${price}</div>
        </div>
        <div className='propduct_info'>
          <Rating initialValue={rating} />
        </div>
        <button onClick={addtoBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
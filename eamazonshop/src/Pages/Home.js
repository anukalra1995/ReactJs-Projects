import React from 'react';
import Product from './Product';
import '../CSS/Home.css';
import ShopContext from '../Context/ShopContext';
import Header from './Header';

function Home(props) {
  // console.log(props);
  return (
    <div>
      {/* <img src='https://imatrix.com/wp-content/uploads/sites/12/2021/03/ecommerce.jpg' alt='' className='home_image'/> */}
      <ShopContext.Consumer>
          {
          context => (
            <React.Fragment>
              <Header cart = {context.cart.reduce((count, curItem) => {return count + curItem.quantity;}, 0)}/>
              <img src='https://imatrix.com/wp-content/uploads/sites/12/2021/03/ecommerce.jpg' alt='' className='home_image'/>
                
              <main className="products">
                <ul>
                {
                  context.products.map(
                    product => (
                      <li key={product.id}>
                        <Product id={product.id} title = {product.title} image={product.image} price = {product.price} rating={product.rating} addtoBasket= {context.addProductToCart.bind(this, product)}/>
                      </li>
                    )
                  )
                }
                </ul>
              </main>
            </React.Fragment>
          )}
      </ShopContext.Consumer>
    </div>
    
  )
}

export default Home

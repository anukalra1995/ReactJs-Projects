import React, { useContext, useEffect } from 'react'
import ShopContext from '../Context/ShopContext';
import Header from './Header';

function Checkouts() {
  // const [{basket}, dispatch] = useStateValue();
  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <React.Fragment>
      <Header cart = {context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)} />
      <main className="checkout_left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
        {
          context.cart.length <= 0 && <p>No Item in the Cart!</p>
        }
        <div> 
          <ul>
          {context.cart.map(cartItem => (
            console.log(cartItem),
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> -  ${cartItem.price} 
                <div> 
                  <button onClick={context.removeProductFromCart.bind(this,cartItem.id)} style={{ width: "30px", height: "25px",}}> - </button>
                    &nbsp;&nbsp;{cartItem.quantity} &nbsp;&nbsp;
                  <button onClick={context.addProductToCart.bind(this,cartItem.id)} style={{ width: "30px", height: "25px",}}> + </button>
                </div>
                <img src={cartItem.image} alt="product" />
                
              </div>
              
            </li>
          ))}
          </ul>

        </div>
      </main>
    </React.Fragment>
  )
}

export default Checkouts
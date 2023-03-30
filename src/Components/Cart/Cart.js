import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../Context/contextApi';
// import ProductList from '../ProductList/ProductList';
import './Cart.css';

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += Number(item.price);
    });
    return totalPrice;
  };
  
  

  const [total, setTotal] = useState(getTotalPrice());


  useEffect(() => {
    setTotal(getTotalPrice());
  }, [cart]);

  const handleRemoveItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    setTotal(getTotalPrice()); 
  };

  const handleCheckout = () => {
    // Handle checkout logic
  };

  return (
    <div className="container cart-container">
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <>
          <p>Total items: {cart.length}</p>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <div>
                  <img className='w-25' src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </div>
                <div>
                  <span>{item.price}</span>
                  <button className='btn-remove' onClick={() => handleRemoveItem(index)}>x</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-price">
          <span style={{ display: 'inline-block' }}>Total Price: Rs.{total}</span>
            {/* <span>Total Price: ${total}</span> */}
          </div>
          <button className="btn btn-warning checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

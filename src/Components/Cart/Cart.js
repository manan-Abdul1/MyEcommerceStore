import { useContext } from 'react';
import { CartContext } from '../../Context/contextApi';
import './Cart.css'
export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const handleRemoveItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
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
                <span>{item.name}</span>
                <button className='btn btn-danger ms-2' onClick={() => handleRemoveItem(index)}>x</button>
              </li>
            ))}
          </ul>
          <button className='checkout-btn' onClick={handleCheckout}>Checkout</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

import { useContext } from 'react';
import { CartContext } from '../../Context/contextApi';
import './Cart.css';

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

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
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
                <img className='w-25 m' src={item.image} alt={item.name} />
                <span>{item.name}</span>
                </div>
                <div>
                <span>{typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</span>
                <button className='btn-remove' onClick={() => handleRemoveItem(index)}>x</button>
                </div>
            </li>
            ))}
          </ul>
          <div className="total-price">
            <span>Total Price: ${getTotalPrice().toFixed(2)}</span>
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

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/contextApi';
import './Header.css'
function Header() {
  const {cart} = useContext(CartContext);
  return (
    <div className='header bg-dark bg-gradient'>
    <div className="row">
      <div className="col-5">
        <img className='img-logo' src='https://wallpaper.dog/large/20558157.jpg' />
      </div>
      <div className="col-7">
        <ul className='d-flex container'>
          <li><Link className='text-white' to="/">Home</Link></li>
          <li><Link className='text-white' to="/products">Products</Link></li>
          <li><Link  className='text-white' to="/cart">Cart ({cart.length})</Link></li>
        </ul>
      </div>
    </div>
    </div>
  );
}
export default Header;
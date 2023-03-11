import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Product from './Components/Product/Product';
import ProductDetails from './Components/ProductDetails/ProductDetail';
function App() {
  return (
    <>
      <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/products" element={<Product/>} exact/>
            <Route path="/cart" element ={<Cart />}/>
            <Route path="/products-details/:id" element={<ProductDetails/>} exact/>
            {/* <Header/> */}
          </Routes>
          <Footer/>
      </Router>
    </>
  );
}

export default App;

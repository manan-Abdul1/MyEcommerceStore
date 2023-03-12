import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import PopularProducts from '../PopularProduct/PopularProduct';
import ProductCategories from '../ProductCategories/ProductCategories';
import './Home.css'
function Home() {
  return (
    <div>

      <div className='position-relative'>
        <img 
        src='https://wallpaper.dog/large/5521900.jpg' 
        style={{height:'110vh',width:'100%'}}
         />
        <div className='home-discription'>
        <h1 className='title-heading'>Welcome to My <br/> Ecommerce Website</h1>
        <p className='mt-3 mb-4'>Check out our latest products and deals!</p>
        <Link to='/products'><button className='btn btn-primary'>Shop Now</button></Link>
        </div>
      </div>

      <div className='container home-description'>
        <div className="row">
            <div className="col-6">
                <img 
                className='' 
                src='https://wallpaper.dog/large/5521870.jpg'
                style={{height:'500px',width:'100%'}}
                 />
            </div>
            <div className="col-6 my-auto text-description">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. quisquam iste sunt tempora! Soluta nostrum unde dignissimos, excepturi necessitatibus veritatis et sunt repellat officia aspernatur doloribus, tempora explicabo doloremque porro voluptates. Libero, reiciendis aliquid!</span>
            </div>
        </div>
      </div>
      <About/>
      <div className='container home-description'>
        <div className="row">
            <div className="col-6 my-auto text-description">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. quisquam iste sunt tempora! Soluta nostrum unde dignissimos, excepturi necessitatibus veritatis et sunt repellat officia aspernatur doloribus, tempora explicabo doloremque porro voluptates. Libero, reiciendis aliquid!</span>
            </div>
            <div className="col-6">
                <img 
                className='' 
                src='https://wallpaper.dog/large/5521870.jpg'
                style={{height:'500px',width:'100%'}}
                 />
            </div>
        </div>
      </div>
      <PopularProducts/>
      {/* <ProductCategories /> */}
    </div>
  );
}

export default Home;

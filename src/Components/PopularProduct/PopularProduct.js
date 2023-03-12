import { useState } from 'react';
import './PopularProducts.css';

export default function PopularProducts() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 9.99,
      imageUrl: 'https://wallpaper.dog/large/11038441.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      imageUrl: 'https://wallpaper.dog/large/11038450.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 29.99,
      imageUrl: 'https://wallpaper.dog/large/20514668.jpg'
    }
  ];

  return (
    <div className="popular-products-container">
      <h2>Popular Products</h2>
      <div className="d-flex">
        {products.map((product) => (
          <div key={product.id} className="product-card mx-auto">
            <div className="product-images">
              <img src={product.imageUrl} alt={product.name} />
              <div className="product-overlay">
                <div className="product-overlay-text">
                  <p className="price">${product.price.toFixed(2)}</p>
                  <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

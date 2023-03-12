// import { useContext } from 'react';
// import { CartContext } from '../../Context/contextApi';
import './ProductCategories.css';

function ProductCategories() {
    // const {products} = useContext(CartContext);
    const products = [
        {
            id: 1,
            name: 'T-Shirt',
            price: 19.99,
            image: 'https://wallpaper.dog/large/5464522.jpg',
            category: 'clothing',
          },
          {
            id: 2,
            name: 'Jeans',
            price: 49.99,
            image: 'https://wallpaper.dog/large/11038441.jpg',
            category: 'clothing',
          },
          {
            id: 3,
            name: 'Sweater',
            price: 29.99,
            image: 'https://wallpaper.dog/large/11038450.jpg',
            category: 'clothing',
          },
          {
            id: 4,
            name: 'Watch',
            price: 99.99,
            image: 'https://via.placeholder.com/150',
            category: 'accessories',
          },
          {
            id: 5,
            name: 'Sunglasses',
            price: 39.99,
            image: 'https://via.placeholder.com/150',
            category: 'accessories',
          },
          {
            id: 6,
            name: 'Wallet',
            price: 29.99,
            image: 'https://via.placeholder.com/150',
            category: 'accessories',
          },
          {
            id: 7,
            name: 'Sneakers',
            price: 79.99,
            image: 'https://wallpaper.dog/large/20514668.jpg',
            category: 'shoes',
          },
          {
            id: 8,
            name: 'Boots',
            price: 99.99,
            image: 'https://wallpaper.dog/large/20514668.jpg',
            category: 'shoes',
          },
          {
            id: 9,
            name: 'Sandals',
            price: 29.99,
            image: 'https://wallpaper.dog/large/20514668.jpg',
            category: 'shoes',
          },
];
  return (
    <div className="product-categories-container container">
      <div className="category">
        <h2 className='text-center'>Clothing</h2>
        <div className="products">
          {products
            .filter((product) => product.category === 'clothing')
            .map((product) => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="category">
        <h2>Accessories</h2>
        <div className="products">
          {products
            .filter((product) => product.category === 'accessories')
            .map((product) => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="category">
        <h2>Shoes</h2>
        <div className="products">
          {products
            .filter((product) => product.category === 'shoes')
            .map((product) => (
              <div key={product.id} className="product">
                <img className='w-100' src={product.image} alt={product.name} />
                <p>{product.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCategories;

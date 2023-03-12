import React, { useContext, useState } from 'react';
import ProductList from '../ProductList/ProductList';
import { CartContext } from '../../Context/contextApi';

export default function Filtered() {
  const {products} = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.rating.toString().includes(searchQuery) ||
    product.price.toString().includes(searchQuery)
  );

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12 mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search products by name, rating or price"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        {
          filteredProducts.map((product) => (
            <div className='col-md-4 mb-2 mt-4 text-center' key={product.id}>
              <ProductList product={product} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

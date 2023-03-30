import React, { useContext, useState } from 'react';
import ProductList from '../ProductList/ProductList';
import { CartContext } from '../../Context/contextApi';

export default function Filtered() {
  const { products } = useContext(CartContext);
  const [searchInput, setSearchInput] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(searchInput.toLowerCase());
    const priceMatch = (product.price >= minPrice || !minPrice) && (product.price <= maxPrice || !maxPrice);
    return nameMatch && priceMatch;
  });

  return (
    <div className="mx-auto">
      <div className="row">
        <div className="col-md-2 my-4">
          <div className="mb-3 ">
            <label htmlFor="searchInput" className="form-label">Search by name:</label>
            <input type="text" className="form-control w-75" id="searchInput" value={searchInput} onChange={handleSearchInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="minPrice" className="form-label">Minimum price:</label>
            <input type="number" className="form-control w-75" id="minPrice" value={minPrice} onChange={handleMinPriceChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="maxPrice" className="form-label">Maximum price:</label>
            <input type="number" className="form-control w-75" id="maxPrice" value={maxPrice} onChange={handleMaxPriceChange} />
          </div>
          <button className="btn btn-primary">Search</button>
        </div>
        <div className="col-md-10">
          <div className="row">
            {filteredProducts.map((product) => (
              <div className="col-md-4 mb-2 mt-4 text-center" key={product.id}>
                <ProductList product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

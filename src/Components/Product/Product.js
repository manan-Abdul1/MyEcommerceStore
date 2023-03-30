import React, { useContext, useState } from 'react';
import ProductList from '../ProductList/ProductList';
import { CartContext } from '../../Context/contextApi';
import Filtered from '../FilteredResult/Filtered';

export default function Product() {
  const { products } = useContext(CartContext);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilter = (filtered) => {
    setFilteredProducts(filtered);
    setIsFiltered(true);
  };

  const handleResetFilter = () => {
    setIsFiltered(false);
    setFilteredProducts([]);
  };

  return (
    <div className="container my-5">
      {!isFiltered ? (
        <>
          <button className="btn btn-primary" onClick={() => setIsFiltered(true)}>Filter</button>
          <div className='row'>
            {products.map((product) => (
              <div className='col-md-4 mb-2 mt-4 text-center' key={product.id}>
                <ProductList product={product} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <Filtered
          products={filteredProducts}
          onResetFilter={handleResetFilter}
        />
      )}
    </div>
  );
}

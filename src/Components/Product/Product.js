import React, { useContext } from 'react';
import ProductList from '../ProductList/ProductList';
import { CartContext } from '../../Context/contextApi';
import Filtered from '../FilteredResult/Filtered';

export default function Product() {
  const {products} = useContext(CartContext);
  return (
    <div className="container my-5">
      <Filtered />
      <div className='row'>
        {
          products.map((product) => (
            <div className='col-md-4 mb-2 mt-4 text-center' key={product.id}>
            <ProductList product={product} />
            </div>
          ))
        }
      </div>
    </div>
  );
}


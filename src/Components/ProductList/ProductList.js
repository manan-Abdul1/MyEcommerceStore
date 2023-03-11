import React, { useContext } from "react";
import { CartContext } from "../../Context/contextApi";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const ProductList = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6 className="card-subtitle mt-2 mb-3 text-muted">${product.price}</h6>
          <div className="card-subtitle mt-2 mb-3">
            <Rating value={product.rating} />
          </div>
          <button className="btn btn-primary" onClick={() => setCart([...cart, product])}>Add to Cart</button>
          <Link to={`/products-details/${product.id}`} className="btn btn-secondary ms-2">View Details</Link>
        </div>
      </div>
    </>
  );
};

export default ProductList;

import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/contextApi';

export default function ProductDetails() {
  const { products, cart , setCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = products.find((product) => product.id === Number(id));
    setProduct(product);
  }, []);

  if (!product) {
    return <div className='container'>Product not found.</div>;
  }

  return (
    <div className="container text-center my-5" style={{width: '30%'}}>
    <img src={product.image} className="w-100" alt={product.name}/>
    <div className="card-body mt-1">
      <h5 className="card-title mt-1">{product.name}</h5>
      <p className="card-text text-muted mt-3 mb-3">{product.description}</p>
      <h6 className="card-subtitle mb-2 text-dark">${product.price}</h6>
      <button className="btn btn-primary" onClick={()=> setCart([...cart,product]) }>Add to Cart</button>
    </div>
  </div>
  );
}




// export default function BlogDetails() {
//   const { blogIdOrSlug } = useParams();
//   const [blogPost, setBlogPost] = useState(null);

//   useEffect(() => {
//     // Make an HTTP request to fetch the blog post data based on `blogIdOrSlug`
//     fetch(`/api/blogposts/${blogIdOrSlug}`)
//       .then(response => response.json())
//       .then(data => setBlogPost(data))
//       .catch(error => console.error(error));
//   }, [blogIdOrSlug]);

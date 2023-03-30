import { faker } from '@faker-js/faker';
import { createContext, useState } from 'react';

export const CartContext = createContext();
export default function ContextApi({ children }) {
  const [cart, setCart] = useState([]);

  const products = Array.from({ length: 14 }).map((_, index) => {
    return {
      id: index + 1,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      image: faker.image.image(),
      rating: faker.datatype.number({'min': 1,'max': 5, precision:0.1 })
    };
});

  // const addItems = (product) => {
  //   const existingProductIndex = cart.findIndex((idx) => idx.id === product.id );
  //   if(existingProductIndex !== -1){
  //       const updatedCart = [...cart];
  //       updatedCart[existingProductIndex].quantity +=1;
  //       setCart(updatedCart);
  //   }
  //   else{
  //       setCart([...cart,{...product, quantity: 1}])
  //   }
  // };

  // const removeItems = (item) => {
  //   const updatedCart = cart.filter( i => i.id !== item.id);
  //   setCart(updatedCart);
  // };
  // const clearItems = () => {
  //     setCart([]);
  // };

  // const total = cart.reduce((prevVal,currVal) => prevVal + currVal.price, 0);
  return (
    <CartContext.Provider value={{ products, cart, setCart}}>
      {children}
    </CartContext.Provider>
  );
}

// export const products = [
//     {
//       "id": 1,
//       "name": "Product 1",
//       "description": "This is the first product",
//       "price": 9.99,
//       "image": "https://picsum.photos/200"
//     },
//     {
//       "id": 2,
//       "name": "Product 2",
//       "description": "This is the second product",
//       "price": 19.99,
//       "image": "https://picsum.photos/200"
//     },
//     {
//       "id": 3,
//       "name": "Product 3",
//       "description": "This is the third product",
//       "price": 29.99,
//       "image": "https://picsum.photos/200"
//     },
//     {
//       "id": 4,
//       "name": "Product 4",
//       "description": "This is the fourth product",
//       "price": 39.99,
//       "image": "https://picsum.photos/200"
//     }
//   ];
  
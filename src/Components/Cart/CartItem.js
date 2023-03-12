import React from 'react';

export default function CartItem({ item, index, handleRemoveItem }) {
  return (
    <li>
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <span className="cart-item-name">{item.name}</span>
        <span className="cart-item-price">${item.price.toFixed(2)}</span>
        <button className="btn btn-remove" onClick={() => handleRemoveItem(index)}>x</button>
      </div>
    </li>
  );
}

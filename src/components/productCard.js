import React from 'react';
import './productCard.css';
import roses from '../images/pink-roses.jpg';

function ProductCard() {
  return (
    <div className="product-card">
      <img src={roses} alt="pink roses" />
      <p className="product-name">Product Name</p>
      <div className="price-and-quantity-container">
        <p className="price">$9.99</p>
        <input type="number" min="0" placeholder="0" />
      </div>
      <button type="button">Add to Cart</button>
    </div>
  );
}

export default ProductCard;

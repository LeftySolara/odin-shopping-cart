import React from 'react';
import './productCard.css';

function ProductCard(props) {
  const { id, name, price, image, handleButtonClick } = props;

  return (
    <div id={id} className="product-card">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <p className="product-name">{name}</p>
      <div className="price-and-quantity-container">
        <p className="price">${price}</p>
        <input id={`input-${id}`} type="number" min="0" placeholder="0" />
      </div>
      <button
        type="button"
        onClick={() => {
          const quantity = document.getElementById(`input-${id}`).value;
          handleButtonClick(id, name, price, quantity);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

import React from 'react';
import ProductCard from './productCard';
import products from '../products';
import './shop.css';

function Shop(props) {
  const { handleButtonClick } = props;
  const productCards = [];
  products.forEach((product) => {
    productCards.push(
      <ProductCard
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        handleButtonClick={handleButtonClick}
      />,
    );
  });
  return <div id="shop">{productCards}</div>;
}

export default Shop;

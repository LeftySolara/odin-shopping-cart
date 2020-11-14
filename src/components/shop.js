import React from 'react';
import ProductCard from './productCard';
import './shop.css';

function Shop() {
  const products = [];
  for (let i = 0; i < 20; ++i) {
    products.push(<ProductCard />);
  }

  return <div id="shop">{products}</div>;
}

export default Shop;

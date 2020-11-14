import React from 'react';
import './cart.css';

function CartIsEmpty() {
  return (
    <div>
      <h2>Your cart is empty!</h2>
    </div>
  );
}

function Cart(props) {
  const { items } = props;

  if (items.length === 0) {
    return <CartIsEmpty />;
  }

  return (
    <div id="cart">
      <h2>Cart Page</h2>
    </div>
  );
}

export default Cart;

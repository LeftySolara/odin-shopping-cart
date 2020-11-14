import React from 'react';
import './cart.css';

function CartIsEmpty() {
  return (
    <div>
      <h2>Your cart is empty!</h2>
    </div>
  );
}

function CartDisplay(props) {
  const { items } = props;
  const cartItems = [];
  let totalPrice = 0;

  items.forEach((item) => {
    cartItems.push(
      <li>
        {item.name}: ${item.price} (x{item.quantity})
      </li>,
    );
    totalPrice += item.price * item.quantity;
  });

  return (
    <div id="cart-item-list">
      {cartItems}
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}

function Cart(props) {
  const { items } = props;

  if (items.size === 0) {
    return <CartIsEmpty />;
  }

  return (
    <div id="cart">
      <CartDisplay items={items} />
    </div>
  );
}

export default Cart;

import React, { useState } from "react";
const Cart = ({ cart }) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = () => {
  };
  return (
    <div className="cart">
      <div className="cart-actions">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
};
export default Cart;
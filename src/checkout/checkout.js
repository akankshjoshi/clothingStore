import React, { useState } from "react";
import "./checkout.css";
const Checkout = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const addItem = (item) => {
    setItems([...items, item]);
    setTotal(total + item.price);
  };
  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item));
    setTotal(total - item.price);
  };
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item)}>X</button>
          </li>
        ))}
      </ul>
      <div className="total">
        Total: ${total}
      </div>
      <button onClick={() => {
      }}>
        Checkout
      </button>
    </div>
  );
};
export default Checkout;
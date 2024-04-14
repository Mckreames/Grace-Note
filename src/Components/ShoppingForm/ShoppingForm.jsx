import React, { useState } from 'react';
import "./ShoppingForm.css";

export default function ShoppingForm({ addItem }) {

    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(0)

    function handleItemChange(event) {
        setItem(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        addItem(item, quantity);
    }



  return (
    <form action="#" method="POST" onSubmit={handleSubmit} className="pt-5 pb-5 offset-1 col-10 form">
        <label htmlFor="item">Song</label>
        <input
            className="input"
            type="text"
            required
            id="item"
            name="item"
            value={item} 
            onChange={handleItemChange} />
        <label htmlFor="quantity">BPM</label>
        <input 
            className="input"
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            required
            min="0"
            onChange={handleQuantityChange} />
        <button type="submit">Add</button>
    </form>
  );
}

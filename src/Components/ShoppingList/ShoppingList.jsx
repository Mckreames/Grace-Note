import React from 'react';
import "./ShoppingList.css";

function ShoppingItem({ id, item, quantity, deleteItem}) {

    function handleDelete(event) {
        event.preventDefault();
        deleteItem(id);
    }

    return (
        <li>
            <span>{item} ({quantity})</span>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default function ShoppingList({ items, deleteItem }) {
  
    const ItemsJsx = items.map(listItem => 
        <ShoppingItem 
            key={listItem.id} 
            id={listItem.id}
            item={listItem.item}
            quantity={listItem.quantity}
            deleteItem={deleteItem}
        />
    );

    return <ul className="container-fluid offset-1 col-10 pt-5 pb-5 list-items">{ ItemsJsx }</ul>
}

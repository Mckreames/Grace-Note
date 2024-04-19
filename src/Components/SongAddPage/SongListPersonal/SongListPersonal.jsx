import React from 'react';
import "./ShoppingList.css";

function ShoppingItem({ id, name, artist, songKey, bpm, deleteItem}) {

    function handleDelete(event) {
        event.preventDefault();
        deleteItem(id);
    }

    return (
        <li>
            <span>{name} {artist} {songKey} ({bpm})</span>
            <button onClick={handleDelete} className="float-end">Delete</button>
        </li>
    );
}

export default function ShoppingList({ items, deleteItem }) {
  
    const ItemsJsx = items.map(listItem => 
        <ShoppingItem 
            key={listItem.id} 
            id={listItem.id}
            name={listItem.name}
            artist={listItem.artist}
            songKey={listItem.songKey}
            bpm={listItem.bpm}
            deleteItem={deleteItem}
        />
    );

    return (
        <div className="sheet">
            <ol className="container-fluid offset-1 col-10 pt-5 pb-5 list-items">{ ItemsJsx }</ol>
            <ul></ul>
        </div>
    )
}

import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GraceNoteNav from "./Components/GraceNoteNav/GraceNoteNav";
import ShoppingForm from "./Components/ShoppingForm/ShoppingForm";
import ShoppingList from "./Components/ShoppingList/ShoppingList";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  function loadData() {
    fetch("https://qr3zd2-8080.csb.app/api/list")
      .then((x) => x.json())
      .then((response) => {
        setShoppingList(response);
      });
  }

  useEffect(loadData, []);

  function addItem(name, artist, songKey, bpm) {
    fetch("https://qr3zd2-8080.csb.app/api/list/new", {
      method: "POST",
      body: JSON.stringify({ name, artist, songKey, bpm }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      mode: "cors",
    })
      .then((x) => x.json())
      .then(loadData);
  }

  function deleteItem(id) {
    fetch("https://qr3zd2-8080.csb.app/api/list/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": " application/json; charset=UTF-8",
      },
      mode: "cors",
    })
      .then((x) => x.json())
      .then(loadData);
  }

  return (
    <div className="App">
      <GraceNoteNav />
      <header className="App-header">
        <h1 className="pt-4 pb-4"> Song List </h1>
      </header>
      <main>
        <ShoppingForm addItem={addItem} />
        <ShoppingList items={shoppingList} deleteItem={deleteItem} />
      </main>
    </div>
  );
}

export default App;

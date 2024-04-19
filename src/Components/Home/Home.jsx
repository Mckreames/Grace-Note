import React from 'react'

export default function Home() {
    
    const [songListPersonal, setSongListPersonal] = useState([]);

  function loadData() {
    fetch("https://628frj-8080.csb.app/api/list")
      .then((x) => x.json())
      .then((response) => {
        setShoppingList(response);
      });
  }

  useEffect(loadData, []);

  function addItem(name, artist, songKey, bpm) {
    fetch("https://628frj-8080.csb.app/api/list/new", {
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
    fetch("https://628frj-8080.csb.app/api/list/" + id, {
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
    <header className="App-header">
              <h1 className="pt-4"> Song List </h1>
              <h3 className="offset-4 col-4 pt-2 pb-2 save-your-favorites">
                Save your favorite songs for later!
              </h3>
            </header>
            <main>
              <ShoppingForm addItem={addItem} />
              <ShoppingList items={shoppingList} deleteItem={deleteItem} />
            </main>
  )
}

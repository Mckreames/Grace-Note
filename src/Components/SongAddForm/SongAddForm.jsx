import React, { useState, useEffect } from "react";
import "./SongAddForm.css";
import "./SongListPersonal.css";

function SongItem({ id, name, artist, songKey, bpm, deleteItem }) {
  return (
    <div>
      {id} {name} {artist} {songKey} {bpm}
    </div>
  );
}

export default function SongAddForm({ id }) {
  const [songItem, setSongItem] = useState([]);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [songKey, setSongKey] = useState("");
  const [bpm, setBPM] = useState(0);

  useEffect(loadData, []);

  const ItemsJsx = songItem.map((listItem) => (
    <SongItem
      key={listItem.id}
      id={listItem.id}
      name={listItem.name}
      artist={listItem.artist}
      songKey={listItem.songKey}
      bpm={listItem.bpm}
      deleteItem={deleteItem}
    />
  ));

  function loadData() {
    fetch("https://628frj-8080.csb.app/api/list")
      .then((x) => x.json())
      .then((response) => {
        setSongItem(response);
      });
  }

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

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleArtistChange(event) {
    setArtist(event.target.value);
  }

  function handleSongKeyChange(event) {
    setSongKey(event.target.value);
  }

  function handleBPMChange(event) {
    setBPM(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addItem(name, artist, songKey, bpm);
  }

  function handleDelete(event) {
    event.preventDefault();
    deleteItem(id);
  }

  return (
    <div>
      <header className="App-header">
        <h1 className="pt-4"> Song List </h1>
        <h3 className="offset-4 col-4 pt-2 pb-2 save-your-favorites">
          Save your favorite songs for later!
        </h3>
      </header>
      <form
        action="#"
        method="POST"
        onSubmit={handleSubmit}
        className="pt-5 pb-5 offset-1 col-10 form"
      >
        <label htmlFor="name">Song</label>
        <input
          className="input"
          type="text"
          required
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="artist">Artist</label>
        <input
          className="input"
          type="text"
          required
          id="artist"
          name="artist"
          value={artist}
          onChange={handleArtistChange}
        />
        <label htmlFor="songKey">Key</label>
        <input
          className="input"
          type="text"
          required
          id="songKey"
          name="songKey"
          value={songKey}
          onChange={handleSongKeyChange}
        />
        <label htmlFor="bpm">BPM</label>
        <input
          className="input"
          type="number"
          id="bpm"
          name="bpm"
          value={bpm}
          required
          min="0"
          onChange={handleBPMChange}
        />
        <button type="submit">Add</button>
      </form>
      <section className="offset-1 col-10 added-songs-list">
        <div className="added-songs">{ItemsJsx}</div>
      </section>
      {/* <div>
        <li>
          <span>
            {name} {artist} {songKey} ({bpm})
          </span>
          <button onClick={handleDelete} className="float-end">
            Delete
          </button>
        </li>
      </div> */}
    </div>
  );
}

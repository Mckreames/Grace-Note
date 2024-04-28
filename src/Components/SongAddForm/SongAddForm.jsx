import React, { useState, useEffect } from "react";
import "./SongAddForm.css";
import "./SongListPersonal.css";

function SongItem({ id, name, artist, songKey, bpm, deleteItem }) {
  return (
    <div className="col p-2 song-item">
      <div className="col-1 song-info">
        <span className="pe-4 info-value">{id}</span>
      </div>
      <div className="col-4 song-info">
        <span className="info-label">Name: </span>
        <h4 className="info-value">{name}</h4>
      </div>
      <div className="col-4 song-info">
        <span className="info-label">Artist: </span>
        <h6 className="info-value">{artist}</h6>
      </div>
      <div className="col-1 song-info">
        <span className="info-label">| Key: </span>
        <span className="info-value">{songKey} |</span>
      </div>
      <div className="col-1 song-info">
        <span className="info-label">| BPM: </span>
        <span className="info-value">{bpm} |</span>
      </div>
      <button
        onClick={() => deleteItem(id)}
        className="col-1 float-end delete-btn"
      >
        Delete
      </button>
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

  //   const ItemsJsx = songItem.map((listItem) => (
  //     <SongItem
  //       key={listItem.id}
  //       id={listItem.id}
  //       name={listItem.name}
  //       artist={listItem.artist}
  //       songKey={listItem.songKey}
  //       bpm={listItem.bpm}
  //       deleteItem={deleteItem}
  //     />
  //   ));

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

  function handleDelete(id) {
    deleteItem(id);
  }

  return (
    <div className="offset-1 col-10">
      <header className="App-header">
        <h1 className="pt-4"> Manage List </h1>
        <h4 className="offset-4 col-4 pt-2 pb-2 save-your-favorites">
          Add the songs you can't find now or delete the songs you don't want
        </h4>
      </header>
      <div className="manage-sheet">
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit}
          className="pt-5 pb-5 col form"
        >
          <label htmlFor="name">Song</label>
          <input
            className="col-2 input"
            type="text"
            required
            id="name"
            name="name"
            value={name}
            maxLength={255}
            onChange={handleNameChange}
          />
          <label htmlFor="artist">Artist</label>
          <input
            className="col-2 input"
            type="text"
            required
            id="artist"
            name="artist"
            value={artist}
            maxLength={70}
            onChange={handleArtistChange}
          />
          <label htmlFor="songKey">Key</label>
          <input
            className="col-1 input"
            type="text"
            required
            id="songKey"
            name="songKey"
            value={songKey}
            maxLength={3}
            onChange={handleSongKeyChange}
          />
          <label htmlFor="bpm">BPM</label>
          <input
            className="col-1 input"
            type="number"
            id="bpm"
            name="bpm"
            value={bpm}
            required
            min="40"
            max="300"
            onChange={handleBPMChange}
          />
          <button type="submit">Add</button>
        </form>
        <section className="mb-5 added-songs-list">
          {songItem.map((item) => (
            <SongItem
              key={item.id}
              id={item.id}
              name={item.name}
              artist={item.artist}
              songKey={item.songKey}
              bpm={item.bpm}
              deleteItem={() => handleDelete(item.id)}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

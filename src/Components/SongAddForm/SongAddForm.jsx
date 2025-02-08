import React, { useState, useEffect } from "react";
import "./SongAddForm.css";
import "./SongListPersonal.css";

function SongItem({ id, name, artist, songKey, bpm, deleteItem }) {
  return (
    <div className="col p-2 pb-lg-5 pt-lg-3 pb-xl-2 pt-xl-2 song-item">
      <div className="offset-1 col-4 song-info">
        <span className="info-label">Name: </span>
        <h4 className="info-value">{name}</h4>
      </div>
      <div className="offset-1 col-4 song-info">
        <span className="info-label">Artist: </span>
        <h6 className="info-value">{artist}</h6>
      </div>
      <div className="d-lg-none w-100"></div>
      <div className="offset-1 offset-lg-0 col-4 col-md-1 song-info">
        <span className="info-label">Key: </span>
        <h6 className="info-value">{songKey}</h6>
      </div>
      <div className="d-md-none w-100"></div>
      <div className="offset-1 col-4 col-md-1 song-info">
        <span className="info-label">BPM: </span>
        <h6 className="info-value">{bpm}</h6>
      </div>
      <button
        onClick={() => deleteItem(id)}
        className="col-1 float-end align-self-center delete-btn"
      >
        Delete
      </button>
    </div>
  );
}

export default function SongAddForm({ id }) {
  const [songItem, setSongItem] = useState(id);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [songKey, setSongKey] = useState("");
  const [bpm, setBPM] = useState(0);

  useEffect(loadData, []);

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
    <div className="col-12 background">
      <div className="offset-1 col-10">
        <header className="App-header">
          <h1 className="pt-2 pb-2 mt-3 dark-frost"> Song Suggestion List </h1>
          <h4 className="offset-1 offset-md-4 col-10 col-md-4 pt-2 pb-2 save-your-favorites">
            Recommend songs you can't find
          </h4>
        </header>
        <div className="manage-sheet">
          <form
            action="#"
            method="POST"
            onSubmit={handleSubmit}
            className="pt-5 pb-5 col form"
          >
            <label
              className="offset-0 offset-md-1 col-12 col-md-1"
              htmlFor="name"
            >
              Song
            </label>
            <input
              className="offset-1 offset-md-0 col-10 col-md-3 m-0 input"
              type="text"
              required
              id="name"
              name="name"
              value={name}
              maxLength={255}
              onChange={handleNameChange}
            />
            <label className="offset-md-1 col-12 col-md-1" htmlFor="artist">
              Artist
            </label>
            <input
              className="offset-1 offset-md-0 col-10 col-md-3 input"
              type="text"
              required
              id="artist"
              name="artist"
              value={artist}
              maxLength={70}
              onChange={handleArtistChange}
            />
            <div className="d-none d-md-block d-lg-none w-100"></div>
            <label className="offset-1" htmlFor="songKey">
              Key
            </label>
            <input
              className="offset-1 offset-md-0 col-10 col-md-1 input"
              type="text"
              required
              id="songKey"
              name="songKey"
              value={songKey}
              maxLength={3}
              onChange={handleSongKeyChange}
            />
            <label className="offset-md-2" htmlFor="bpm">
              BPM
            </label>
            <input
              className="offset-1 offset-md-0 col-10 col-md-1 input"
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
    </div>
  );
}

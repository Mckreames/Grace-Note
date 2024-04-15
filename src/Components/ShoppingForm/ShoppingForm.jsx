import React, { useState } from 'react';
import "./ShoppingForm.css";

export default function ShoppingForm({ addItem }) {

    const [name, setName] = useState('');
    const [artist, setArtist] = useState('');
    const [songKey, setSongKey] = useState('');
    const [bpm, setBPM] = useState(0);

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



  return (
    <form action="#" method="POST" onSubmit={handleSubmit} className="pt-5 pb-5 offset-1 col-10 form">
        <label htmlFor="name">Song</label>
        <input
            className="input"
            type="text"
            required
            id="name"
            name="name"
            value={name} 
            onChange={handleNameChange} />
        <label htmlFor="artist">Artist</label>
        <input
            className="input"
            type="text"
            required
            id="artist"
            name="artist"
            value={artist} 
            onChange={handleArtistChange} />
        <label htmlFor="songKey">Key</label>
        <input
            className="input"
            type="text"
            required
            id="songKey"
            name="songKey"
            value={songKey} 
            onChange={handleSongKeyChange} />
        <label htmlFor="bpm">BPM</label>
        <input 
            className="input"
            type="number"
            id="bpm"
            name="bpm"
            value={bpm}
            required
            min="0"
            onChange={handleBPMChange} />
        <button type="submit">Add</button>
    </form>
  );
}

import React from "react";
import Search from "../Search/Search";
// import SpotifySearch from "../SpotifySearch/SpotifySearch";

export default function SongSearch() {
  return (
    <div>
      <section className="search-results">{<Search />}</section>
      {/* <section className="search-results">{<SpotifySearch />}</section> */}
    </div>
  );
}

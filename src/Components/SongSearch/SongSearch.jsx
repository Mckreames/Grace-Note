import React from "react";
import Search from "../Search/Search";

export default function SongSearch() {
  return (
    <div>
      <section className="search-results">{<Search />}</section>
    </div>
  );
}

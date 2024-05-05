import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  NavLink,
} from "reactstrap";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [open, setOpen] = useState("1");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const handleSubmit = async (event) => {
    if (event === undefined) {
      return;
    } else {
      event.preventDefault();
      const searchTerm = event.target.elements.search.value;

      const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fa40ea65a6msha68e6f5343e548dp10595ajsn6d26736be691",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setSearchResult(result); // Set the searchResult state with the fetched data
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <section className="offset-1 col-10 mt-5 pt-5 pb-5 search-area">
        <h2 className="pb-4 color-electric">
          Come Find Exactly What You're Looking For!
        </h2>
        <form className="mb-3" onSubmit={handleSubmit}>
          <input
            aria-label="search"
            type="search"
            id="search"
            name="search"
            className="col-2 me-4 search-page-search"
            placeholder="   🔍   Enter Song Here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <button type="submit">Search</button>
        </form>
        <div className="offset-4 col-4 accordion-sect">
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader className="accordion-header" targetId="1">
                Can't find what you're looking for?
              </AccordionHeader>
              <AccordionBody className="accordion-body" accordionId="1">
                Sorry our library doesn't include your song. Why not add it to
                your personal list?
                <strong>
                  <Link to="/song-add" style={{ textDecoration: "none" }}>
                    <p>Add Custom Song</p>
                  </Link>
                </strong>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section className="offset-1 col-10 mb-5 pt-4 search-result">
        <div>
          {searchResult && (
            <ul className="col-12 flex-wrap d-flex justify-content-evenly">
              {searchResult.data.map((item) => (
                <li key={item.id} className="col-3 p-3 m-3 li-result">
                  <img
                    className="mb-2 li-img"
                    src={item.artist.picture_medium}
                    alt={item.artist.name}
                  />
                  <div>
                    <h4>{item.title}</h4>
                    <p>Artist: {item.artist.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

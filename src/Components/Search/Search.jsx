import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  NavLink,
  Row,
} from "reactstrap";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [open, setOpen] = useState("0");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const handleSubmit = async (event) => {
    if (event === undefined || event === null || event === " ") {
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
            required
            aria-label="search"
            type="search"
            id="search"
            name="search"
            className="offset-xxl-0 col-12 col-md-3 col-xl-2 me-4 search-page-search"
            placeholder="   🔍   Enter Song Here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <button type="submit">Search</button>
        </form>
        <div className="offset-md-2 offset-lg-3 offset-xl-4 col-md-4 col-xl-4 justify-content-center accordion-sect">
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader className="accordion-header" targetId="1">
                Can't find what you're looking for?
              </AccordionHeader>
              <AccordionBody
                className="p-0 color-white accordion-body"
                accordionId="1"
              >
                Sorry our library doesn't include your song. Why not put in a
                request to add it?
                <strong>
                  <Link to="/song-add" style={{ textDecoration: "none" }}>
                    <p>Request Song Form</p>
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
            <ul className="col-12 flex-wrap d-xl-flex justify-content-evenly song-list">
              {searchResult.data.map((item) => (
                <li
                  key={item.id}
                  className="col-12 col-xl-3 p-2 p-xl-3 m-2 m-xl-3 li-result"
                >
                  <img
                    className="mb-2 d-sm-none d-xl-block li-img"
                    src={item.artist.picture_medium}
                    alt={item.artist.name}
                  />
                  <div>
                    <img
                      className="mb-2 me-4 float-sm-start d-none d-sm-inline d-xl-none li-img"
                      src={item.artist.picture_medium}
                      alt={item.artist.name}
                    />
                    <h4 className="col-3 me-2 me-xl-0 d-inline col-xl-12">
                      {item.title}
                    </h4>
                  </div>

                  <div>
                    <p className="col-3 d-inline col-xl-12">
                      Artist: {item.artist.name}
                    </p>
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

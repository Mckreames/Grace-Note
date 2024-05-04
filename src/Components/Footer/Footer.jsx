import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container-fluid row pt-5 pb-3 foot-sheet">
      <p className="col-2">all rights reserved</p>
      <Link
        to="/terms-of-service"
        style={{ textDecoration: "none" }}
        className="col-2"
      >
        <p>Terms of Service</p>
      </Link>
      <Link to="/about-us" style={{ textDecoration: "none" }} className="col-2">
        <p>About Us</p>
      </Link>
      <Link
        to="/img-credits"
        style={{ textDecoration: "none" }}
        className="col-2"
      >
        <p>Credits</p>
      </Link>
    </div>
  );
}

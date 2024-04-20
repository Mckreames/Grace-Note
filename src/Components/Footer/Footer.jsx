import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

export default function Footer() {
  return (
    <div className="pt-5 pb-3 foot-sheet">
        <p>all rights reserved</p>
        <Link to="/terms-of-service" style={{ textDecoration: 'none' }}>
            <p>Terms of Service</p>
        </Link>
    </div>
  );
}

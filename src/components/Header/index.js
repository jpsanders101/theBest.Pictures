import { Link } from 'react-router-dom';
import React from 'react';

export default function Header(props) {
  return (
    <nav className="header">
      <Link to="/" className="header__link header_home-link">
        TheBest.Pictures
      </Link>
      <Link to="/about" className="header__link header_about-link">
        About
      </Link>
    </nav>
  );
}

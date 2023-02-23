import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="header">
    <nav className="navBar">
      <h1>Bookstore CMS</h1>
      <ul className="menuLinks">
        <li>
          <Link to="/books">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;

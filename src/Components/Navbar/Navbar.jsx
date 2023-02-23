import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="header">
    <nav className="navBar">
      <h1>Bookstore CMS</h1>
      <ul className="menuLinks">
        <li>
          <NavLink to="/books">BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;

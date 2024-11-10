import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <span>Let's Celebrate </span>Together
      </Link>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/service">Service</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/price">Price</Link>
        <Link to="/review">Review</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <div id="menu-bars" className="fas fa-bars"></div>
    </header>
  );
}

export default Header;
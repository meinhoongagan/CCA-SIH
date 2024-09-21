// Header.js
import React from 'react';
import Button from './button';
import { Link,NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="1-modified.png" alt="logo" loading="lazy" />
      </Link>
      <nav className="nav">
        <div className="dropdown">
        <Link to="/CareerCounselling">
          <button className="btn">Career Counselling</button>
        </Link>
          <div className="drop-content">
            <Link to="/CareerCounselling">9th - 10th</Link>
            <Link to="/CareerCounselling">11th - 12th</Link>
            <Link to="/CareerCounselling">College</Link>
          </div>
        </div>
        <Link to="CareerExplore" className="nav-link">Career Explorer</Link>
        <Link to="Resources" className="nav-link">Learning Resources</Link>
        <Link to="Mentorship" className="nav-link">Mentorship Portal</Link>
        <Link to="#" className="nav-link">Contact us</Link>
      </nav>
      <Link to="login"><Button className="auth">Login</Button></Link>
    </header>
  );
};

export default Header;

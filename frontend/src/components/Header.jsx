import React from 'react';
// import logo from '../assets/1-modified.png'; // Make sure to move the image into an assets folder

function Header() {
  return (
    <div className="header">
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <nav className="nav">
        <div className="dropdown">
          <button className="btn">Career Counselling</button>
          <div className="drop-content">
            <a href="/">9th - 10th</a>
            <a href="/">11th - 12th</a>
            <a href="/">College</a>
          </div>
        </div>
        <a href="/" className="nav-link">Career Explorer</a>
        <a href="/" className="nav-link">Learning Resources</a>
        <a href="/" className="nav-link">Mentorship Portal</a>
        <a href="/" className="nav-link">Contact us</a>
      </nav>
      <button className="auth">Login</button>
    </div>
  );
}

export default Header;

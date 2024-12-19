import React from 'react';
import './Header.css';

const Header = ({ currentTime, onLogout }) => {
  return (
    <header className="header">
      <div className="logo">
        <span className="circle">v</span>
        <span className="site-name">Vista Lab</span>
      </div>
      <nav className="header-nav">
        <div className="time-display">{currentTime}</div>
        <button onClick={onLogout} className="logout-button">Log Out</button>
      </nav>
    </header>
  );
};

export default Header;

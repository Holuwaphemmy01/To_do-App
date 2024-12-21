import React from 'react';
import '../../styles/dashboard/headerDashboard.css';

const Header = ({ currentTime, onLogout }) => {
  return (
    <header className="headerDashboard">
      <div className="logo">
        <span className="circle">A</span>
        <span className="site-name">Akinzo Todo App</span>
      </div>
      <nav className="header-nav">
        <div className="time-display">{currentTime}</div>
        <button onClick={onLogout} className="logout-button">Log Out</button>
      </nav>
    </header>
  );
};

export default Header;

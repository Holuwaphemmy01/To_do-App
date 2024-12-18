import React from 'react';
import '../styles/header.css';


const Header = ({ openLogin, openRegister }) => {
  return (
    <header className="header">
      <div className="logo">
        <span className="circle">v</span>
        <span className="site-name">Vista Lab</span>
      </div>
      <nav>
        <button onClick={openLogin}>Login</button>
        <button onClick={openRegister}>Register</button>
        <button onClick={openRegister} className="get-started-btn">Get Started</button>
      </nav>
    </header>
  );
};

export default Header;

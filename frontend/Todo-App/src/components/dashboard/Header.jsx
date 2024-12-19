import React, { useState, useEffect } from 'react';
import './header.css';

const Header = ({ username }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header">
      <h1>Hello, {username}, Start planning today</h1>
      <span className="current-time">{currentTime}</span>
    </header>
  );
};

export default Header;

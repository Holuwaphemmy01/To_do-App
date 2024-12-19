import React, { useState } from 'react';
import Header from '../../styles/dashboard/header.css';
import CurrentTime from './CurrentTime';
import '../../styles/dashboard/dashboard.css';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState('');

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <div className="dashboard">
      <CurrentTime onUpdate={setCurrentTime} />
      <Header currentTime={currentTime} onLogout={handleLogout} />
    </div>
  );
};

export default Dashboard;

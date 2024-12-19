import React from 'react';
import Header from './Header';
import './dashboard.css';

const Dashboard = () => {
  const username = "Aqeel"; // Replace with dynamic data from backend.

  return (
    <div className="dashboard">
      <Header username={username} />
      <Calendar />
      {/* Other components will go here */}
    </div>
  );
};

export default Dashboard;

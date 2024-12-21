import React, { useState } from 'react';
import Header from './Header.jsx'
import CurrentTime from './CurrentTime';
import Footer from './Footer.jsx';
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
      <Footer/>
    </div>
  );
};



 export default Dashboard;

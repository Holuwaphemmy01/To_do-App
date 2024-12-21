import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header.jsx'
import CurrentTime from './CurrentTime';
import Footer from './Footer.jsx';
import WelcomeSection from './WelcomeSection.jsx';
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
      <WelcomeSection/>
      <Footer/>
    </div>
  );
};



 export default Dashboard;

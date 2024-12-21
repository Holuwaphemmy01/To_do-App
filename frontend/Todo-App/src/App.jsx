import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Dashboard from './components/dashboard/DashBoard';

  function App() {
    return (
      <Router>
        <div id='root'>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    );
  };


export default App;
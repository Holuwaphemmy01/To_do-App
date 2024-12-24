

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import CurrentTime from './CurrentTime';
import Footer from './Footer.jsx';
import WelcomeSection from './WelcomeSection.jsx';
import Calendar from './Calendar.jsx';
import AddTask from './AddTask.jsx';
import DisplayTask from './DisplayTask.jsx';
import '../../styles/dashboard/dashboard.css';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [tasks, setTasks] = useState([])
  
  const handleLogout = () => {
    console.log('User logged out');
  };

  const addTask =(newTask) =>{
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };



  return (
    <div className="dashboard-container">
      <CurrentTime onUpdate={setCurrentTime} />
      <Header currentTime={currentTime} onLogout={handleLogout} />
      <WelcomeSection />
      
      <div className="calendar-addTask" >
        <Calendar className="calendar" />   
        <AddTask onAddTask={addTask} />

        {/* <div>
          <AddTask onAddTask={addTask} />
          <div className="task-display-container">
            <DisplayTask  tasks={tasks}/>
          </div>
        </div>  */}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;





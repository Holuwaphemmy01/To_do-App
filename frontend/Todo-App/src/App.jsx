import React, { useState } from 'react'; 
import './styles/styles.css';
import Header from './components/Header';
import Hero from './components/Hero';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const closeForm = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <div id='root'>
      <Header openLogin={openLogin} openRegister={openRegister} />
      <Hero openRegister={openRegister} />
      {showLogin && <LoginForm closeForm={closeForm} openRegister={openRegister} />}
      {showRegister && <RegisterForm closeForm={closeForm} openLogin={openLogin} />}
      <Footer />
    </div>
  );
}

export default App;
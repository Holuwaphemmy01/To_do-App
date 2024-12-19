//  import React from 'react';
 import React, { useState } from 'react'; 
 import Header from './Header';
 import Hero from './Hero';
 import LoginForm from './LoginForm';
 import RegisterForm from './RegisterForm';
 import Footer from './Footer';
 import '../../styles/landingPage.css'



const LandingPage =()=> {
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
        {showLogin && (
          <div className=''>
            <div className="">
              <LoginForm closeForm={closeForm} openRegister={openRegister} />
            </div>
          </div>
        )}
        {showRegister && (
          <div className=''>
            <div className="">
              <RegisterForm closeForm={closeForm} openLogin={openLogin} />
            </div>
          </div>
        )} 
        <Footer />
      </div>
    );
  };
  
  export default LandingPage;
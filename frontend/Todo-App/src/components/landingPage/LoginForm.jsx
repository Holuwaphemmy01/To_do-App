import React from 'react';
import '../../styles/form.css';





const LoginForm = ({ closeForm, openRegister }) => {
  return (
    <div className="form">
      <div className="form-content">
        <span className="close" onClick={closeForm}>&times;</span>
        <h2 className='login'>Login</h2>
        <form className='formPage'>
          <label htmlFor="username">username </label>
          <input type="text" id="username" placeholder="Enter your username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
          <p>
            Don't have an account?{' '}
            <button type="button" className="link-button" onClick={openRegister}>
              Register Here
            </button>
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

import React from 'react';
import '../styles/form.css';





const LoginForm = ({ closeForm, openRegister }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeForm}>&times;</span>
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
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

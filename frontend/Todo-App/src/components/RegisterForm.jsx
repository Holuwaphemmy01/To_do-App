import React from 'react';
import '../styles/form.css';


const RegisterForm = ({ closeForm, openLogin }) => {
  return (
    <div className="form">
      <div className="form-content">
        <span className="close" onClick={closeForm}>&times;</span>
        <h2>Register</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" />
          <p>
            Already have an account?{' '}
            <button type="button" className="link-button" onClick={openLogin}>
              Login Here
            </button>
          </p>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
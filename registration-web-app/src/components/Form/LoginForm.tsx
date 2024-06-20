import React, { useState } from 'react';
import { loginUser, getRandomText } from '../services/apiService';
import './FormStyles.css';
import WebAppPersonImage from '../../assets/WebAppPersonImage.svg';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required');
      return;
    }
    try {
      await loginUser(email, password);
      const response = await getRandomText();
      const randomText = response.data.message;
      setToastMessage(randomText);
      alert(randomText);
    } catch (error) {
      console.error('Error during login', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <div className='welcome-section'>
          <div className='welcome-content'>
            <img
              src={WebAppPersonImage}
              alt='Person'
              className='person-image'
            />
            <div className='welcome-text'>
              <h2>Welcome back!</h2>
              <p>Enter your details to log in</p>
            </div>
          </div>
        </div>
        <div className='form-section'>
          <h2>Log in</h2>
          {error && <p className='error-message'>{error}</p>}
          <form onSubmit={handleLogin}>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label='Email'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label='Password'
              />
            </div>
            <button type='submit'>Log in</button>
          </form>
          <div className='extra-buttons'>
            <button className='google-button' aria-label='Login with Google'>
              Google
            </button>
            <button
              className='facebook-button'
              aria-label='Login with Facebook'
            >
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

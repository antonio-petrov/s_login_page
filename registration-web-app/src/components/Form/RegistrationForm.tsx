import React, { useState } from 'react';
import { registerUser, getRandomText } from '../services/apiService';
import './FormStyles.css';
import WebAppPersonImage from '../../assets/WebAppPersonImage.svg';

const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password || !email) {
      setError('All fields are required');
      return;
    }
    try {
      await registerUser(username, password, email);
      const response = await getRandomText();
      const randomText = response.data.message;
      setToastMessage(randomText);
      alert(randomText);
    } catch (error) {
      console.error('Error during registration', error);
      setError('Registration failed. Please try again.');
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
              <h2>Welcome aboard my friend</h2>
              <p>Just a couple of clicks and we start</p>
            </div>
          </div>
        </div>
        <div className='form-section'>
          <h2>Register</h2>
          {error && <p className='error-message'>{error}</p>}
          <form onSubmit={handleRegister}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-label='Username'
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
            <button type='submit'>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

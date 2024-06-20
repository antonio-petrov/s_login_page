import React, { useState } from 'react';
import { registerUser } from '../../services/apiService';
import './FormStyles.css';
import Input from '../SharedComponents/Inputs/Input';
import Button from '../SharedComponents/Buttons/Button';
import WelcomeSection from '../Sections/WelcomeSection';
import FormContainer from './FormContainer';
import useFormHandler from '../../hooks/useFormHandler';
import ErrorMessage from '../Errors/ErrorMessage';
import EmailIconSvg from '../../assets/email';
import LockIconSvg from '../../assets/lock';
import GoogleLogoSvg from '../../assets/google';
import FacebookLogoSvg from '../../assets/facebook';
import ShowPasswordSvg from '../../assets/showPassword';

const RegistrationForm: React.FC = () => {
  const { formData, handleChange, handleSubmit, error } =
    useFormHandler(registerUser);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormContainer>
      <WelcomeSection
        heading='Welcome aboard my friend'
        subtext='Just a couple of clicks and we start'
      />
      <div className='form-section'>
        <h2>Register</h2>
        {error && <ErrorMessage message={error} />}
        <form onSubmit={handleSubmit}>
          <Input
            id='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            ariaLabel='Email'
            placeholder='Email'
            icon={<EmailIconSvg />}
          />
          <Input
            id='password'
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            ariaLabel='Password'
            placeholder='Password'
            icon={<LockIconSvg />}
          />
          <span
            className='show-password-icon'
            onClick={togglePasswordVisibility}
          >
            <ShowPasswordSvg />
          </span>
          <div className='form-group forgot-password-container'>
            <a href='/forgot-password' className='forgot-password-link'>
              Forgot password?
            </a>
          </div>
          <Button type='submit' label='Register' />
          <div className='separator-container'>
            <hr className='separator' />
            <span>Or</span>
            <hr className='separator' />
          </div>
          <div className='sso-buttons'>
            <button className='google-button'>
              <GoogleLogoSvg className='social-icon' /> Google
            </button>
            <button className='facebook-button'>
              <FacebookLogoSvg className='social-icon' /> Facebook
            </button>
          </div>
          <div className='footer-links'>
            <a href='/register' className='footer-link'>
              Have no account yet?
            </a>
          </div>
          <Button className='empty-button' type='button' label='Login' />
        </form>
      </div>
    </FormContainer>
  );
};

export default RegistrationForm;

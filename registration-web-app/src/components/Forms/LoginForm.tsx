import React from 'react';
import { loginUser } from '../../services/apiService';
import './FormStyles.css';
import Input from '../SharedComponents/Inputs/Input';
import Button from '../SharedComponents/Buttons/Button';
import WelcomeSection from '../Sections/WelcomeSection';
import FormContainer from './FormContainer';
import useFormHandler from '../../hooks/useFormHandler';
import EmailIconSvg from '../../assets/email';
import SocialButtons from '../SharedComponents/SocialButtons/SocialButtons';
import PasswordInput from '../SharedComponents/Inputs/PasswordInput';
import FormFooter from '../SharedComponents/FormFooter/FormFooter';
import { ToastContainer } from 'react-toastify';
import '../SharedComponents/Toasts/ToastStyles.css';

const LoginForm: React.FC = () => {
  const { formData, handleChange, handleSubmit, message } =
    useFormHandler(loginUser);

  return (
    <FormContainer>
      <WelcomeSection
        heading='Welcome aboard my friend'
        subtext='Just a couple of clicks and we start'
      />
      <div className='form-section'>
        <h2>Log in</h2>
        {message && <p className='success-message'>{message}</p>}
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
          <PasswordInput value={formData.password} onChange={handleChange} />
          <div className='form-group forgot-password-container'>
            <a href='/forgot-password' className='forgot-password-link'>
              Forgot password?
            </a>
          </div>
          <Button type='submit' label='Login' />
          <div className='separator-container'>
            <hr className='separator' />
            <span>Or</span>
            <hr className='separator' />
          </div>
          <SocialButtons />
          <FormFooter
            linkText='Have no account yet?'
            linkHref='/register'
            buttonText='Register'
            buttonAction={() => (window.location.href = '/register')}
          />
        </form>
      </div>
      <ToastContainer position='top-right' autoClose={5000} />
    </FormContainer>
  );
};

export default LoginForm;

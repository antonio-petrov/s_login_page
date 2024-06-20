import React from 'react';
import { registerUser } from '../../services/apiService';
import './FormStyles.css';
import Input from '../SharedComponents/Inputs/Input';
import Button from '../SharedComponents/Buttons/Button';
import WelcomeSection from '../Sections/WelcomeSection';
import FormContainer from './FormContainer';
import useFormHandler from '../../hooks/useFormHandler';
import ErrorMessage from '../Errors/ErrorMessage';
import EmailIconSvg from '../../assets/email';
import SocialButtons from '../SharedComponents/SocialButtons/SocialButtons';
import PasswordInput from '../SharedComponents/Inputs/PasswordInput';
import FormFooter from '../SharedComponents/FormFooter/FormFooter';
import { ToastContainer } from 'react-toastify';

const RegistrationForm: React.FC = () => {
  const { formData, handleChange, handleSubmit, error } =
    useFormHandler(registerUser);

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
          <PasswordInput value={formData.password} onChange={handleChange} />
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
          <SocialButtons />
          <FormFooter
            linkText='Already have an account?'
            linkHref='/login'
            buttonText='Login'
            buttonAction={() => (window.location.href = '/login')}
          />
        </form>
      </div>
      <ToastContainer />
    </FormContainer>
  );
};

export default RegistrationForm;

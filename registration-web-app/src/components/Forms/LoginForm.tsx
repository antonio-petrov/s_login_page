import React from 'react';
import { loginUser } from '../../services/apiService';
import './FormStyles.css';
import Input from '../SharedComponents/Inputs/Input';
import Button from '../SharedComponents/Buttons/Button';
import WelcomeSection from '../Sections/WelcomeSection';
import FormContainer from './FormContainer';
import useFormHandler from '../../hooks/useFormHandler';
import ErrorMessage from '../Errors/ErrorMessage';

const LoginForm: React.FC = () => {
  const { formData, handleChange, handleSubmit, error } =
    useFormHandler(loginUser);

  return (
    <FormContainer>
      <WelcomeSection
        heading='Welcome back!'
        subtext='Enter your details to log in'
      />
      <div className='form-section'>
        <h2>Log in</h2>
        {error && <ErrorMessage message={error} />}
        <form onSubmit={handleSubmit}>
          <Input
            id='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            ariaLabel='Email'
          />
          <Input
            id='password'
            type='password'
            value={formData.password}
            onChange={handleChange}
            ariaLabel='Password'
          />
          <Button type='submit' label='Log in' />
        </form>
        <div className='extra-buttons'>
          <Button type='button' label='Google' className='google-button' />
          <Button type='button' label='Facebook' className='facebook-button' />
        </div>
      </div>
    </FormContainer>
  );
};

export default LoginForm;

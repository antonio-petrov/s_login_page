import React from 'react';

interface FormContainerProps {
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => (
  <div className='container'>
    <div className='form-container'>{children}</div>
  </div>
);

export default FormContainer;

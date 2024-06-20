import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/Forms/RegistrationForm';
import LoginForm from './components/Forms/LoginForm';
import ForgotPasswordForm from './components/Forms/ForgotPasswordForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegistrationForm />} />
        <Route path='/' element={<LoginForm />} />
        <Route path='/forgot-password' element={<ForgotPasswordForm />} />
      </Routes>
    </Router>
  );
};

export default App;

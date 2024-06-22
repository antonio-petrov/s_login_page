import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './components/SharedComponents/Toasts/ToastStyles.css';
import RegistrationForm from './components/Forms/RegistrationForm';
import LoginForm from './components/Forms/LoginForm';
import ForgotPasswordForm from './components/Forms/ForgotPasswordForm';
import MessagePage from './components/MessagePage/MessagePage';

const App: React.FC = () => {
  return (
    <div className='app-wrapper'>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/' element={<LoginForm />} />
          <Route path='/forgot-password' element={<ForgotPasswordForm />} />
          <Route path='/message' element={<MessagePage />} />
        </Routes>
      </Router>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;

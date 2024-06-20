import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import RegisterForm from '../components/forms/RegisterForm';

interface RegisterScreenProps {
  navigation: NavigationProp<any, any>;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const handleRegister = (email: string, password: string) => {
    console.log(email, password);
    navigation.navigate('Welcome');
  };

  const handleOnLoginClick = () => {
    navigation.navigate('Login');
  };

  return (
    <RegisterForm onRegister={handleRegister} onLogin={handleOnLoginClick} />
  );
};

export default RegisterScreen;

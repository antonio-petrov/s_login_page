import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Logo from '../svg/logo';
import EmailIconSvg from '../svg/email';
import LockIconSvg from '../svg/lock';
import sharedStyles from '../../styles/sharedStyles';
import { showToast } from '../../utils/toastUtils';
import Button from '../common/Button';
import InputField from '../common/InputField';
import SocialLoginButtons from '../common/SocialLoginButtons';
import axios, { AxiosError } from 'axios';
import { API_URL } from '../../../config';

interface RegisterFormProps {
  onRegister: (email: string, password: string) => void;
  onLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState<null | 'email' | 'password'>(
    null
  );

  const handleRegister = async () => {
    if (email && password) {
      try {
        const response = await axios.post(`${API_URL}/register`, {
          email,
          password,
        });
        console.log(response.data);
        onRegister(email, password);
      } catch (err) {
        const error = err as AxiosError;
        if (error.response && error.response.status === 400) {
          showToast('The email is already in use.');
        } else {
          showToast('Registration failed');
        }
      }
    } else {
      showToast('Please enter email and password');
    }
  };

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.logoContainer}>
        <Logo width={60} height={60} />
      </View>
      <Text style={sharedStyles.title}>Register</Text>
      <InputField
        value={email}
        onChangeText={setEmail}
        onFocus={() => setFocusedInput('email')}
        onBlur={() => setFocusedInput(null)}
        placeholder="Email"
        icon={<EmailIconSvg />}
        focused={focusedInput === 'email'}
      />
      <InputField
        value={password}
        onChangeText={setPassword}
        onFocus={() => setFocusedInput('password')}
        onBlur={() => setFocusedInput(null)}
        placeholder="Password"
        icon={<LockIconSvg />}
        focused={focusedInput === 'password'}
        secureTextEntry={true}
      />
      <Button onPress={handleRegister} title="Register" />
      <View style={sharedStyles.orContainer}>
        <View style={sharedStyles.line} />
        <Text style={sharedStyles.orText}>Or</Text>
        <View style={sharedStyles.line} />
      </View>
      <SocialLoginButtons
        onGooglePress={() => showToast('Button does not do anything yet')}
        onFacebookPress={() => showToast('Button does not do anything yet')}
      />
      <Text style={sharedStyles.noAccount}>Already have an account?</Text>
      <TouchableOpacity style={sharedStyles.navigationButton} onPress={onLogin}>
        <Text style={sharedStyles.navigationButtonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterForm;

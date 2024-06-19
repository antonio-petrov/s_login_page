import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Logo from './svg/logo';
import EmailIconSvg from './svg/email';
import LockIconSvg from './svg/lock';
import GoogleLogoSvg from './svg/google';
import FacebookLogoSvg from './svg/facebook';
import sharedStyles from '../styles/sharedStyles';
import { showToast } from '../utils/toastUtils';

interface RegisterFormProps {
  onRegister: (username: string, email: string, password: string) => void;
  onLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister, onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState<null | 'email' | 'password'>(
    null
  );

  const handleRegister = () => {
    onRegister(username, email, password);
  };

  const handleUselessButtonPress = () => {
    showToast('Button does not do anything yet');
  };

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.logoContainer}>
        <Logo width={60} height={60} />
      </View>
      <Text style={sharedStyles.title}>Register</Text>
      <View style={{ width: '100%', height: 50, marginBottom: 10 }}>
        <View
          style={
            focusedInput === 'email'
              ? sharedStyles.topViewFocused
              : sharedStyles.topView
          }
        >
          <EmailIconSvg />
          <TextInput
            style={sharedStyles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setFocusedInput('email')}
            onBlur={() => setFocusedInput(null)}
          />
        </View>
      </View>
      <View style={{ width: '100%', height: 50, marginBottom: 20 }}>
        <View
          style={
            focusedInput === 'password'
              ? sharedStyles.topViewFocused
              : sharedStyles.topView
          }
        >
          <LockIconSvg />
          <TextInput
            style={sharedStyles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            onFocus={() => setFocusedInput('password')}
            onBlur={() => setFocusedInput(null)}
          />
        </View>
      </View>
      <TouchableOpacity style={sharedStyles.button} onPress={handleRegister}>
        <Text style={sharedStyles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={sharedStyles.orContainer}>
        <View style={sharedStyles.line} />
        <Text style={sharedStyles.orText}>Or</Text>
        <View style={sharedStyles.line} />
      </View>
      <View style={sharedStyles.socialLogin}>
        <TouchableOpacity
          style={sharedStyles.socialButton}
          onPress={handleUselessButtonPress}
        >
          <GoogleLogoSvg />
          <Text style={sharedStyles.socialButtonTextGoogle}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={sharedStyles.socialButton}
          onPress={handleUselessButtonPress}
        >
          <FacebookLogoSvg />
          <Text style={sharedStyles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>
      <Text style={sharedStyles.noAccount}>Already have an account?</Text>
      <TouchableOpacity style={sharedStyles.navigationButton} onPress={onLogin}>
        <Text style={sharedStyles.navigationButtonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterForm;

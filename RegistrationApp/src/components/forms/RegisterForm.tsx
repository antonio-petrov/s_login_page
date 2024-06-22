import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Logo from '../svg/logo';
import EmailIconSvg from '../svg/email';
import LockIconSvg from '../svg/lock';
import sharedStyles from '../../styles/sharedStyles';
import { showToast } from '../../utils/toastUtils';
import Button from '../common/Button';
import InputField from '../common/InputField';
import SocialLoginButtons from '../common/SocialLoginButtons';

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

  const handleRegister = () => {
    if (email && password) {
      onRegister(email, password);
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
      <Button onPress={onLogin} title="Log in" />
    </View>
  );
};

export default RegisterForm;

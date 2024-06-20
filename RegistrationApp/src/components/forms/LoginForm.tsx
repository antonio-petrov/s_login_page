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
import { ScaledSheet } from 'react-native-size-matters';

interface LoginFormProps {
  onRegister: () => void;
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onRegister, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState<null | 'email' | 'password'>(
    null
  );

  const handleLogin = () => {
    if (email && password) {
      onLogin(email, password);
    } else {
      showToast('Please enter email and password');
    }
  };

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.logoContainer}>
        <Logo width={60} height={60} />
      </View>
      <Text style={sharedStyles.title}>Log in</Text>
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
      />
      <TouchableOpacity
        style={styles.forgotPasswordContainer}
        onPress={() => showToast('Button does not do anything yet')}
      >
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <Button onPress={handleLogin} title="Log in" />
      <View style={sharedStyles.orContainer}>
        <View style={sharedStyles.line} />
        <Text style={sharedStyles.orText}>Or</Text>
        <View style={sharedStyles.line} />
      </View>
      <SocialLoginButtons
        onGooglePress={() => showToast('Button does not do anything yet')}
        onFacebookPress={() => showToast('Button does not do anything yet')}
      />
      <Text style={sharedStyles.noAccount}>Have no account yet?</Text>
      <Button onPress={onRegister} title="Register" />
    </View>
  );
};

export default LoginForm;

const styles = ScaledSheet.create({
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: '20@vs',
    marginTop: '8@vs',
  },
  forgotPassword: {
    color: '#3949AB',
    fontFamily: 'Lato-SemiBold',
    fontSize: '14@ms',
  },
});

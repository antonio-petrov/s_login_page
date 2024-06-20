import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Logo from './svg/logo';
import EmailIconSvg from './svg/email';
import LockIconSvg from './svg/lock';
import GoogleLogoSvg from './svg/google';
import FacebookLogoSvg from './svg/facebook';
import sharedStyles from '../styles/sharedStyles';
import { ScaledSheet } from 'react-native-size-matters';
import { showToast } from '../utils/toastUtils';

interface LoginFormProps {
  onRegister: () => void;
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onRegister, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState<null | 'email' | 'password'>(
    null
  );

  const handleUselessButtonPress = () => {
    showToast('Button does not do anything yet');
  };

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.logoContainer}>
        <Logo width={60} height={60} />
      </View>
      <Text style={sharedStyles.title}>Log in</Text>
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
      <TouchableOpacity
        style={styles.forgotPasswordContainer}
        onPress={handleUselessButtonPress}
      >
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={sharedStyles.button}>
        <Text style={sharedStyles.buttonText}>Log in</Text>
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
      <Text style={sharedStyles.noAccount}>Have no account yet?</Text>
      <TouchableOpacity
        style={sharedStyles.navigationButton}
        onPress={onRegister}
      >
        <Text style={sharedStyles.navigationButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default LoginForm;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from '../components/forms/LoginForm';
import { NavigationProp } from '@react-navigation/native';

interface LoginScreenProps {
  navigation: NavigationProp<any, any>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  const handleOnLoginClick = (email: string, password: string) => {
    console.log('Login button clicked', email, password);
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <LoginForm
        onRegister={handleNavigateToRegister}
        onLogin={handleOnLoginClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginScreen;

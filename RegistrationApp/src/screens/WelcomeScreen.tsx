import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { showToast } from '../utils/toastUtils';

const WelcomeScreen: React.FC = () => {
  useEffect(() => {
    fetch('https://your-backend-endpoint.com/message')
      .then(response => response.json())
      .then(data => {
        showToast(data.message);
      })
      .catch(error => {
        showToast('Failed to fetch message');
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;

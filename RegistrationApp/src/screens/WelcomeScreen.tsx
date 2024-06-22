import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { showToast } from '../utils/toastUtils';
import { API_URL } from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const token = await AsyncStorage.getItem('access_token');
        if (!token) {
          showToast('No token found');
          return;
        }

        const response = await fetch(`${API_URL}/message`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setMessage(data.message);
        showToast(data.message);
      } catch (error: unknown) {
        if (error instanceof Error) {
          showToast(`Failed to fetch message: ${error.message}`);
        } else {
          showToast('Failed to fetch message: Unknown error');
        }
      }
    };

    fetchMessage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      {message && <Text style={styles.messageText}>{message}</Text>}
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
  messageText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default WelcomeScreen;

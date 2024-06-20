import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import sharedStyles from '../../styles/sharedStyles';

interface ButtonProps {
  onPress: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, title }) => (
  <TouchableOpacity style={sharedStyles.button} onPress={onPress}>
    <Text style={sharedStyles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({});

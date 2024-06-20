import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import sharedStyles from '../../styles/sharedStyles';

interface InputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  placeholder: string;
  icon: React.ReactNode;
  focused: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChangeText,
  onFocus,
  onBlur,
  placeholder,
  icon,
  focused,
}) => (
  <View style={{ width: '100%', height: 50, marginBottom: 10 }}>
    <View style={focused ? sharedStyles.topViewFocused : sharedStyles.topView}>
      {icon}
      <TextInput
        style={sharedStyles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  </View>
);

export default InputField;

const styles = StyleSheet.create({});

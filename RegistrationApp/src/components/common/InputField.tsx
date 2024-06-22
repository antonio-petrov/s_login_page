import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import sharedStyles from '../../styles/sharedStyles';
import EyeIconSvg from '../svg/eye';

interface InputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  placeholder: string;
  icon: React.ReactNode;
  focused: boolean;
  secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChangeText,
  onFocus,
  onBlur,
  placeholder,
  icon,
  focused,
  secureTextEntry = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={{ width: '100%', height: 50, marginBottom: 10 }}>
      <View
        style={focused ? sharedStyles.topViewFocused : sharedStyles.topView}
      >
        {icon}
        <TextInput
          style={sharedStyles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry && !showPassword}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <EyeIconSvg />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({});

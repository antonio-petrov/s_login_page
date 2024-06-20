import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import GoogleLogoSvg from '../svg/google';
import FacebookLogoSvg from '../svg/facebook';
import sharedStyles from '../../styles/sharedStyles';

interface SocialLoginButtonsProps {
  onGooglePress: () => void;
  onFacebookPress: () => void;
}

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({
  onGooglePress,
  onFacebookPress,
}) => (
  <View style={sharedStyles.socialLogin}>
    <TouchableOpacity style={sharedStyles.socialButton} onPress={onGooglePress}>
      <GoogleLogoSvg />
      <Text style={sharedStyles.socialButtonTextGoogle}>Google</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={sharedStyles.socialButton}
      onPress={onFacebookPress}
    >
      <FacebookLogoSvg />
      <Text style={sharedStyles.socialButtonText}>Facebook</Text>
    </TouchableOpacity>
  </View>
);

export default SocialLoginButtons;

const styles = StyleSheet.create({});

import React from 'react';
import GoogleLogoSvg from '../../../assets/google';
import FacebookLogoSvg from '../../../assets/facebook';
import { handleSocialClick } from '../../../utils/toastUtils';

const SocialButtons: React.FC = () => (
  <div className='sso-buttons'>
    <button
      className='google-button'
      onClick={() => handleSocialClick('Google')}
    >
      <GoogleLogoSvg className='social-icon' /> Google
    </button>
    <button
      className='facebook-button'
      onClick={() => handleSocialClick('Facebook')}
    >
      <FacebookLogoSvg className='social-icon' /> Facebook
    </button>
  </div>
);

export default SocialButtons;

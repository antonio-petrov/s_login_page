import React from 'react';
import WebAppPersonImage from '../../assets/WebAppPersonImage.svg';
import LogoImage from '../../assets/logo';

interface WelcomeSectionProps {
  heading: string;
  subtext: string;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  heading,
  subtext,
}) => (
  <div className='welcome-section'>
    <div className='logo'>
      <LogoImage className='logo-image' />
    </div>
    <div className='welcome-content'>
      <div className='person-container'>
        <img src={WebAppPersonImage} alt='Person' className='person-image' />
      </div>
      <div className='welcome-text'>
        <h2>{heading}</h2>
        <p>{subtext}</p>
      </div>
    </div>
  </div>
);

export default WelcomeSection;

import React from 'react';
import Button from '../Buttons/Button';

const FormFooter: React.FC<{
  linkText: string;
  linkHref: string;
  buttonText: string;
  buttonAction: () => void;
}> = ({ linkText, linkHref, buttonText, buttonAction }) => (
  <div className='footer-links'>
    <div className='footer-links'>
      <span className='footer-link'>{linkText}</span>
    </div>

    <Button
      className='empty-button'
      type='button'
      label={buttonText}
      onClick={buttonAction}
    />
  </div>
);

export default FormFooter;

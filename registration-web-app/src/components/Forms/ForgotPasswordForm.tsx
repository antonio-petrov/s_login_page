import React from 'react';
import './ForgotPasswordForm.css';

const gifUrls = [
  'https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif',
  'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
  'https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif',
  'https://media.giphy.com/media/26FPJGjhefSJuaRhu/giphy.gif',
  'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif',
  'https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif',
  'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif',
  'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
  'https://media.giphy.com/media/fdyZ3qI0GVZC0/giphy.gif',
];

const getRandomGif = () => {
  const randomIndex = Math.floor(Math.random() * gifUrls.length);
  return gifUrls[randomIndex];
};

const ForgotPasswordForm: React.FC = () => {
  const gifUrl = getRandomGif();

  return (
    <div className='fun-forgot-password-container'>
      <h1>Oh no, you lost your password? Too bad!</h1>
      <img src={gifUrl} alt='Funny Gif' className='funny-gif' />
      <p>
        Don't worry, we've all been there. Maybe try remembering it this time?
      </p>
    </div>
  );
};

export default ForgotPasswordForm;

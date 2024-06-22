import React, { useEffect, useState } from 'react';
import { getRandomText } from '../../services/apiService';

const MessagePage: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await getRandomText();
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching the message:', error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className='message-page'>
      <h1>Random Message</h1>
      {message ? <p>{message}</p> : <p>Loading...</p>}
    </div>
  );
};

export default MessagePage;

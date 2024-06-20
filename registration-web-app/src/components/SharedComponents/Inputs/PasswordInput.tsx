import React, { useState } from 'react';
import LockIconSvg from '../../../assets/lock';
import ShowPasswordSvg from '../../../assets/showPassword';
import Input from './Input';

const PasswordInput: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Input
        id='password'
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        ariaLabel='Password'
        placeholder='Password'
        icon={<LockIconSvg />}
      />
      <span className='show-password-icon' onClick={togglePasswordVisibility}>
        <ShowPasswordSvg />
      </span>
    </div>
  );
};

export default PasswordInput;

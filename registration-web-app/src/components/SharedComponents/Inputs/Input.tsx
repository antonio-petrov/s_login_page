import React from 'react';

interface InputProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ariaLabel: string;
  placeholder?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  value,
  onChange,
  ariaLabel,
  placeholder,
  icon,
}) => (
  <div className='form-group'>
    {icon && <span className='input-icon'>{icon}</span>}
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      aria-label={ariaLabel}
      placeholder={placeholder ? placeholder : ''}
      className={icon ? 'input-with-icon' : ''}
    />
  </div>
);

export default Input;

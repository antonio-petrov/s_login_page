import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  label: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, label, className, onClick }) => (
  <button type={type} className={className} onClick={onClick}>
    {label}
  </button>
);

export default Button;

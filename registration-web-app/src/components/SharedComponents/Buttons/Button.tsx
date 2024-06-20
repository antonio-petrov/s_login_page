import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  label?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  className,
  onClick,
  children,
}) => (
  <button type={type} className={className} onClick={onClick}>
    {children || label}
  </button>
);

export default Button;

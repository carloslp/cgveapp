import React from 'react';

type ButtonProps = {
  text: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
    secondary: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  };
  
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
  
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {text}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
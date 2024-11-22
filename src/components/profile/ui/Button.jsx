import React from 'react';

export function Button({ children, variant = 'default', className = '', onClick, type = 'button', disabled = false, size = 'default', asChild }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'bg-white text-red-600 hover:bg-red-50',
    outline: 'border border-gray-200 bg-white hover:bg-gray-100',
    ghost: 'hover:bg-gray-100',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-8 px-3',
    lg: 'h-12 px-8',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
import { ButtonProps } from '@/types';
import React, { ReactNode } from 'react';



const Button: React.FC<ButtonProps> = ({
  id,
  title,
  leftIcon,
  rightIcon,
  containerClass = '',
  onClick,
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black bg-golden-400 ${containerClass}`}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;

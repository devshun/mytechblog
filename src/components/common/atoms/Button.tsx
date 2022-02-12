import React, { ButtonHTMLAttributes } from 'react';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
};

export const Button: React.FC<Props> = (props) => {
  const { children, className, size = "medium", ...rest } = props;
  const classes = [className, sizeClasses[size]].join(' ');
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

const sizeClasses = {
  small: '',
  medium: '',
  large: '',
};

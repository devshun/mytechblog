import React, { ButtonHTMLAttributes, memo } from 'react';

import classNames from 'classnames';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};

export const Button: React.FC<Props> = memo((props) => {
  const { children, className, size = 'medium', ...rest } = props;
  const classes = classNames(baseClasses, className, sizeClasses[size]);
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
});

const baseClasses = 'bg-gray-100 text-black rounded-xl font-bold px-5 py-3';

const sizeClasses = {
  small: '',
  medium: '',
  large: '',
};

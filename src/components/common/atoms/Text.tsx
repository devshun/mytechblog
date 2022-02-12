import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  color: 'red';
};

export const Text: React.FC<Props> = (props) => {
  const { children, className, size, color } = props;
  const classes = [className, sizeClasses[size], colorClasses[color]].join(' ');
  return <div className={classes}>{children}</div>;
};

export const sizeClasses = {
  small: 'text-sm',
  medium: 'text-lg',
  large: 'text-2xl',
};

export const colorClasses = {
  red: '',
};

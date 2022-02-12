import React, { HTMLAttributes, memo } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  color: 'red';
};

export const Text: React.FC<Props> = memo((props) => {
  const { children, className, size ="medium", color, ...rest } = props;
  const classes = [className, sizeClasses[size], colorClasses[color]].join(' ');
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
});

export const sizeClasses = {
  small: 'text-sm',
  medium: 'text-lg',
  large: 'text-2xl font-bold',
};

export const colorClasses = {
  red: '',
};

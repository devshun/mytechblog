import React, { HTMLAttributes, forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

export type Props = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
};

export const Text = forwardRef<HTMLDivElement, Props>(
  (props, ref?): ReactElement => {
    const { children, className, size = 'medium', ...rest } = props;
    const classes = classNames(className, sizeClasses[size]);

    return (
      <div className={classes} {...rest} ref={ref}>
        {children}
      </div>
    );
  }
);

export const sizeClasses = {
  xsmall: 'text-xs',
  small: 'text-sm',
  medium: 'text-lg font-bold',
  large: 'text-2xl font-bold',
};

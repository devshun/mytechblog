import React, { ButtonHTMLAttributes, forwardRef, ReactElement } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  url?: string;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  (props, ref?): ReactElement => {
    const { children, className, size = 'medium', url, ...rest } = props;
    const classes = classNames(baseClasses, className, sizeClasses[size]);

    const renderButton = () => (
      <button className={classes} {...rest} ref={ref}>
        {children}
      </button>
    );

    return (
      <>{url ? <Link href={url}>{renderButton()}</Link> : renderButton()}</>
    );
  }
);

const baseClasses = 'bg-gray-100 text-black rounded-xl font-bold px-5 py-3';

const sizeClasses = {
  small: '',
  medium: '',
  large: '',
};

import React, { HTMLAttributes, forwardRef, ReactElement } from 'react';

import classNames from 'classnames';
import Link from 'next/link';

export type Props = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  url?: string;
};

export const Text = forwardRef<HTMLDivElement, Props>(
  (props, ref?): ReactElement => {
    const { children, className, size = 'medium', url, ...rest } = props;
    const classes = classNames(className, sizeClasses[size]);

    const renderText = () => (
      <div className={classes} {...rest} ref={ref}>
        {children}
      </div>
    );
    return <>{url ? <Link href={url}>{renderText()}</Link> : renderText()}</>;
  }
);

export const sizeClasses = {
  xsmall: 'text-xs',
  small: 'text-sm',
  medium: 'text-lg font-bold',
  large: 'text-2xl font-bold',
};

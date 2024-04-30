import { forwardRef } from 'react';
import { baseBox, disabled } from './box.css';

import { MouseEventHandler } from 'react';
import React from 'react';

type NavBoxRefProps = {
  as?: React.ElementType;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  css?: React.CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isDisabled?: boolean;
  forwardedRef?: React.ForwardedRef<HTMLDivElement>;
};

export const CenteredBox = ({
  children,
  css,
}: {
  children: React.ReactNode;
  css?: React.CSSProperties;
}) => {
  return (
    <div
      style={{
        ...css,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
};

export const Box = forwardRef(function Box(
  {
    as: Comp = 'div',
    children,
    style,
    className,
    css,
    onClick,
    isDisabled,
    ...props
  }: NavBoxRefProps,
  ref
) {
  const classNames = `${baseBox} ${isDisabled ? disabled : ''} ${className || ''}`;

  return (
    <Comp {...props} ref={ref} style={style || css} onClick={onClick} className={classNames}>
      {children}
    </Comp>
  );
});

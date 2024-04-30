import { Box } from '../box/box';
import React, { ReactNode } from 'react';
import stack from './stack.css';

export const Stack = ({
  children,
  direction = 'vertical',
  disabled = false,
  css = {},
  as,
}: {
  children: ReactNode;
  direction: 'horizontal' | 'vertical';
  css?: React.CSSProperties;
  disabled?: boolean;
  as?: React.ElementType;
}) => {
  const stackStyle = stack[direction] || stack.vertical;

  return (
    <Box className={stackStyle} style={css} as={as}>
      {children}
    </Box>
  );
};

// Typescript Tests:
// let a;
// const b1 = <Box href="1" />; // ERROR
// const b2 = <Box direction="1" />; // ERROR
// const b3 = <Box direction="vertical" />; // ERROR
// const b4 = <Box href="1" />; // ERROR
// const b5 = <Box as="a" href="1" />; // ok
// const b6 = <Box onClick={() => 0} />; // ok
// const s1 = <Stack href="1" />; // ERROR
// const s2 = <Stack direction="1" />; // ERROR
// const s3 = <Stack direction="vertical" />; // ok
// const s4 = <Stack href="1" ref={a} as="a" />; // ERROR
// const s5 = <Stack as="section" ref={a} />; // ok
// const s6 = <Stack as="section" href="a" />; // ERROR

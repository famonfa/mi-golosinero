import React, { ReactNode } from 'react';
import card from './card.css';
import { Box } from '../box/box';

type CardProps = {
  css: React.CSSProperties;
  children: ReactNode;
  disabled: boolean;
};

export const Card: React.FC<CardProps> = ({ children, css, disabled = false }) => {
  return (
    <Box className={card} style={css}>
      {children}
    </Box>
  );
};

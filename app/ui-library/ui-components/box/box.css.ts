import { style } from '@vanilla-extract/css';

export const baseBox = style({
  boxSizing: 'border-box',
});

export const disabled = style({
  pointerEvents: 'none',
});

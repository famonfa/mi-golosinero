import { styled } from '@instamenu/ui-stitches';
import { ReactNode } from 'react';
import { VariantProps } from '@stitches/react';

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  background: 'none',
  border: 'none',
  height: 30,
  width: 30,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  '&:hover': { backgroundColor: '#ddd' },
});

export interface ButtonProps extends VariantProps<typeof IconButton> {
  children: ReactNode;
}

export default IconButton;

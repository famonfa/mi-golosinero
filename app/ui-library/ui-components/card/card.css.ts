import { style } from '@vanilla-extract/css';
import { breakpoints } from '../../vanilla.css';

export const card = style({
  borderTop: '1px solid #ccc',
  padding: 16,
  backgroundColor: '#ffffff',
  display: 'flex',
  height: '100%',
  ':hover': {
    backgroundColor: '#fafafa',
  },
  '@media': {
    [breakpoints.tablet]: {
      border: 'none',
      borderRadius: 8,
      boxShadow: '0px 4px 8px rgba(6, 61, 28, 0.06)',
    },
  },
});

export default card;

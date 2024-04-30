import { style } from '@vanilla-extract/css';
import { palette } from '../../vanilla.css';

export const linkStyles = style({
  textDecoration: 'none',
  fontWeight: 700,
  display: 'block',

  ':hover': {
    outline: 0,
  },
  ':focus': {
    outline: 0,
  },
});

export const linkHover = style({
  transition: 'background-color 0.3s',
  width: '100%',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',


    ':hover': {
      backgroundColor: '#162c46',
    }
})
import { breakpoints, palette } from "../../vanilla.css";
import { style, keyframes } from '@vanilla-extract/css';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const overlay = style({
  backgroundColor: 'rgba(0, 0, 0, .8)',
  position: 'fixed',
  inset: 0,
  zIndex: 99,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
});

export const content = style({
  backgroundColor: palette.primaryBackground,

  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '100%',
  height: '100%',
  zIndex: 99,
  animation: `${contentShow} 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,

  ':focus': { outline: 'none' },
  '@media': {
    [breakpoints.tablet]: {
      maxWidth: '450px',
      maxHeight: '85vh',
      height: 'auto',
    },
  },
});

export const title = style({
  margin: 0,
  fontSize: 17,
  fontWeight: 500,
});

export const description = style({
  marginBottom: 20,
  fontSize: 15,
  lineHeight: 1.5,
});

export const modalResponsiveContent = style({
  width: '100%',
  height: '100%',
});

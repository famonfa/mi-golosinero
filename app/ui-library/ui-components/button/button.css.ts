import { style, styleVariants } from '@vanilla-extract/css';
import { palette } from '../../vanilla.css';

export const buttonStyle = style({
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '25px',
  paddingLeft: 32,
  paddingRight: 32,
  fontSize: 16,
  position: 'relative',
  lineHeight: 1,
  fontWeight: 500,
  height: 56,
  fontFamily: 'inherit',
  boxSizing: 'border-box',
  textDecoration: 'none !important',
  cursor: 'pointer',

  ':hover': {
    textDecoration: 'none !important',
  },
  ':focus': {
    textDecoration: 'none !important',
  },

  ':disabled': { backgroundColor: palette.gray25, color: palette.gray200, cursor: 'auto' },
  '&:hover:disabled': {
    backgroundColor: palette.gray25,
    color: palette.gray25,
    cursor: 'auto',
  },
  '&:focus:disabled': {
    backgroundColor: palette.gray25,
    color: palette.gray200,
    cursor: 'auto',
  },
});

export const buttonLoading = style({});

export const buttonVariantsStyle = styleVariants({
  primary: {
    backgroundColor: palette.primary,
    color: palette.white,
    '&:hover, &:focus': {
      backgroundColor: palette.primaryDark,
    },
  },
  secondary: {
    backgroundColor: palette.gray25,
    color: palette.gray900,
    '&:hover, &:focus': {
      backgroundColor: palette.gray50,
    },
    text: {
      backgroundColor: 'transparent',
      color: palette.gray900,
      padding: 0,
      marginLeft: 4,
      '&:hover': { color: palette.gray1100 },
    },
  },
  loading: {
    pointerEvents: 'none',
    backgroundColor: palette.gray25,
  },
});

export const buttonSizeVariant = styleVariants({
  default: {},
  small: {
    height: 48,
  },
  tiny: {
    height: 28,
    fontSize: 14,
    padding: '0 12px',
  },
  counter: {
    fontSize: 12,
    height: 24,
    width: 24,
    padding: 0,
  },
  row: {
    display: 'block',
    '@media': {
      'screen and (max-width: 768px)': {
        display: 'flex',
        flex: 1,
      },
    },
  },
});

export const buttonRowStyle = style({
  paddingTop: 12,
  paddingBottom: 12,
  display: 'flex',
  '@media': {
    'screen and (max-width: 768px)': {
      paddingTop: 24,
      paddingBottom: 24,
    },
  },
});

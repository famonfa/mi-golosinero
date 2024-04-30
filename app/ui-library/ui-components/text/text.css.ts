import { style, styleVariants } from '@vanilla-extract/css';
import { palette } from '../../vanilla.css';
import { breakpoints } from '../../vanilla.css';
import { fontSizes } from '../../vanilla.css';

export const maxLinesCSS = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  lineClamp: 2,
});

export const fontWeight = styleVariants({
  medium: {
    fontWeight: 500,
  },
  bold: {
    fontWeight: 700,
  },
});

export const fontStyle = styleVariants({
  h1: {
    fontSize: fontSizes.xxlarge,
    fontWeight: 700,
    lineHeight: 1.125,
    color: palette.primaryDark,
    marginTop: 10,
    marginBottom: 30,
  },
  h1a: {
    fontSize: fontSizes.xxlarge,
    fontWeight: 700,
    lineHeight: 1.125,
    color: palette.primaryDark,
    
    marginBottom: 10,
  },
  h2: { fontSize: 22, fontWeight: 700 },
  h3: { fontSize: fontSizes.large, fontWeight: 700 },

  subtitle1: {
    fontSize: '18px',
    lineHeight: '22px',
    '@media': {
      [breakpoints.phone]: {
        fontSize: '18px',
        lineHeight: '22px',
      },
      [breakpoints.tablet]: {
        fontSize: '18px',
        lineHeight: '22px',
      },
      [breakpoints.desktop]: {
        fontSize: '22px',
        lineHeight: '30px',
      },
    },
  },
  subtitle2: {
    fontSize: '16px',
    lineHeight: '20px',
    '@media': {
      [breakpoints.phone]: {
        fontSize: '16px',
        lineHeight: '20px',
      },
      [breakpoints.tablet]: {
        fontSize: '16px',
        lineHeight: '20px',
      },
      [breakpoints.desktop]: {
        fontSize: '20px',
        lineHeight: '26px',
      },
    },
  },
  subtitle3: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 400,
    [breakpoints.phone]: {
      fontSize: '14px',
      lineHeight: '20px',
    }
  },
  subtitle4: {
    fontSize: '12px',
    lineHeight: '16px',
    [breakpoints.phone]: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    [breakpoints.phone]: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    [breakpoints.phone]: {
      fontSize: '14px',
      lineHeight: '18px',
    },
  },

  body1: { fontSize: fontSizes.normal },
  caption1: { fontSize: fontSizes.small, lineHeight: 1.25, letterSpacing: -0.25 },
  caption2: { fontSize: fontSizes.xsmall, letterSpacing: -0.15 },
  error: { color: palette.error },
  bold: { fontWeight: 700 },
  numeric: { fontVariantNumeric: 'tabular-nums' },
});

export const errorStyle = style({
  color: palette.error,
});

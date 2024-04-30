import { globalStyle, style } from '@vanilla-extract/css';
import { createTheme } from '@vanilla-extract/css';


const baseFontSize = 16;
const fontScale = 1.125;
const fontSize = (step = 0) => (baseFontSize * fontScale ** step).toFixed(2) + 'px';

export const breakpoints = {
  phoneMini: 'screen and (min-width: 400px)',
  phone: 'screen and (min-width: 700px)',
  tablet: 'screen and (min-width: 900px)',
  desktop: 'screen and (min-width: 1200px)',
};

export const palette = {
  primary: '#7cacf8',
  primaryLight: '#e7eaf6',
  primaryDark: 'rgb(138,180,248)',
  primaryBackground: '#113f67',
  secondaryBackground: '#071a2b',
  primaryText: 'rgba(211,227,253,0.5)',

  // White
  white: '#FFFFFF',

  // Gray
  gray15: '#FAFAFA',
  gray25: '#F3F2F3',
  gray50: '#E6E6E6',
  gray100: '#CECDCD',
  gray200: '#B5B4B4',
  gray300: '#9D9B9B',
  gray400: '#848282',
  gray500: '#6B6868',
  gray600: '#524F4F',
  gray700: '#3A3636',
  gray800: '#211D1D',
  gray900: '#090404',
  gray1100: '#000000',

  // Green
  green100: '#E8F9EF',
  green200: '#CEEBDB',
  green300: '#A8DBBE',
  green400: '#7FCBA0',
  green500: '#59BB83',
  green600: '#34AC68',
  green700: '#2C9258',
  green800: '#257a4a',
  green900: '#1E623B',
  green1000: '#174D2F',

  // Red
  red100: '#EAF8F8',
  red200: '#C0EAEA',
  red300: '#F1B7AF',
  red400: '#EB968A',
  red500: '#E57666',
  red600: '#DF5845',
  red700: '#be4b3b',
  red800: '#175C5C',
  red900: '#7F3227',
  red1000: '#64281F',

  // Teal
  teal100: '#EAF8F8',
  teal200: '#C0EAEA',
  teal300: '#97DCDC',
  teal400: '#6DC6CD',
  teal500: '#43BFBF',
  teal600: '#24A3A3',
  teal700: '#1F8B8B',
  teal800: '#1A7474',
  teal900: '#155D5D',
  teal1000: '#155D5D',


  // System
  success: '#10B456',
  warning: '#FEA622',
  error: '#EC4634',
};

export const fontSizes = {
  xsmall: fontSize(-2),
  small: fontSize(-1),
  normal: fontSize(0),
  large: fontSize(1),
  xlarge: fontSize(2),
  xxlarge: fontSize(4),
};

export const radii = {
  button: '8px',
  buttonSecondary: '4px',
};

export const shadows = {
  normal: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 0px 12px rgba(16, 24, 40, 0.03)',
};

export const [theme, vars] = createTheme({
  sizes: {
    contentWidth: '1200px',
  },
  space: {
    1: '5px',
    2: '10px',
    3: '15px',
  },
});

export const container = style ({
  maxHeight: '100%',
  
})

globalStyle('html.is-locked, html.is-locked body', {
  height: 'calc(var(--window-inner-height) - 1px)',
  overflow: 'hidden',
});

globalStyle(
  'body, html, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video',
  {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    
  }
);

globalStyle('body', {
  fontSize: '0.8rem',
  fontWeight: 400,
  lineHeight: 1.5,
  fontSmooth: 'antialiased',
  borderRadius: '50px',
  margin: 'o',
  padding: '0',
  backgroundColor: '#0d2136',
  color: 'white',
  '@media': {
    [breakpoints.tablet]: {
      overflow: 'hidden',

},
}
});

globalStyle('html', {
  fontSize: '100%',
});

globalStyle('ol, ul', {
  listStyle: 'none',
});


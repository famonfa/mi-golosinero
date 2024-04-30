import { style } from '@vanilla-extract/css';
import { palette } from '../../vanilla.css';
export const styledCloseButton = style({
  backgroundColor: palette.primary,
  position: 'absolute',
  top: 16,
  right: 16,
  width: 38,
  height: 38,
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});

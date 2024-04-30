import { style, styleVariants } from '@vanilla-extract/css';

export const base = style({
  display: 'flex',
});

const stack = styleVariants({
  horizontal: [
    base,
    {
      flexDirection: 'row',
    },
  ],
  vertical: [
    base,
    {
      flexDirection: 'column',
    },
  ],
});
export default stack;

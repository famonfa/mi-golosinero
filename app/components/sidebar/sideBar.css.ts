import { style } from '@vanilla-extract/css';
import { breakpoints, palette } from '../../ui-library/vanilla.css';

export const sideBar = style({
    height: '100dvh',
    padding: '1em',
    display: 'none',
    backgroundColor: '#071a2b',
    "@media": {
       ['screen and (min-width: 700px)']: {
            display: 'flex',
            width: '225px',
        },
        [breakpoints.tablet]: {
            display: 'flex',
            width: '250px',
        }
      },
      
    

});


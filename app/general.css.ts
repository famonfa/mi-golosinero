import { style } from "@vanilla-extract/css";

export const structure = style({
    display: 'flex',
    flexDirection: 'row',

});

export const mainContent = style({
    flex: '5',  
    padding: '1em'
  });

export const content = style({
    height: '100%',
    borderRadius: '20px',
    backgroundColor: 'white',
    padding: '2em',
})
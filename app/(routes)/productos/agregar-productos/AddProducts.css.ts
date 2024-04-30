import { breakpoints, palette } from "@/app/ui-library/vanilla.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap:'16px',
    width: '100%',
    
    '@media': {
        [breakpoints.phoneMini]: {
            display: 'grid',
            width: '100%',
            gridTemplateColumns: '4fr 2fr ',
    },
        [breakpoints.tablet]: {
            display: 'grid',
            width: '80%',
            gridTemplateColumns: '4fr 2fr ',
    },
}
})

export const wrapperBottom = style({
   
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '16px',

    gap:'16px',
    width: '100%',
    '@media': {
        [breakpoints.phoneMini]: {
            display: 'grid',
            gridTemplateColumns: '2fr 3fr',
            width: '100%'  
    },
    [breakpoints.tablet]: {
        width: '80%',
},
    }
})

export const infoBox = style({
    backgroundColor: palette.secondaryBackground,

    padding: '3em',
    width: '100%',
    borderRadius: '8px',
    transition: '0.3s',
})

export const info = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    
})

export const input = style ( {
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    height: "40px",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
    backgroundColor: palette.primaryLight,   
    ":focus": {
      borderColor: 'transparent',
      outline: "none",
      boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.1)",
    }
  });
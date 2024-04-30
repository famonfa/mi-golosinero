import { breakpoints, palette } from "@/app/ui-library/vanilla.css";
import { style } from "@vanilla-extract/css";

 export const Input = style ({
    width: '100%',
    paddingRight: '1em',
    height: '56x',
    borderRadius: '8px',
    marginBottom: '25px',    
    transition: '0.3s',
    color:'white',
    ':hover': {
    }, 
    ':focus':{
        backgroundColor: '#94778B'
    },
})

export const ModalStyle = style ({
    padding: '1em',
    color: 'white',
})

export const ScrollStyle = style ({
    
   height: '80dvh',
   maxHeight: "80dvh",
   overflow: "auto",

   scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
                width: "0.2rem",
                backgroundColor: palette.primary
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: palette.primaryDark
              },

    '@media': {
        [breakpoints.tablet]: {
            maxHeight: "30em",
            overflow: "auto",
            marginBottom: "1em",    
        },
      },
})


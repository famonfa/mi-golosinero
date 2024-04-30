// vanilla.css.ts

import { breakpoints, palette } from "@/app/ui-library/vanilla.css";
import { style } from "@vanilla-extract/css";

export const container = style ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
    width: "100%",
    fontFamily: "Noto Sans, sans-serif",
    color: palette.primaryDark,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    height: "85dvh",
    '@media': {
      [breakpoints.tablet]: {
        width: "75%",
  
  },
}

});
  
  export const input = style ( {
    marginBottom: "10px",
    borderRadius: "4px",
    height: "40px",
    transition: "border-color 0.3s",
    width: "45%",
    boxSizing: "border-box",
    ":focus": {
      borderColor: 'transparent',
      outline: "none",
      boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.1)",
      color:'white',

    },

  });
  
  export const table = style ({
    width: "100%",
    borderCollapse: "collapse",
    tableLayout: "auto",
    textAlign: "left",
    marginTop: "10px",
    borderRadius: "8px",
    alignSelf:"start",
    backgroundColor:  '#162c46',
    color: palette.primaryText
  });
  
  export const th = style ( {
    cursor: "pointer",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    userSelect: "none",
    transition: "background-color 0.1s",
    color: palette.primaryText,
 
  });
  
  export const oddRow = style ( {
    background: "#f0f0f0",
    color: "#333",
    fontSize:"2rem"
  });
  

  export const tr = style ({
    transition: "ease-in 3s",
    ":hover": {
      borderBottom: '1px solid ' + palette.primary,
    }
  })

 export const scrollBox = style ({
    overflowY: "scroll",
    maxHeight: "70dvh",
    scrollBehavior: "smooth",

    "&::-webkit-scrollbar": {
      width: "0.2rem",
      backgroundColor: palette.primary
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: palette.primaryDark
    }

 }) 
  
 export const scrollBoxMini = style ({
  overflowY: "scroll",
  maxHeight: "23dvh",
  scrollBehavior: "smooth",

  "&::-webkit-scrollbar": {
    width: "0.2rem",
    backgroundColor: palette.primary
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: palette.primaryDark
  }

}) 

  
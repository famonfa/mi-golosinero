import { palette } from "@/app/ui-library/vanilla.css";
import { style } from "@vanilla-extract/css";

export const container = style({
    
    width: '100%',
    display: 'grid',
  
}) 

export const containerInfo = style({

    padding: '3em',
    width: '100%',
    borderRadius: '8px',
    border: '1px solid #ccc',
    transition: '0.3s',
    ':hover': {
        // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    }
})

export const inputInfo = style({
    marginBottom: "10px",
    border:'1px solid #ccc' ,
    borderRadius: "4px",
    height: "30px",
    transition: "border-color 0.3s",
    width: "100%",
    boxSizing: "border-box",
    fontSize: '16px',
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    ":hover": {
        backgroundColor: palette.primaryLight,
        cursor: 'default'
    },
    ":focus": {
        borderColor: 'transparent',
        outline: "none",
        boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.1)",
        backgroundColor: palette.primary,
    }
}) 
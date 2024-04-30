import { palette } from "@/app/ui-library/vanilla.css";
import { style } from "@vanilla-extract/css";

export const elementStyle = style({
   
        display: "flex",
        margin: "0",
        padding: "5px",
        alignContent: "center",
        alignItems: "center",
        gap: "10px",
        
})

export const linkStyle = style({
    ':hover': {
        backgroundColor: palette.gray200, 
    }
})
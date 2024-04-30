import { palette } from "@/app/ui-library/vanilla.css";
import { style } from "@vanilla-extract/css";

export const icon = style ({
    width: '30px',
    height: '30px',
    color: palette.primaryBackground,
    flex: '1',
    cursor: 'pointer',
    

}) 

export const inputContainer = style ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '20px',
    flexWrap: 'wrap',
    height: '100%',
    transition: 'ease-in 0.5s',
})
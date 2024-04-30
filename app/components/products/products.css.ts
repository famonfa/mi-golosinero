import { palette } from "@/app/ui-library/vanilla.css";
import { style } from "@vanilla-extract/css";

export const gridStats = style ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: '10px',
    flexWrap: 'wrap',  
    paddingLeft: '1em',
})

export const stats = style ({
    display: 'flex',
    width: '100%',
    marginBottom: '1em',
    gap: '10px',
})




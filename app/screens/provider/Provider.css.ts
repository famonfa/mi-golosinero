import { palette } from "@/app/ui-library/vanilla.css";
import { style } from "@vanilla-extract/css";

export const stats = style({
    backgroundColor: palette.primary,
    fontSize: "15px",
    flexDirection: "column",
    flex: "1",
    padding: "7px",
    borderRadius: "8px",
    display: "flex",
    maxWidth: "200px",
    justifyContent: "space-around",
});

export const gridStats = style ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    gap: '10px',
    flexWrap: 'nowrap',  
})
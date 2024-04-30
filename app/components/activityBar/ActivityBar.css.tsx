import { style } from "@vanilla-extract/css";

export const activityBar = style({
  display: "flex",
  height: "100dvh",
  padding: "1em",
  width: "250px",
  borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
  "@media": {
    "screen and (max-width: 1080px)": {
      display: "none",
    },
  },
});

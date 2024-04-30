import { Box } from "@/app/ui-library/ui-components/box/box";
import { Stack } from "@/app/ui-library/ui-components/stack/stack";
import { Text } from "@/app/ui-library/ui-components/text/text";
import React from "react";
import { activityBar } from "./ActivityBar.css";

const SideBar = () => {
  return (
    <div className={activityBar}>
      <div>
        <Stack
          direction="horizontal"
          css={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
          }}
        >
          <h3>Activity</h3>
        </Stack>
      </div>
    </div>
  );
};

export default SideBar;

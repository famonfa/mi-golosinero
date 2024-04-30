import { Box } from "@/app/ui-library/ui-components/box/box";
import { Stack } from "@/app/ui-library/ui-components/stack/stack";
import { Text } from "@/app/ui-library/ui-components/text/text";
import { sideBar } from "./sideBar.css";
import React from "react";
import Image from "next/image";
import MenuNav from "../menuNav/MenuNav";

const SideBar = () => {
  return (
    <div className={sideBar}>
      <div>
        <Stack
          direction="horizontal"
          css={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
          }}
        >
          <Stack direction="horizontal" css={{ alignItems: "center", gap: 10 }}>
            <Image
              src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
              alt="logo"
              width={40}
              height={40}
              style={{
                borderRadius: "50%",
              }}
            ></Image>
            <Text variant="h3">Mi golosinero</Text>
          </Stack>
        </Stack>
        <Box>
          <MenuNav />
        </Box>
      </div>
    </div>
  );
};

export default SideBar;

import { Box } from "@/app/ui-library/ui-components/box/box";
import { Text } from "@/app/ui-library/ui-components/text/text";
import { Stack } from "@/app/ui-library/ui-components/stack/stack";
import React, { ReactNode } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ItemBarStyle } from "./ItemBar.css";
import { useRouter } from "next/navigation";

type ItemBarProps<T> = {
  name: string;
  category?: string;
  buttonArray?: T[];
};

const ItemBar: React.FC<ItemBarProps<Record<string, any>>> = ({
  name,
  category,
  buttonArray,
}) => {
  const router = useRouter();
  return (
    <Box className={ItemBarStyle}>
      <Stack direction="horizontal" css={{ alignItems: "center", gap: 10 }}>
        <IoMdArrowRoundBack
          size={25}
          onClick={() => router.back()}
          style={{ cursor: "pointer" }}
        />
        <Text variant="h3">{category ? `${category} ${name}` : name}</Text>
      </Stack>
      <Stack direction="horizontal">
        <Box>
          {buttonArray?.map((item, index) => (
            <Box key={index}>
              {Object.keys(item).map((key) => (
                <Box key={key}>
                  <Box>{item[key]}</Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default ItemBar;

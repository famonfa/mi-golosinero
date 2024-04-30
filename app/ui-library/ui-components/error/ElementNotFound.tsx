import React from "react";
import { Text } from "@/app/ui-library/ui-components/text/text";
import notFound from "../../../assets/notFound.png";
import Image from "next/image";
import { ElementNotFoundStyle } from "./ElementNotFound.css";
import { Box } from "@/app/ui-library/ui-components/box/box";

const ElementNotFound = ({ element }: { element: string }) => {
  return (
    <Box className={ElementNotFoundStyle}>
      <Image src={notFound} alt="logo" width={150} height={150} />
      <Text variant="h3">Seleccioná un {element}</Text>
    </Box>
  );
};

export default ElementNotFound;

import { Box } from "@/app/ui-library/ui-components/box/box";
import { Text } from "@/app/ui-library/ui-components/text/text";

import React, { Dispatch, useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { MdOutlineCreate } from "react-icons/md";

import { icon, inputContainer } from "./putPatchDelete.css";
import { Tooltip } from "@mui/material";
import { palette } from "@/app/ui-library/vanilla.css";
import { IconContext } from "./putPatchDeleteContext";

type Props = {
  column?: boolean;
  create?: boolean;
  showOptions?: null | number;
  product?: boolean;
};

const PutPatchDelete = ({ column, create, showOptions, product }: Props) => {
  const iconContext = useContext(IconContext);
  if (!iconContext) return null;
  const { setIconSelected } = iconContext;

  return (
    <Box
      className={inputContainer}
      style={{ flexDirection: column ? "column" : "row" }}
    >
      {create && (
        <Tooltip title={<Text variant="h3">Crear</Text>}>
          <Box>
            <MdOutlineBrowserUpdated className={icon} />
          </Box>
        </Tooltip>
      )}

      <Tooltip title={<Text variant="h3">Editar</Text>}>
        <Box onClick={() => setIconSelected(product ? "EDIT_PRODUCT" : "")}>
          <MdOutlineCreate
            className={icon}
            style={{ color: showOptions && palette.primary }}
          />
        </Box>
      </Tooltip>
      <Tooltip title={<Text variant="h3">Eliminar</Text>}>
        <Box onClick={() => setIconSelected(product ? "DELETE_PRODUCT" : "")}>
          <Box>
            <RiDeleteBin5Line
              className={icon}
              style={{ color: showOptions && palette.primary }}
            />
          </Box>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default PutPatchDelete;

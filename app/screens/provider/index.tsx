import { Box } from "@/app/ui-library/ui-components/box/box";
import React, { useState } from "react";
import ProviderStats from "./ProviderStats";
import ItemBar from "@/app/components/itemBar/ItemBar";
import { useQuery } from "@apollo/client";
import { GET_PROVIDER } from "@/app/queries";
import { LinearProgress } from "@mui/material";
import ElementNotFound from "@/app/ui-library/ui-components/error/ElementNotFound";
import ProviderCard from "./ProviderCard";
import ProviderProducts from "./ProviderProducts";

const Provider = ({ id }: { id: string }) => {
  const [showOptions, setShowOptions] = useState(null as null | number);

  const { data, loading, error } = useQuery(GET_PROVIDER, {
    variables: { id },
  });

  return (
    <Box>
      <ItemBar name={data?.provider.name} />
      <ProviderStats />
      <Box css={{ display: "flex", gap: "1em" }}>
        <ProviderCard data={data} />
        <ProviderProducts
          showOptions={showOptions}
          setShowOptions={setShowOptions}
          data={data}
        />
      </Box>
    </Box>
  );
};

export default Provider;

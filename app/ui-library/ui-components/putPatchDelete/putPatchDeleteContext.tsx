import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type IconContextType = {
  iconSelected: string | null;
  setIconSelected: Dispatch<SetStateAction<string>>;
};

// Initialize context with null
const IconContext = createContext<IconContextType | null>(null);

const IconProvider = ({ children }: { children: React.ReactNode }) => {
  const [iconSelected, setIconSelected] = useState<string>("");

  return (
    <IconContext.Provider value={{ iconSelected, setIconSelected }}>
      {children}
    </IconContext.Provider>
  );
};

export { IconContext, IconProvider };

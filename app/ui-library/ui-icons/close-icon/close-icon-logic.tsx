"use client";
import SvgCloseIcon from "./close-icon";
import { palette } from "@/app/ui-library/vanilla.css";
import { styledCloseButton } from "./close-icon.css";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { IconContext } from "../../ui-components/putPatchDelete/putPatchDeleteContext";

export const CloseIconUI = () => {
  const router = useRouter();
  const iconContext = useContext(IconContext);
  const { setIconSelected } = iconContext || {};

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault(); // Prevent any default behavior of the Esc key (e.g., closing the browser tab)
        setIconSelected && setIconSelected("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIconSelected]);
  return (
    <div
      className={styledCloseButton}
      onClick={() => setIconSelected && setIconSelected("")}
    >
      <SvgCloseIcon color={palette.gray900} />
    </div>
  );
};

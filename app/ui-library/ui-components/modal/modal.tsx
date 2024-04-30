import { ReactNode } from "react";
import { overlay, content, modalResponsiveContent } from "./modal.css";
import { CloseIconUI } from "../../ui-icons/close-icon/close-icon-logic";

export const Modal = ({
  children,
  css,
}: {
  children: ReactNode;
  css?: React.CSSProperties;
  onClick?: () => void;
}) => {
  return (
    <div className={overlay}>
      <div className={content} style={css}>
        <CloseIconUI />
        <div className={modalResponsiveContent}>{children}</div>
      </div>
    </div>
  );
};

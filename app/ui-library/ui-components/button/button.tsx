import { forwardRef, ReactNode } from "react";
import SvgLoadingAnimation from "../../ui-icons/loading-animation";
import {
  buttonRowStyle,
  buttonSizeVariant,
  buttonStyle,
  buttonVariantsStyle,
} from "./button.css";
import classNames from "classnames";
import { palette } from "../../vanilla.css";

export type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E;
  children?: ReactNode;
  css?: React.CSSProperties & {
    "@media print"?: React.CSSProperties;
  };
  variant?: "primary" | "secondary" | "text";
  loading?: boolean;
  size?: "counter" | "default" | "small" | "tiny" | "row";
  row?: boolean;
  customColor?: string;
};

export type ButtonProps<E extends React.ElementType = "button"> =
  ButtonOwnProps<E> & Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;

export const Button: <E extends React.ElementType = "button">(
  props: ButtonProps<E>
) => React.ReactElement | null = forwardRef(function Box(
  props: ButtonOwnProps,
  ref: React.Ref<Element>
) {
  const buttonStyleProps = props.variant;
  const buttonSizeProps = props.size;
  const buttonLoading = props.loading;

  let ButtonStyleVariant;

  const bgColor = props.customColor && props.customColor;

  if (buttonLoading) {
    ButtonStyleVariant = buttonVariantsStyle["loading"];
  } else {
    ButtonStyleVariant = buttonStyleProps
      ? buttonVariantsStyle[buttonStyleProps]
      : buttonVariantsStyle.primary;
  }

  const ButtonSize = buttonSizeProps
    ? buttonSizeVariant[buttonSizeProps]
    : buttonSizeVariant.default;

  return (
    <button
      className={classNames(buttonStyle, ButtonStyleVariant, ButtonSize)}
      ref={ref}
      type="button"
      style={bgColor ? { background: bgColor } : props.css}
      {...props}
    >
      {props.loading && (
        <SvgLoadingAnimation
          color={palette.gray900}
          style={{
            width: 40,
            height: 30,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute",
          }}
        />
      )}
      <div style={{ display: "flex", opacity: props.loading ? 0 : 1 }}>
        {props.children}
      </div>
    </button>
  );
});

export const Submit: <E extends React.ElementType = "button">(
  props: ButtonProps<E>
) => React.ReactElement | null = forwardRef(function Submit(
  props: ButtonOwnProps,
  ref: React.Ref<Element>
) {
  return <Button ref={ref} type="submit" {...props} />;
});

export const ButtonRow = ({ children }: { children: ReactNode }) => {
  return <div className={buttonRowStyle}>{children}</div>;
};

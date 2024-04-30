import { errorStyle, fontStyle, fontWeight, maxLinesCSS } from "./text.css";
import classNames from "classnames";

type TextProps = {
  variant?:
    | "error"
    | "h1"
    | "h1a"
    | "h2"
    | "h3"
    | "subtitle1"
    | "subtitle2"
    | "subtitle3"
    | "subtitle4"
    | "body1"
    | "caption1"
    | "caption2"
    | "numeric";
  weight?: "medium" | "bold";
  maxLines?: number;
  error?: boolean;
  css?: React.CSSProperties;
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  classNameVanilla?: string;
};

export const Text = ({
  maxLines,
  css,
  variant,
  weight,
  error,
  classNameVanilla,
  ...props
}: TextProps) => {
  const as =
    props.as ||
    (typeof variant === "string" && variant.match(/h[123]/)) ||
    "div";

  const fontStyleProp = variant && fontStyle[variant];
  const weightStyleProp = weight && fontWeight[weight];

  const cssStyles = maxLines && maxLinesCSS;
  const errorClass = error ? errorStyle : "";

  return (
    <div
      as={as}
      data-component="Text"
      className={classNames(
        errorClass,
        fontStyleProp,
        weightStyleProp,
        cssStyles,
        classNameVanilla
      )}
      style={css}
      {...props}
    />
  );
};

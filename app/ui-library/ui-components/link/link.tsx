import Link from "next/link";
import { linkStyles, linkHover } from "./link.css";
import classNames from "classnames";

type LinkProps = React.LinkHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  color?: string;
  css?: React.CSSProperties;
  hover?: boolean;
};

export const LinkNext = ({
  href,
  children,
  color = "black",
  css,
  hover,
}: LinkProps) => {
  if (hover) {
    return (
      <Link
        style={{ color: color, ...css }}
        className={classNames(linkStyles, linkHover)}
        href={href}
        scroll={false}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      style={{ color: color, ...css }}
      className={linkStyles}
      href={href}
      scroll={false}
    >
      {children}
    </Link>
  );
};

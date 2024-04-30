"use client";
import * as React from "react";
import { SVGProps } from "react";

const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={11}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.671.292.541 1.449l3.83 3.923-4.08 4.18 1.13 1.157L5.5 6.529l4.079 4.18 1.13-1.158-4.08-4.179 3.83-3.923L9.328.292 5.5 4.215 1.671.292Z"
      fill={"white"}
    />
  </svg>
);

export default SvgCloseIcon;

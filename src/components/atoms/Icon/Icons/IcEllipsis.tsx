import React from "react";
import { ISVGProps } from "../../../..";

function IcEllipsis({ ...rest }: ISVGProps) {
  return (
    <svg {...rest} viewBox="64 64 896 896">
      <path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"></path>
    </svg>
  );
}

export default IcEllipsis;

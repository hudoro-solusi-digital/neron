import React from "react";
import { ISVGProps } from "../../../utils";

function Check({ ...rest }: ISVGProps) {
  return (
    <svg {...rest} viewBox="0 0 16 16">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 3.99997C13.1105 4.08281 13.1329 4.23951 13.05 4.34997L7.20001 12.15C7.10873 12.2717 6.93081 12.2843 6.82324 12.1767L3.00001 8.35352C2.90238 8.25589 2.90238 8.0976 3.00001 7.99997C3.09764 7.90234 3.25593 7.90234 3.35356 7.99997L6.97296 11.6194L12.65 4.04997C12.7329 3.93951 12.8896 3.91712 13 3.99997Z"
        fill="white"
      />
    </svg>
  );
}

export default Check;

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Icon20PxX = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-20-px-x ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.5 3.5L3.5 12.5M12.5 12.5L3.5 3.5"
        stroke="#B91C1C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

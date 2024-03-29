/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Icon24PxShieldcheck = ({ color = "#5E718D", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-24-px-shieldcheck ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.125 9L10.625 14.25L7.875 11.625M3.75 10V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H19.5C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V10C20.25 17.8764 13.5651 20.486 12.2303 20.9285C12.0811 20.9798 11.9189 20.9798 11.7697 20.9285C10.4349 20.486 3.75 17.8764 3.75 10Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Icon24PxShieldcheck.propTypes = {
  color: PropTypes.string,
};

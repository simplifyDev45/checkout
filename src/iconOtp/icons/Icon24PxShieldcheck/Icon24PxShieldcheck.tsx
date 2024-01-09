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
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.125 9.5L10.625 14.75L7.875 12.125M3.75 10.5V5C3.75 4.80109 3.82902 4.61032 3.96967 4.46967C4.11032 4.32902 4.30109 4.25 4.5 4.25H19.5C19.6989 4.25 19.8897 4.32902 20.0303 4.46967C20.171 4.61032 20.25 4.80109 20.25 5V10.5C20.25 18.3764 13.5651 20.986 12.2303 21.4285C12.0811 21.4798 11.9189 21.4798 11.7697 21.4285C10.4349 20.986 3.75 18.3764 3.75 10.5Z"
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

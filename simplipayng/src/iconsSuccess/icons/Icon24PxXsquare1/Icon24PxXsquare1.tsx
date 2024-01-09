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

export const Icon24PxXsquare1 = ({ color = "#FCA5A5", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-24-px-xsquare-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15 9L9 15M15 15L9 9M4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V4.5C3.75 4.08579 4.08579 3.75 4.5 3.75Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Icon24PxXsquare1.propTypes = {
  color: PropTypes.string,
};

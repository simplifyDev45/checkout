/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  property1: "variant-4" | "filled" | "outline" | "inactive";
  className: any;
  text: string;
  proceed: any
}

export const LongButton = ({ property1, className, text = "Next", proceed }: Props): JSX.Element => {
  return (
    <button className={`long-button ${property1} ${className}`} onClick={proceed}>
      <div className="next">{text}</div>
    </button>
  );
};

LongButton.propTypes = {
  property1: PropTypes.oneOf(["variant-4", "filled", "outline", "inactive"]),
  text: PropTypes.string,
};

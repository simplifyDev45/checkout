import PropTypes from "prop-types";
import React, { FC } from "react";
import "./style.css";

interface LongButtonProps {
  property1?: "variant-4" | "filled" | "outline" | "inactive";
  className?: string;
  text?: string;
  proceed: any
}

export const LongButton: FC<LongButtonProps> = ({ property1, className, text = "Next", proceed }) => {
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

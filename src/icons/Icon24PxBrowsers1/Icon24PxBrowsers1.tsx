import PropTypes from "prop-types";
import React, { FC } from "react";

interface Icon24PxBrowsers1Props {
  color?: string;
  className?: string;
}

export const Icon24PxBrowsers1: FC<Icon24PxBrowsers1Props> = ({ color = "#5E718D", className }) => {
  return (
    <svg
      className={`icon-24-px-browsers-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.00073 7.5V5.25C6.00073 5.05109 6.07975 4.86032 6.2204 4.71967C6.36105 4.57902 6.55182 4.5 6.75073 4.5H20.2507C20.4496 4.5 20.6404 4.57902 20.7811 4.71967C20.9217 4.86032 21.0007 5.05109 21.0007 5.25V15.75C21.0007 15.9489 20.9217 16.1397 20.7811 16.2803C20.6404 16.421 20.4496 16.5 20.2507 16.5H18.0007M3 10.5H18M3.75073 7.5H17.2507C17.6649 7.5 18.0007 7.83579 18.0007 8.25V18.75C18.0007 19.1642 17.6649 19.5 17.2507 19.5H3.75073C3.33652 19.5 3.00073 19.1642 3.00073 18.75V8.25C3.00073 7.83579 3.33652 7.5 3.75073 7.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Icon24PxBrowsers1.propTypes = {
  color: PropTypes.string,
};

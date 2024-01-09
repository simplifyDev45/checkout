import PropTypes from "prop-types";
import React, { FC } from "react";
import "./style.css";

interface PaymentLogoProps {
  className?: string;
  iconClassName?: string;
  right?: string;
  middle?: string;
}

export const PaymentLogo: FC<PaymentLogoProps> = ({
  className,
  iconClassName,
  right = "https://c.animaapp.com/hjcXT6qK/img/right-1.svg",
  middle = "https://c.animaapp.com/hjcXT6qK/img/middle-1.svg",
}) => {
  return (
    <div className={`payment-logo ${className}`}>
      <div className={`icon ${iconClassName}`}>
        <div className="overlap-group">
          <img className="right" alt="Right" src={right} />
          <img className="middle" alt="Middle" src={middle} />
        </div>
      </div>
    </div>
  );
};

PaymentLogo.propTypes = {
  right: PropTypes.string,
  middle: PropTypes.string,
};

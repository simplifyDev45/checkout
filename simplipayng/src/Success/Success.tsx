import React from "react";
import { IconPx } from "../components/Success/components/IconPx";
import { IconPxWrapper } from "../components/Success/components/IconPxWrapper";
import { Icon24PxShieldcheck } from "../icons/Icon24PxShieldcheck";
import { Icon24PxXsquare1 } from "../iconsSuccess/icons/Icon24PxXsquare1";
import "./style.css";

export const Success = (): JSX.Element => {
  return (
    <div className="frame3">
      <div className="div">
        <Icon24PxXsquare1 className="icon-instance-node" color="#FCA5A5" />
        <div className="div-2">
          <div className="div-3">
            <div className="group-wrapper">
              <div className="group">
                <img className="img" alt="frame3" src="https://c.animaapp.com/xUiKisyv/img/frame3-9820.svg" />
                <div className="div-4">
                  <img className="star" alt="Star" src="https://c.animaapp.com/xUiKisyv/img/star-3.svg" />
                  <img className="star-2" alt="Star" src="https://c.animaapp.com/xUiKisyv/img/star-4.svg" />
                  <div className="rectangle" />
                  <div className="rectangle-2" />
                </div>
                <div className="div-5">
                  <img className="star-3" alt="Star" src="https://c.animaapp.com/xUiKisyv/img/star-5.svg" />
                  <div className="rectangle-3" />
                  <div className="rectangle-4" />
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                </div>
              </div>
            </div>
            <div className="div-6">
              <IconPx />
              <div className="text-wrapper">Success!</div>
              <IconPxWrapper />
            </div>
          </div>
          <p className="p">You paid NGN 1000 to simplify</p>
        </div>
      </div>
      <div className="div-7">
        <Icon24PxShieldcheck className="icon-instance-node" color="#09C63E" />
        <p className="secured-by-simplipay">
          <span className="span">Secured by</span>
          <span className="text-wrapper-2"> Simplipay</span>
        </p>
      </div>
    </div>
  );
};

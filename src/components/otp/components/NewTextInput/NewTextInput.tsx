/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon20PxCaretdown1 } from "../../../../iconOtp/icons/Icon20PxCaretdown1";
import { Icon20PxX } from "../../../../iconOtp/icons/Icon20PxX";
import { NgNigeria } from "../../../../iconOtp/icons/NgNigeria";
import "./style.css";

interface Props {
  property1:
    | "phone-number"
    | "default"
    | "variant-5"
    | "error-or-info"
  | "OTP"
  | "PIN"
    | "dropdown"
    | "uploaded"
    | "social-media"
    | "amount"
    | "list"
    | "upload";
  className: any;
}

export const NewTextInput = ({ property1, className }: Props): JSX.Element => {
  return (
    <div className={`new-text-input ${property1} ${className}`}>
      {(property1 === "OTP" ||
        property1 === "PIN" ||
        property1 === "amount" ||
        property1 === "default" ||
        property1 === "dropdown" ||
        property1 === "list" ||
        property1 === "phone-number" ||
        property1 === "social-media" ||
        property1 === "upload" ||
        property1 === "uploaded" ||
        property1 === "variant-5") && (
        <>
          <div className="business-name">
            {["amount", "default", "dropdown", "list", "phone-number", "variant-5"].includes(property1) && (
              <>
                <span className="span">
                  {["default", "dropdown", "list", "variant-5"].includes(property1) && <>Business name</>}

                  {property1 === "amount" && <>Amount</>}

                  {property1 === "phone-number" && <>Phone number</>}
                </span>
                <p className="span-wrapper">
                  <span className="text-wrapper">&nbsp;</span>
                </p>
                <p className="span-wrapper">
                  <span className="text-wrapper-2">*</span>
                </p>
              </>
            )}

            {property1 === "social-media" && <>Handle</>}

            {property1 === "OTP" && <>OTP</>}
             {property1 === "PIN" && <>PIN</>}

            {["upload", "uploaded"].includes(property1) && (
              <p className="div">
                <span className="text-wrapper-3">Business name</span>
                <span className="text-wrapper">&nbsp;</span>
                <span className="text-wrapper-2">*</span>
              </p>
            )}
          </div>
          <div className="frame-2">
            {["default", "list", "upload", "variant-5"].includes(property1) && (
              <div className="buyhomes-nigeria">
                {["default", "list", "variant-5"].includes(property1) && <>BuyHomes Nigeria Limited</>}

                {property1 === "upload" && <p className="p">Click here to upload document</p>}
              </div>
            )}

            {["amount", "phone-number", "social-media", "uploaded"].includes(property1) && (
              <>
                <div className="div-2">
                  {property1 === "amount" && <>₦</>}

                  {property1 === "social-media" && <>@</>}

                  {property1 === "phone-number" && (
                    <>
                      <NgNigeria className="NG-nigeria" />
                      <div className="text-wrapper-4">+234</div>
                      <Icon20PxCaretdown1 className="instance-node" />
                    </>
                  )}

                  {property1 === "uploaded" && <>document.pdf</>}
                </div>
                <div className="element">
                  {property1 === "amount" && <>100,000,000.00</>}

                  {property1 === "social-media" && <>BuyHomes Nigeria Limited</>}

                  {property1 === "phone-number" && <>7031635772</>}

                  {property1 === "uploaded" && (
                    <>
                      <div className="text-wrapper-5">Remove</div>
                      <Icon20PxX className="instance-node" />
                    </>
                  )}
                </div>
              </>
            )}

            {property1 === "OTP" && (
              <>
                <div className="div-wrapper">
                  <div className="text-wrapper-6">2</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-6">4</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-6">5</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-6">0</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-6">3</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-6">9</div>
                </div>
              </>
            )}

             {property1 === "PIN" && (
              <>
                <div className="div-wrapper">
                  <div className="text-wrapper-6">2</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-6">4</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-6">5</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-6">0</div>
                </div>
            
              </>
            )}

            {property1 === "dropdown" && (
              <>
                <div className="text-wrapper-7">BuyHomes Nigeria Limited</div>
                <Icon20PxCaretdown1 className="icon-px-caretdown" />
              </>
            )}
          </div>
        </>
      )}

      {property1 === "error-or-info" && (
        <>
          <p className="div">
            <span className="text-wrapper-3">Business name</span>
            <span className="text-wrapper">&nbsp;</span>
            <span className="text-wrapper-2">*</span>
          </p>
          <div className="frame-3">
            <div className="text-wrapper-7">BuyHomes Nigeria Limited</div>
            <Icon20PxCaretdown1 className="instance-node" />
          </div>
          <div className="text-wrapper-8">Passwords do not match</div>
        </>
      )}
    </div>
  );
};

NewTextInput.propTypes = {
  property1: PropTypes.oneOf([
    "phone-number",
    "default",
    "variant-5",
    "error-or-info",
    "OTP",
    "PIN",
    "dropdown",
    "uploaded",
    "social-media",
    "amount",
    "list",
    "upload",
  ]),
};

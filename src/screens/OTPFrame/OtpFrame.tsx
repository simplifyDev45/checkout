import React from "react";
import { IconPx } from "../../components/otp/components/IconPx";
import { LongButton } from "../../components/otp/components/LongButton";
import { NewTextInput } from "../../components/otp/components/NewTextInput";
import { Icon24PxArrowcircleleft1 } from "../../iconOtp/icons/Icon24PxArrowcircleleft1";
import { Icon24PxShieldcheck } from "../../iconOtp/icons/Icon24PxShieldcheck";
import "./style.css";

interface Props {

  proceed: any
}

export const OtpFrame =({ proceed }: Props): JSX.Element => {

  return (
    <div className="frame2">
      <div className="div-3">
        <div className="text-wrapper-9">OTP</div>
        <IconPx />
      </div>
      <p className="an-email-containing">
        <span className="text-wrapper-10">An email containing a 6-digit code was sent to </span><br/>
        <span className="text-wrapper-11">phone number.</span>
        <span className="text-wrapper-10"> Enter the code below.</span>
      </p>
      <NewTextInput className="new-text-input-fields" property1="OTP" />
      <LongButton className="long-button-instance" property1="filled" text="Proceed" proceed={proceed} />
      <p className="didn-t-get-email">
        <span className="text-wrapper-12">Didn’t get email?</span>
        <span className="text-wrapper-13">&nbsp;</span>
        <span className="text-wrapper-14">Resend</span>
      </p>
      <div className="div-4">
        <Icon24PxShieldcheck className="icon-px" color="#09C63E" />
        <p className="secured-by-simplipay">
          <span className="text-wrapper-15">Secured by</span>
          <span className="text-wrapper-16"> Simplipay</span>
        </p>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { LongButton } from '../../components/LongButton';
import { PaymentLogo } from '../../components/PaymentLogo';
import { Icon24PxBrowsers1 } from '../../icons/Icon24PxBrowsers1';
import { Icon24PxMoney } from '../../icons/Icon24PxMoney';
import { Icon24PxShieldcheck } from '../../icons/Icon24PxShieldcheck';
import { SimplipayLogo } from '../../icons/SimplipayLogo';
import InputMask from 'react-input-mask';
import { Modal, Button, Card } from 'react-bootstrap';
import OTPInput from 'react-otp-input';

import './style.css';
import { OtpFrame } from '../OTPFrame/OtpFrame';
import { TransactionPin } from '../OTPFrame/TransactionPin';
import { Success } from '../Success/Success';

const Frame = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [otp, setOtp] = useState('');

  const [pan, setPan] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);

  const [expiryDate, setExpiryDate] = useState<string>('');
  const [isValidDate, setValidDate] = useState<boolean>(true);

  const formatPAN = (inputPan: string) => {
    // Add space after every 4 characters
    return inputPan.replace(/(.{4})/g, '$1 ').trim();
  };

  const handlePanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputPan = event.target.value.toUpperCase().replace(/\s/g, ''); // Convert to uppercase and remove spaces for consistency

    // Basic PAN card number validation
    const isValidPan = /^[A-Z]{5}\d{4}[A-Z]$/.test(inputPan);

    if (inputPan.length <= 16) {
      setPan(formatPAN(inputPan));
      setIsValid(isValidPan);
      if (isValidPan) {
        // onPanChange(inputPan);
        console.log(inputPan);
      }
    }
};

    const handleKeyDown = (event: any) => {
    // Allow: backspace, delete, tab, escape, enter, and .
    if (
      event.key === 'Backspace' ||
      event.key === 'Delete' ||
      event.key === 'Tab' ||
      event.key === 'Escape' ||
      event.key === 'Enter' ||
      event.key === '.' // if you want to allow decimal points
    ) {
      return;
    }

    // Allow: Ctrl+A
    if (event.ctrlKey === true && event.key === 'a') {
      return;
    }

    // Allow: numbers 0-9
    if (/^\d$/.test(event.key)) {
      return;
    }

    // Prevent other non-numeric characters from being input
    event.preventDefault();
  };


const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  let inputExpiryDate = e.target.value.replace(/\s/g, ''); // Remove spaces from entered value
  const isValidExpiryDate = /^[0-9]{2}\/[0-9]{2}$/.test(inputExpiryDate); // Add your validation logic

  if ((e.nativeEvent as InputEvent).inputType === 'deleteContentBackward') {
    // Handle backspace button press
    inputExpiryDate = inputExpiryDate.slice(0, -1);
  } else if (inputExpiryDate.length === 2 && !inputExpiryDate.includes('/')) {
    // Format input as MM / YY
    inputExpiryDate = `${inputExpiryDate} / `;
  }

  if (inputExpiryDate.length <= 5) {
    setExpiryDate(inputExpiryDate);
    setValidDate(isValidExpiryDate);

    if (isValidExpiryDate) {
      console.log(inputExpiryDate);
      // onExpiryDateChange(inputExpiryDate);
    }
  }
};

  const [step, setStep] = useState(1);

  const proceed = () => {
    setStep(step + 1);
  };

  const PageModal = () => {
    return (
      <Modal
        dialogclassName="m-auto px-5 modal-card"
        aria-hidden="true"
        show={show} //showConfirm
        onHide={() => setShow(false)}
        animation
        centered
        size="lg"
        backdrop={'static'}
        aria-labelledby="contained-modal-title-vcenter"
        keyboard={false}
      >
          {step === 1 && (
   <div>
        <meta charSet="utf-8" />
        <style dangerouslySetInnerHTML={{__html: "\n    @import url(\"https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css\");\n@import url(\"https://fonts.googleapis.com/css?family=Inter:500,400\");\n* {\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  margin: 0px;\n  height: 100%;\n}\n/* a blue color as a generic focus style */\nbutton:focus-visible {\n  outline: 2px solid #4a90e2 !important;\n  outline: -webkit-focus-ring-color auto 5px !important;\n}\na {\n  text-decoration: none;\n}\n\n:root {\n  --primarypurple-50: rgba(246, 238, 255, 1);\n  --primarypurple-100: rgba(227, 202, 255, 1);\n  --primarypurple-200: rgba(214, 177, 255, 1);\n  --primarypurple-300: rgba(195, 141, 255, 1);\n  --primarypurple-400: rgba(184, 119, 255, 1);\n  --primarypurple-500: rgba(166, 85, 255, 1);\n  --primarypurple-600: rgba(151, 77, 232, 1);\n  --primarypurple-700: rgba(118, 60, 181, 1);\n  --primarypurple-800: rgba(91, 47, 140, 1);\n  --primarypurple-900: rgba(70, 36, 107, 1);\n  --secondaryblue-50: rgba(235, 247, 255, 1);\n  --secondaryblue-100: rgba(194, 230, 255, 1);\n  --secondaryblue-200: rgba(165, 218, 255, 1);\n  --secondaryblue-300: rgba(124, 201, 254, 1);\n  --secondaryblue-400: rgba(98, 190, 254, 1);\n  --secondaryblue-500: rgba(59, 174, 254, 1);\n  --secondaryblue-600: rgba(54, 158, 231, 1);\n  --secondaryblue-700: rgba(42, 124, 180, 1);\n  --secondaryblue-800: rgba(32, 96, 140, 1);\n  --secondaryblue-900: rgba(25, 73, 107, 1);\n  --text-50: rgba(230, 230, 237, 1);\n  --text-100: rgba(178, 178, 199, 1);\n  --text-200: rgba(140, 140, 171, 1);\n  --text-300: rgba(88, 88, 133, 1);\n  --text-400: rgba(55, 56, 109, 1);\n  --text-500: rgba(5, 6, 73, 1);\n  --text-600: rgba(5, 5, 66, 1);\n  --text-700: rgba(4, 4, 52, 1);\n  --text-800: rgba(3, 3, 40, 1);\n  --text-900: rgba(2, 3, 31, 1);\n  --neutral-white50: rgba(255, 255, 255, 1);\n  --neutral-white100: rgba(253, 253, 255, 1);\n  --neutral-white200: rgba(253, 253, 255, 1);\n  --neutral-white300: rgba(252, 252, 255, 1);\n  --neutral-white400: rgba(251, 251, 255, 1);\n  --neutral-white500: rgba(240, 240, 255, 1);\n  --neutral-white600: rgba(228, 228, 232, 1);\n  --neutral-white700: rgba(178, 178, 181, 1);\n  --neutral-white800: rgba(138, 138, 140, 1);\n  --neutral-white900: rgba(105, 105, 107, 1);\n  --gray-800: rgba(31, 41, 55, 1);\n  --gray-400: rgba(156, 163, 175, 1);\n  --maestrosecondaryargentinianblue: rgba(61, 173, 254, 1);\n  --gray-700: rgba(55, 65, 81, 1);\n  --white: rgba(255, 255, 255, 1);\n  --gray-100: rgba(242, 244, 247, 1);\n  --h1-font-family: \"Inter-Bold\", Helvetica;\n  --h1-font-weight: 700;\n  --h1-font-size: 64px;\n  --h1-letter-spacing: 0px;\n  --h1-line-height: 72px;\n  --h1-font-style: normal;\n  --h2-font-family: \"Inter-SemiBold\", Helvetica;\n  --h2-font-weight: 600;\n  --h2-font-size: 56px;\n  --h2-letter-spacing: 0px;\n  --h2-line-height: 64px;\n  --h2-font-style: normal;\n  --h3-font-family: \"Inter-SemiBold\", Helvetica;\n  --h3-font-weight: 600;\n  --h3-font-size: 48px;\n  --h3-letter-spacing: 0px;\n  --h3-line-height: 56px;\n  --h3-font-style: normal;\n  --h4-font-family: \"Inter-SemiBold\", Helvetica;\n  --h4-font-weight: 600;\n  --h4-font-size: 40px;\n  --h4-letter-spacing: 0px;\n  --h4-line-height: 48px;\n  --h4-font-style: normal;\n  --h5-font-family: \"Inter-SemiBold\", Helvetica;\n  --h5-font-weight: 600;\n  --h5-font-size: 32px;\n  --h5-letter-spacing: 0px;\n  --h5-line-height: 40px;\n  --h5-font-style: normal;\n  --h6-font-family: \"Inter-SemiBold\", Helvetica;\n  --h6-font-weight: 600;\n  --h6-font-size: 24px;\n  --h6-letter-spacing: 0px;\n  --h6-line-height: 32px;\n  --h6-font-style: normal;\n  --BODY-REGULAR-font-family: \"Inter-Medium\", Helvetica;\n  --BODY-REGULAR-font-weight: 500;\n  --BODY-REGULAR-font-size: 16px;\n  --BODY-REGULAR-letter-spacing: 0px;\n  --BODY-REGULAR-line-height: 24px;\n  --BODY-REGULAR-font-style: normal;\n  --BODY-SMALL-font-family: \"Inter-Regular\", Helvetica;\n  --BODY-SMALL-font-weight: 400;\n  --BODY-SMALL-font-size: 14px;\n  --BODY-SMALL-letter-spacing: 0px;\n  --BODY-SMALL-line-height: 24px;\n  --BODY-SMALL-font-style: normal;\n  --PARAGRAPH-font-family: \"Inter-Regular\", Helvetica;\n  --PARAGRAPH-font-weight: 400;\n  --PARAGRAPH-font-size: 16px;\n  --PARAGRAPH-letter-spacing: 0px;\n  --PARAGRAPH-line-height: 32px;\n  --PARAGRAPH-font-style: normal;\n  --caption-font-family: \"Inter-Regular\", Helvetica;\n  --caption-font-weight: 400;\n  --caption-font-size: 10px;\n  --caption-letter-spacing: 0px;\n  --caption-line-height: 12px;\n  --caption-font-style: normal;\n  --caption-1-font-family: \"Inter-Regular\", Helvetica;\n  --caption-1-font-weight: 400;\n  --caption-1-font-size: 12px;\n  --caption-1-letter-spacing: 0px;\n  --caption-1-line-height: 16px;\n  --caption-1-font-style: normal;\n  --BODY-LARGE-medium-font-family: \"Inter-Medium\", Helvetica;\n  --BODY-LARGE-medium-font-weight: 500;\n  --BODY-LARGE-medium-font-size: 18px;\n  --BODY-LARGE-medium-letter-spacing: 0px;\n  --BODY-LARGE-medium-line-height: 32px;\n  --BODY-LARGE-medium-font-style: normal;\n  --card-shadow-1: 0px 1px 10px 0px rgba(0, 0, 0, 0.08);\n  --product-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.2);\n  --admin-nav-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);\n  --collection-1-colors-text: rgba(94, 113, 141, 1);\n  --collection-1-colors-hover-background: rgba(246, 238, 255, 1);\n  --collection-1-hover-text: rgba(70, 36, 107, 1);\n  --collection-1-color: rgba(255, 255, 255, 1);\n}\n\n.frame {\n  display: inline-flex;\n  align-items: flex-start;\n  position: relative;\n  width: 100%;\n  min-width: 698px;\n  min-height: 521px;\n}\n\n.frame .frame-wrapper {\n  display: inline-flex;\n  height: 521px;\n  align-items: flex-start;\n  gap: 10px;\n  position: relative;\n  flex: 0 0 auto;\n  background-color: #ffffff;\n  border-radius: 20px 0px 0px 20px;\n}\n\n.frame .div {\n  display: inline-flex;\n  flex-direction: column;\n  height: 210px;\n  align-items: flex-start;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame .div-wrapper {\n  display: flex;\n  width: 183px;\n  height: 70px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px;\n  position: relative;\n  background-color: var(--collection-1-color);\n  border-radius: 20px 0px 0px 0px;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-color: var(--neutral-white600);\n}\n\n.frame .text-wrapper {\n  position: relative;\n  width: fit-content;\n  font-family: var(--BODY-REGULAR-font-family);\n  font-weight: var(--BODY-REGULAR-font-weight);\n  color: var(--gray-800);\n  font-size: var(--BODY-REGULAR-font-size);\n  letter-spacing: var(--BODY-REGULAR-letter-spacing);\n  line-height: var(--BODY-REGULAR-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-REGULAR-font-style);\n}\n\n.frame .div-2 {\n  display: flex;\n  width: 183px;\n  height: 70px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px;\n  position: relative;\n  background-color: var(--collection-1-color);\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-color: var(--neutral-white600);\n}\n\n.frame .img {\n  position: relative;\n  width: 24px;\n  height: 24px;\n}\n\n.frame .text-wrapper-2 {\n  position: relative;\n  width: fit-content;\n  font-family: var(--BODY-REGULAR-font-family);\n  font-weight: var(--BODY-REGULAR-font-weight);\n  color: var(--gray-400);\n  font-size: var(--BODY-REGULAR-font-size);\n  letter-spacing: var(--BODY-REGULAR-letter-spacing);\n  line-height: var(--BODY-REGULAR-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-REGULAR-font-style);\n}\n\n.frame .frame-wrapper-2 {\n  display: flex;\n  flex-direction: column;\n  width: 515px;\n  height: 521px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px;\n  position: relative;\n  background-color: var(--collection-1-color);\n  border-radius: 0px 20px 20px 0px;\n  box-shadow: var(--admin-nav-shadow);\n}\n\n.frame .div-3 {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame .div-4 {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 11px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame .div-5 {\n  display: inline-flex;\n  align-items: center;\n  gap: 40px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame .simplipay-logo {\n  position: relative;\n  width: 140px;\n  height: 30px;\n}\n\n.frame .div-6 {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame .div-7 {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame .text-wrapper-3 {\n  position: relative;\n  width: fit-content;\n  margin-top: -1px;\n  font-family: var(--BODY-SMALL-font-family);\n  font-weight: var(--BODY-SMALL-font-weight);\n  color: var(--maestrosecondaryargentinianblue);\n  font-size: var(--BODY-SMALL-font-size);\n  letter-spacing: var(--BODY-SMALL-letter-spacing);\n  line-height: var(--BODY-SMALL-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-SMALL-font-style);\n}\n\n.frame .text-wrapper-4 {\n  position: relative;\n  width: fit-content;\n  font-family: var(--BODY-REGULAR-font-family);\n  font-weight: var(--BODY-REGULAR-font-weight);\n  color: var(--gray-700);\n  font-size: var(--BODY-REGULAR-font-size);\n  letter-spacing: var(--BODY-REGULAR-letter-spacing);\n  line-height: var(--BODY-REGULAR-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-REGULAR-font-style);\n}\n\n.frame .div-wrapper-2 {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 0px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame .p {\n  position: relative;\n  width: fit-content;\n  margin-top: -1px;\n  font-family: var(--BODY-REGULAR-font-family);\n  font-weight: var(--BODY-REGULAR-font-weight);\n  color: var(--gray-800);\n  font-size: var(--BODY-REGULAR-font-size);\n  letter-spacing: var(--BODY-REGULAR-letter-spacing);\n  line-height: var(--BODY-REGULAR-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-REGULAR-font-style);\n}\n\n.frame .div-8 {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 32px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame .div-9 {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 16px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame .text-input-field {\n  display: flex;\n  flex-direction: column;\n  width: 420px;\n  align-items: flex-start;\n  gap: 4px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame .div-10 {\n  position: relative;\n  width: fit-content;\n  margin-top: -1px;\n  font-family: \"Inter\", Helvetica;\n  font-weight: 400;\n  color: transparent;\n  font-size: 14px;\n  letter-spacing: 0;\n  line-height: 24px;\n  white-space: nowrap;\n}\n\n.frame .span {\n  color: #040434;\n  font-family: var(--BODY-SMALL-font-family);\n  font-style: var(--BODY-SMALL-font-style);\n  font-weight: var(--BODY-SMALL-font-weight);\n  letter-spacing: var(--BODY-SMALL-letter-spacing);\n  line-height: var(--BODY-SMALL-line-height);\n  font-size: var(--BODY-SMALL-font-size);\n}\n\n.frame .text-wrapper-5 {\n  font-weight: var(--BODY-REGULAR-font-weight);\n  color: #000000;\n  font-size: var(--BODY-REGULAR-font-size);\n  font-family: var(--BODY-REGULAR-font-family);\n  font-style: var(--BODY-REGULAR-font-style);\n  letter-spacing: var(--BODY-REGULAR-letter-spacing);\n  line-height: var(--BODY-REGULAR-line-height);\n}\n\n.frame .text-wrapper-6 {\n  color: #de1f1f;\n  font-family: var(--BODY-SMALL-font-family);\n  font-style: var(--BODY-SMALL-font-style);\n  font-weight: var(--BODY-SMALL-font-weight);\n  letter-spacing: var(--BODY-SMALL-letter-spacing);\n  line-height: var(--BODY-SMALL-line-height);\n  font-size: var(--BODY-SMALL-font-size);\n}\n\n.frame .frame-wrapper-3 {\n  display: flex;\n  width: 420px;\n  height: 48px;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 10px;\n  position: relative;\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: var(--text-200);\n}\n\n.frame .div-11 {\n  display: inline-flex;\n  align-items: center;\n  gap: 212px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame .text-wrapper-7 {\n  position: relative;\n  width: fit-content;\n  margin-top: -1px;\n  font-family: var(--BODY-SMALL-font-family);\n  font-weight: var(--BODY-SMALL-font-weight);\n  color: var(--text-200);\n  font-size: var(--BODY-SMALL-font-size);\n  letter-spacing: var(--BODY-SMALL-letter-spacing);\n  line-height: var(--BODY-SMALL-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-SMALL-font-style);\n}\n\n.frame .payment-logo {\n  position: relative;\n  width: 34px;\n  height: 24px;\n  background-color: var(--white);\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: var(--gray-100);\n}\n\n.frame .icon {\n  position: relative;\n  width: 23px;\n  height: 13px;\n  top: 5px;\n  left: 6px;\n  background-image: url(https://c.animaapp.com/mGNLCcRC/img/left-1.svg);\n  background-size: 100% 100%;\n}\n\n.frame .overlap-group {\n  position: relative;\n  width: 14px;\n  height: 13px;\n  left: 9px;\n}\n\n.frame .right {\n  position: absolute;\n  width: 12px;\n  height: 13px;\n  top: 0;\n  left: 2px;\n}\n\n.frame .middle {\n  position: absolute;\n  width: 5px;\n  height: 10px;\n  top: 2px;\n  left: 0;\n}\n\n.frame .div-12 {\n  display: inline-flex;\n  align-items: flex-start;\n  gap: 20px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame .text-input-field-2 {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  align-items: flex-start;\n  gap: 4px;\n  position: relative;\n}\n\n.frame .div-wrapper-3 {\n  display: flex;\n  width: 200px;\n  height: 48px;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 10px;\n  position: relative;\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: var(--text-200);\n}\n\n.frame .long-button {\n  display: flex;\n  width: 420px;\n  height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px;\n  position: relative;\n  background-color: var(--primarypurple-900);\n  border-radius: 8px;\n}\n\n.frame .next {\n  position: relative;\n  width: fit-content;\n  margin-top: -3px;\n  margin-bottom: -1px;\n  font-family: var(--BODY-LARGE-medium-font-family);\n  font-weight: var(--BODY-LARGE-medium-font-weight);\n  color: var(--neutral-white50);\n  font-size: var(--BODY-LARGE-medium-font-size);\n  letter-spacing: var(--BODY-LARGE-medium-letter-spacing);\n  line-height: var(--BODY-LARGE-medium-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-LARGE-medium-font-style);\n}\n\n.frame .secured-by-simplipay {\n  position: relative;\n  width: fit-content;\n  margin-top: -1px;\n  font-family: \"Inter\", Helvetica;\n  font-weight: 400;\n  color: #000000;\n  font-size: 16px;\n  letter-spacing: 0;\n  line-height: 16px;\n}\n\n.frame .text-wrapper-8 {\n  line-height: var(--PARAGRAPH-line-height);\n  font-family: var(--PARAGRAPH-font-family);\n  font-style: var(--PARAGRAPH-font-style);\n  font-weight: var(--PARAGRAPH-font-weight);\n  letter-spacing: var(--PARAGRAPH-letter-spacing);\n  font-size: var(--PARAGRAPH-font-size);\n}\n\n.frame .text-wrapper-9 {\n  font-weight: var(--BODY-REGULAR-font-weight);\n  line-height: var(--BODY-REGULAR-line-height);\n  font-family: var(--BODY-REGULAR-font-family);\n  font-style: var(--BODY-REGULAR-font-style);\n  letter-spacing: var(--BODY-REGULAR-letter-spacing);\n  font-size: var(--BODY-REGULAR-font-size);\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5); /* Adjust the alpha value for the desired level of transparency */\n  backdrop-filter: blur(5px); /* Adjust the blur amount as needed */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999; /* Ensure the overlay is on top of other content */\n}\n\n.overlay .modal {\n  background: none; /* Make the modal background transparent */\n  box-shadow: none; /* Remove the modal box shadow */\n}\n\n\n  " }} />
        <div className="frame">
          <div className="frame-wrapper">
            <div className="div">
              <div className="div-wrapper"><div className="text-wrapper">PAY WITH</div></div>
              <div className="div-2">
                <img className="img" src="https://c.animaapp.com/mGNLCcRC/img/icon---24-px---browsers-.svg" />
                <div className="text-wrapper">Card</div>
              </div>
              <div className="div-2">
                <img className="img" src="https://c.animaapp.com/mGNLCcRC/img/icon---24-px---money-.svg" />
                <div className="text-wrapper-2">Bank</div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper-2">
            <div className="div-3">
              <div className="div-4">
                <div className="div-5">
                  <img className="simplipay-logo" src="https://c.animaapp.com/mGNLCcRC/img/simplipay-logo.svg" />
                </div>
                <div className="div-6">
                  <div className="div-7"><div className="text-wrapper-3">harrymonte@gmail.com</div></div>
                  <div className="text-wrapper-4">Pay NGN 1000</div>
                </div>
                <div className="div-wrapper-2"><p className="p">Provide card details to make payment</p></div>
                <div className="div-8">
                  <div className="div-9">
                    <div className="text-input-field">
                      <p className="div-10">
                        <span className="span">Card Number</span>
                        <span className="text-wrapper-5">&nbsp;</span>
                        <span className="text-wrapper-6">*</span>
                      </p>
                      <div className="frame-wrapper-3">
                        <div className="div-11">
                          <div className="text-wrapper-7">0000 0000 0000 0000</div>
                          <div className="payment-logo">
                            <div className="icon">
                              <div className="overlap-group">
                                <img className="right" src="https://c.animaapp.com/mGNLCcRC/img/right.svg" />
                                <img className="middle" src="https://c.animaapp.com/mGNLCcRC/img/middle.svg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-12">
                      <div className="text-input-field-2">
                        <p className="div-10">
                          <span className="span">Expiry Date</span>
                          <span className="text-wrapper-5">&nbsp;</span>
                          <span className="text-wrapper-6">*</span>
                        </p>
                        <div className="div-wrapper-3"><div className="text-wrapper-7">MM / YY</div></div>
                      </div>
                      <div className="text-input-field-2">
                        <p className="div-10">
                          <span className="span">CCV</span>
                          <span className="text-wrapper-5">&nbsp;</span>
                          <span className="text-wrapper-6">*</span>
                        </p>
                        <div className="div-wrapper-3"><div className="text-wrapper-7">123</div></div>
                      </div>
                    </div>
                  </div>
                  <div className="long-button"><div className="next">Pay NGN 1000</div></div>
                </div>
              </div>
              <div className="div-7">
                <img className="img" src="https://c.animaapp.com/mGNLCcRC/img/icon---24-px---shieldcheck--1.svg" />
                <p className="secured-by-simplipay">
                  <span className="text-wrapper-8">Secured by</span> <span className="text-wrapper-9"> Simplipay</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
             )}

             {step === 2 && (
          <>
              <div className="overlay">
            <div>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="globals.css" />
        <link rel="stylesheet" href="styleguide.css" />
        <link rel="stylesheet" href="style.css" />
        <style dangerouslySetInnerHTML={{__html: "\n\n    \n\n    :root {\n  --primarypurple-50: rgba(246, 238, 255, 1);\n  --primarypurple-100: rgba(227, 202, 255, 1);\n  --primarypurple-200: rgba(214, 177, 255, 1);\n  --primarypurple-300: rgba(195, 141, 255, 1);\n  --primarypurple-400: rgba(184, 119, 255, 1);\n  --primarypurple-500: rgba(166, 85, 255, 1);\n  --primarypurple-600: rgba(151, 77, 232, 1);\n  --primarypurple-700: rgba(118, 60, 181, 1);\n  --primarypurple-800: rgba(91, 47, 140, 1);\n  --primarypurple-900: rgba(70, 36, 107, 1);\n  --secondaryblue-50: rgba(235, 247, 255, 1);\n  --secondaryblue-100: rgba(194, 230, 255, 1);\n  --secondaryblue-200: rgba(165, 218, 255, 1);\n  --secondaryblue-300: rgba(124, 201, 254, 1);\n  --secondaryblue-400: rgba(98, 190, 254, 1);\n  --secondaryblue-500: rgba(59, 174, 254, 1);\n  --secondaryblue-600: rgba(54, 158, 231, 1);\n  --secondaryblue-700: rgba(42, 124, 180, 1);\n  --secondaryblue-800: rgba(32, 96, 140, 1);\n  --secondaryblue-900: rgba(25, 73, 107, 1);\n  --text-50: rgba(230, 230, 237, 1);\n  --text-100: rgba(178, 178, 199, 1);\n  --text-200: rgba(140, 140, 171, 1);\n  --text-300: rgba(88, 88, 133, 1);\n  --text-400: rgba(55, 56, 109, 1);\n  --text-500: rgba(5, 6, 73, 1);\n  --text-600: rgba(5, 5, 66, 1);\n  --text-700: rgba(4, 4, 52, 1);\n  --text-800: rgba(3, 3, 40, 1);\n  --text-900: rgba(2, 3, 31, 1);\n  --neutral-white50: rgba(255, 255, 255, 1);\n  --neutral-white100: rgba(253, 253, 255, 1);\n  --neutral-white200: rgba(253, 253, 255, 1);\n  --neutral-white300: rgba(252, 252, 255, 1);\n  --neutral-white400: rgba(251, 251, 255, 1);\n  --neutral-white500: rgba(240, 240, 255, 1);\n  --neutral-white600: rgba(228, 228, 232, 1);\n  --neutral-white700: rgba(178, 178, 181, 1);\n  --neutral-white800: rgba(138, 138, 140, 1);\n  --neutral-white900: rgba(105, 105, 107, 1);\n  --gray-400: rgba(156, 163, 175, 1);\n  --red-800: rgba(153, 27, 27, 1);\n  --red-700: rgba(185, 28, 28, 1);\n  --h1-font-family: \"Inter-Bold\", Helvetica;\n  --h1-font-weight: 700;\n  --h1-font-size: 64px;\n  --h1-letter-spacing: 0px;\n  --h1-line-height: 72px;\n  --h1-font-style: normal;\n  --h2-font-family: \"Inter-SemiBold\", Helvetica;\n  --h2-font-weight: 600;\n  --h2-font-size: 56px;\n  --h2-letter-spacing: 0px;\n  --h2-line-height: 64px;\n  --h2-font-style: normal;\n  --h3-font-family: \"Inter-SemiBold\", Helvetica;\n  --h3-font-weight: 600;\n  --h3-font-size: 48px;\n  --h3-letter-spacing: 0px;\n  --h3-line-height: 56px;\n  --h3-font-style: normal;\n  --h4-font-family: \"Inter-SemiBold\", Helvetica;\n  --h4-font-weight: 600;\n  --h4-font-size: 40px;\n  --h4-letter-spacing: 0px;\n  --h4-line-height: 48px;\n  --h4-font-style: normal;\n  --h5-font-family: \"Inter-SemiBold\", Helvetica;\n  --h5-font-weight: 600;\n  --h5-font-size: 32px;\n  --h5-letter-spacing: 0px;\n  --h5-line-height: 40px;\n  --h5-font-style: normal;\n  --h6-font-family: \"Inter-SemiBold\", Helvetica;\n  --h6-font-weight: 600;\n  --h6-font-size: 24px;\n  --h6-letter-spacing: 0px;\n  --h6-line-height: 32px;\n  --h6-font-style: normal;\n  --BODY-REGULAR-font-family: \"Inter-Medium\", Helvetica;\n  --BODY-REGULAR-font-weight: 500;\n  --BODY-REGULAR-font-size: 16px;\n  --BODY-REGULAR-letter-spacing: 0px;\n  --BODY-REGULAR-line-height: 24px;\n  --BODY-REGULAR-font-style: normal;\n  --BODY-SMALL-font-family: \"Inter-Regular\", Helvetica;\n  --BODY-SMALL-font-weight: 400;\n  --BODY-SMALL-font-size: 14px;\n  --BODY-SMALL-letter-spacing: 0px;\n  --BODY-SMALL-line-height: 24px;\n  --BODY-SMALL-font-style: normal;\n  --PARAGRAPH-font-family: \"Inter-Regular\", Helvetica;\n  --PARAGRAPH-font-weight: 400;\n  --PARAGRAPH-font-size: 16px;\n  --PARAGRAPH-letter-spacing: 0px;\n  --PARAGRAPH-line-height: 32px;\n  --PARAGRAPH-font-style: normal;\n  --caption-font-family: \"Inter-Regular\", Helvetica;\n  --caption-font-weight: 400;\n  --caption-font-size: 10px;\n  --caption-letter-spacing: 0px;\n  --caption-line-height: 12px;\n  --caption-font-style: normal;\n  --caption-1-font-family: \"Inter-Regular\", Helvetica;\n  --caption-1-font-weight: 400;\n  --caption-1-font-size: 12px;\n  --caption-1-letter-spacing: 0px;\n  --caption-1-line-height: 16px;\n  --caption-1-font-style: normal;\n  --BODY-LARGE-medium-font-family: \"Inter-Medium\", Helvetica;\n  --BODY-LARGE-medium-font-weight: 500;\n  --BODY-LARGE-medium-font-size: 18px;\n  --BODY-LARGE-medium-letter-spacing: 0px;\n  --BODY-LARGE-medium-line-height: 32px;\n  --BODY-LARGE-medium-font-style: normal;\n  --card-shadow-1: 0px 1px 10px 0px rgba(0, 0, 0, 0.08);\n  --product-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.2);\n  --admin-nav-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);\n  --collection-1-colors-text: rgba(94, 113, 141, 1);\n  --collection-1-colors-hover-background: rgba(246, 238, 255, 1);\n  --collection-1-hover-text: rgba(70, 36, 107, 1);\n  --collection-1-color: rgba(255, 255, 255, 1);\n}\n\n    .frame-Pin {\n  display: flex;\n  flex-direction: column;\n  height: 521px;\n  align-items: center;\n  justify-content: center;\n  gap: 40px;\n  padding: 40px;\n  position: relative;\n  background-color: #ffffff;\n  box-shadow: var(--admin-nav-shadow);\n}\n\n.frame-Pin .div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  align-self: stretch;\n  width: 100%;\n  flex: 0 0 auto;\n  margin-top: -5.5px;\n}\n\n.frame-Pin .img {\n  position: relative;\n  width: 24px;\n  height: 24px;\n}\n\n.frame-Pin .text-wrapper {\n  position: relative;\n  width: fit-content;\n  margin-top: -1px;\n  font-family: var(--BODY-LARGE-medium-font-family);\n  font-weight: var(--BODY-LARGE-medium-font-weight);\n  color: var(--text-700);\n  font-size: var(--BODY-LARGE-medium-font-size);\n  letter-spacing: var(--BODY-LARGE-medium-letter-spacing);\n  line-height: var(--BODY-LARGE-medium-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-LARGE-medium-font-style);\n}\n\n.frame-Pin .please-enter-your {\n  position: relative;\n  align-self: stretch;\n  font-family: var(--BODY-REGULAR-font-family);\n  font-weight: var(--BODY-REGULAR-font-weight);\n  color: #000000;\n  font-size: var(--BODY-REGULAR-font-size);\n  text-align: center;\n  letter-spacing: var(--BODY-REGULAR-letter-spacing);\n  line-height: var(--BODY-REGULAR-line-height);\n  font-style: var(--BODY-REGULAR-font-style);\n}\n\n.frame-Pin .new-text-input {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame-Pin .OTP {\n  position: relative;\n  width: fit-content;\n  margin-top: -1px;\n  font-family: var(--BODY-SMALL-font-family);\n  font-weight: var(--BODY-SMALL-font-weight);\n  color: var(--text-900);\n  font-size: var(--BODY-SMALL-font-size);\n  letter-spacing: var(--BODY-SMALL-letter-spacing);\n  line-height: var(--BODY-SMALL-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-SMALL-font-style);\n}\n\n.frame-Pin .div-2 {\n  display: flex;\n  width: 300px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame-Pin .div-wrapper {\n  display: flex;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 12px 10px;\n  position: relative;\n  flex: 1;\n  flex-grow: 1;\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: var(--text-200);\n}\n\n.frame-Pin .text-wrapper-2 {\n  position: relative;\n  width: fit-content;\n  margin-top: -5px;\n  margin-bottom: -3px;\n  font-family: var(--BODY-SMALL-font-family);\n  font-weight: var(--BODY-SMALL-font-weight);\n  color: var(--text-700);\n  font-size: var(--BODY-SMALL-font-size);\n  letter-spacing: var(--BODY-SMALL-letter-spacing);\n  line-height: var(--BODY-SMALL-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-SMALL-font-style);\n}\n\n.frame-Pin .long-button {\n  all: unset;\n  box-sizing: border-box;\n  display: flex;\n  width: 304px;\n  height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px;\n  position: relative;\n  background-color: var(--primarypurple-900);\n  border-radius: 8px;\n}\n\n.frame-Pin .next {\n  position: relative;\n  width: fit-content;\n  margin-top: -3px;\n  margin-bottom: -1px;\n  font-family: var(--BODY-LARGE-medium-font-family);\n  font-weight: var(--BODY-LARGE-medium-font-weight);\n  color: var(--neutral-white50);\n  font-size: var(--BODY-LARGE-medium-font-size);\n  letter-spacing: var(--BODY-LARGE-medium-letter-spacing);\n  line-height: var(--BODY-LARGE-medium-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-LARGE-medium-font-style);\n}\n\n.frame-Pin .div-3 {\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame-Pin .div-4 {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  position: relative;\n  flex: 0 0 auto;\n  margin-bottom: -5.5px;\n}\n\n.frame-Pin .secured-by-simplipay {\n  position: relative;\n  width: fit-content;\n  margin-top: -1px;\n  font-family: \"Inter\", Helvetica;\n  font-weight: 400;\n  color: #000000;\n  font-size: 16px;\n  letter-spacing: 0;\n  line-height: 16px;\n}\n\n.frame-Pin .span {\n  line-height: var(--PARAGRAPH-line-height);\n  font-family: var(--PARAGRAPH-font-family);\n  font-style: var(--PARAGRAPH-font-style);\n  font-weight: var(--PARAGRAPH-font-weight);\n  letter-spacing: var(--PARAGRAPH-letter-spacing);\n  font-size: var(--PARAGRAPH-font-size);\n}\n\n.frame-Pin .text-wrapper-3 {\n  font-weight: var(--BODY-REGULAR-font-weight);\n  line-height: var(--BODY-REGULAR-line-height);\n  font-family: var(--BODY-REGULAR-font-family);\n  font-style: var(--BODY-REGULAR-font-style);\n  letter-spacing: var(--BODY-REGULAR-letter-spacing);\n  font-size: var(--BODY-REGULAR-font-size);\n}\n\n  " }} />
        <div className="frame-Pin">
          <div className="div">
            <img className="img" src="https://c.animaapp.com/ZvS8nREz/img/icon---24-px---arrowcircleleft-@2x.png" />
            <div className="text-wrapper">Transaction PIN</div>
            <img className="img" src="https://c.animaapp.com/ZvS8nREz/img/icon---24-px---xsquare-.svg" />
          </div>
          <p className="please-enter-your">Please enter your 4-digits transaction<br />pin below.</p>
          <div className="new-text-input">
            <div className="OTP">PIN</div>
            <div className="div-2">
              <div className="div-wrapper"><div className="text-wrapper-2">2</div></div>
              <div className="div-wrapper"><div className="text-wrapper-2">4</div></div>
              <div className="div-wrapper"><div className="text-wrapper-2">5</div></div>
              <div className="div-wrapper"><div className="text-wrapper-2">0</div></div>
            </div>
          </div>
          <button className="long-button"><div className="next" style={{cursor: "pointer"}} onClick={proceed}>Confirm</div></button>
          <div className="div-3" />
          <div className="div-4">
            <img className="img" src="https://c.animaapp.com/ZvS8nREz/img/icon---24-px---shieldcheck--1.svg" />
            <p className="secured-by-simplipay">
              <span className="span">Secured by</span> <span className="text-wrapper-3"> Simplipay</span>
            </p>
          </div>
        </div>
      </div>
              </div>
              </>
            )}

        {step === 3 && (
               <div>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="globals.css" />
        <link rel="stylesheet" href="styleguide.css" />
        <link rel="stylesheet" href="style.css" />
        <style dangerouslySetInnerHTML={{__html: "\n\n    @import url(\"https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css\");\n@import url(\"https://fonts.googleapis.com/css?family=Inter:500,400\");\n* {\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  margin: 0px;\n  height: 100%;\n}\n/* a blue color as a generic focus style */\nbutton:focus-visible {\n  outline: 2px solid #4a90e2 !important;\n  outline: -webkit-focus-ring-color auto 5px !important;\n}\na {\n  text-decoration: none;\n}\n\n\n    :root {\n  --primarypurple-50: rgba(246, 238, 255, 1);\n  --primarypurple-100: rgba(227, 202, 255, 1);\n  --primarypurple-200: rgba(214, 177, 255, 1);\n  --primarypurple-300: rgba(195, 141, 255, 1);\n  --primarypurple-400: rgba(184, 119, 255, 1);\n  --primarypurple-500: rgba(166, 85, 255, 1);\n  --primarypurple-600: rgba(151, 77, 232, 1);\n  --primarypurple-700: rgba(118, 60, 181, 1);\n  --primarypurple-800: rgba(91, 47, 140, 1);\n  --primarypurple-900: rgba(70, 36, 107, 1);\n  --secondaryblue-50: rgba(235, 247, 255, 1);\n  --secondaryblue-100: rgba(194, 230, 255, 1);\n  --secondaryblue-200: rgba(165, 218, 255, 1);\n  --secondaryblue-300: rgba(124, 201, 254, 1);\n  --secondaryblue-400: rgba(98, 190, 254, 1);\n  --secondaryblue-500: rgba(59, 174, 254, 1);\n  --secondaryblue-600: rgba(54, 158, 231, 1);\n  --secondaryblue-700: rgba(42, 124, 180, 1);\n  --secondaryblue-800: rgba(32, 96, 140, 1);\n  --secondaryblue-900: rgba(25, 73, 107, 1);\n  --text-50: rgba(230, 230, 237, 1);\n  --text-100: rgba(178, 178, 199, 1);\n  --text-200: rgba(140, 140, 171, 1);\n  --text-300: rgba(88, 88, 133, 1);\n  --text-400: rgba(55, 56, 109, 1);\n  --text-500: rgba(5, 6, 73, 1);\n  --text-600: rgba(5, 5, 66, 1);\n  --text-700: rgba(4, 4, 52, 1);\n  --text-800: rgba(3, 3, 40, 1);\n  --text-900: rgba(2, 3, 31, 1);\n  --neutral-white50: rgba(255, 255, 255, 1);\n  --neutral-white100: rgba(253, 253, 255, 1);\n  --neutral-white200: rgba(253, 253, 255, 1);\n  --neutral-white300: rgba(252, 252, 255, 1);\n  --neutral-white400: rgba(251, 251, 255, 1);\n  --neutral-white500: rgba(240, 240, 255, 1);\n  --neutral-white600: rgba(228, 228, 232, 1);\n  --neutral-white700: rgba(178, 178, 181, 1);\n  --neutral-white800: rgba(138, 138, 140, 1);\n  --neutral-white900: rgba(105, 105, 107, 1);\n  --gray-400: rgba(156, 163, 175, 1);\n  --red-800: rgba(153, 27, 27, 1);\n  --red-700: rgba(185, 28, 28, 1);\n  --h1-font-family: \"Inter-Bold\", Helvetica;\n  --h1-font-weight: 700;\n  --h1-font-size: 64px;\n  --h1-letter-spacing: 0px;\n  --h1-line-height: 72px;\n  --h1-font-style: normal;\n  --h2-font-family: \"Inter-SemiBold\", Helvetica;\n  --h2-font-weight: 600;\n  --h2-font-size: 56px;\n  --h2-letter-spacing: 0px;\n  --h2-line-height: 64px;\n  --h2-font-style: normal;\n  --h3-font-family: \"Inter-SemiBold\", Helvetica;\n  --h3-font-weight: 600;\n  --h3-font-size: 48px;\n  --h3-letter-spacing: 0px;\n  --h3-line-height: 56px;\n  --h3-font-style: normal;\n  --h4-font-family: \"Inter-SemiBold\", Helvetica;\n  --h4-font-weight: 600;\n  --h4-font-size: 40px;\n  --h4-letter-spacing: 0px;\n  --h4-line-height: 48px;\n  --h4-font-style: normal;\n  --h5-font-family: \"Inter-SemiBold\", Helvetica;\n  --h5-font-weight: 600;\n  --h5-font-size: 32px;\n  --h5-letter-spacing: 0px;\n  --h5-line-height: 40px;\n  --h5-font-style: normal;\n  --h6-font-family: \"Inter-SemiBold\", Helvetica;\n  --h6-font-weight: 600;\n  --h6-font-size: 24px;\n  --h6-letter-spacing: 0px;\n  --h6-line-height: 32px;\n  --h6-font-style: normal;\n  --BODY-REGULAR-font-family: \"Inter-Medium\", Helvetica;\n  --BODY-REGULAR-font-weight: 500;\n  --BODY-REGULAR-font-size: 16px;\n  --BODY-REGULAR-letter-spacing: 0px;\n  --BODY-REGULAR-line-height: 24px;\n  --BODY-REGULAR-font-style: normal;\n  --BODY-SMALL-font-family: \"Inter-Regular\", Helvetica;\n  --BODY-SMALL-font-weight: 400;\n  --BODY-SMALL-font-size: 14px;\n  --BODY-SMALL-letter-spacing: 0px;\n  --BODY-SMALL-line-height: 24px;\n  --BODY-SMALL-font-style: normal;\n  --PARAGRAPH-font-family: \"Inter-Regular\", Helvetica;\n  --PARAGRAPH-font-weight: 400;\n  --PARAGRAPH-font-size: 16px;\n  --PARAGRAPH-letter-spacing: 0px;\n  --PARAGRAPH-line-height: 32px;\n  --PARAGRAPH-font-style: normal;\n  --caption-font-family: \"Inter-Regular\", Helvetica;\n  --caption-font-weight: 400;\n  --caption-font-size: 10px;\n  --caption-letter-spacing: 0px;\n  --caption-line-height: 12px;\n  --caption-font-style: normal;\n  --caption-1-font-family: \"Inter-Regular\", Helvetica;\n  --caption-1-font-weight: 400;\n  --caption-1-font-size: 12px;\n  --caption-1-letter-spacing: 0px;\n  --caption-1-line-height: 16px;\n  --caption-1-font-style: normal;\n  --BODY-LARGE-medium-font-family: \"Inter-Medium\", Helvetica;\n  --BODY-LARGE-medium-font-weight: 500;\n  --BODY-LARGE-medium-font-size: 18px;\n  --BODY-LARGE-medium-letter-spacing: 0px;\n  --BODY-LARGE-medium-line-height: 32px;\n  --BODY-LARGE-medium-font-style: normal;\n  --card-shadow-1: 0px 1px 10px 0px rgba(0, 0, 0, 0.08);\n  --product-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.2);\n  --admin-nav-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);\n  --collection-1-colors-text: rgba(94, 113, 141, 1);\n  --collection-1-colors-hover-background: rgba(246, 238, 255, 1);\n  --collection-1-hover-text: rgba(70, 36, 107, 1);\n  --collection-1-color: rgba(255, 255, 255, 1);\n}\n\n    .frame-OTP {\n  display: flex;\n  flex-direction: column;\n  height: 521px;\n  align-items: center;\n  justify-content: center;\n  gap: 40px;\n  padding: 40px;\n  position: relative;\n  background-color: #ffffff;\n  box-shadow: var(--admin-nav-shadow);\n}\n\n.frame-OTP .div {\n  display: flex;\n  justify-content: space-between;\n  align-self: stretch;\n  width: 100%;\n  flex: 0 0 auto;\n  margin-top: -5.5px;\n  align-items: center;\n  position: relative;\n}\n\n.frame-OTP .icon-px {\n  position: relative;\n  width: 24px;\n  height: 24px;\n}\n\n.frame-OTP .text-wrapper {\n  position: relative;\n  width: fit-content;\n  margin-top: -1px;\n  font-family: var(--BODY-LARGE-medium-font-family);\n  font-weight: var(--BODY-LARGE-medium-font-weight);\n  color: var(--text-700);\n  font-size: var(--BODY-LARGE-medium-font-size);\n  letter-spacing: var(--BODY-LARGE-medium-letter-spacing);\n  line-height: var(--BODY-LARGE-medium-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-LARGE-medium-font-style);\n}\n\n.frame-OTP .img {\n  position: relative;\n  width: 20px;\n  height: 20px;\n}\n\n.frame-OTP .an-email-containing {\n  position: relative;\n  align-self: stretch;\n  font-family: var(--BODY-REGULAR-font-family);\n  font-weight: var(--BODY-REGULAR-font-weight);\n  color: transparent;\n  font-size: var(--BODY-REGULAR-font-size);\n  text-align: center;\n  letter-spacing: var(--BODY-REGULAR-letter-spacing);\n  line-height: var(--BODY-REGULAR-line-height);\n  font-style: var(--BODY-REGULAR-font-style);\n}\n\n.frame-OTP .span {\n  color: #000000;\n  font-family: var(--BODY-REGULAR-font-family);\n  font-style: var(--BODY-REGULAR-font-style);\n  font-weight: var(--BODY-REGULAR-font-weight);\n  letter-spacing: var(--BODY-REGULAR-letter-spacing);\n  line-height: var(--BODY-REGULAR-line-height);\n  font-size: var(--BODY-REGULAR-font-size);\n}\n\n.frame-OTP .text-wrapper-2 {\n  color: #3dadfe;\n  font-family: var(--BODY-REGULAR-font-family);\n  font-style: var(--BODY-REGULAR-font-style);\n  font-weight: var(--BODY-REGULAR-font-weight);\n  letter-spacing: var(--BODY-REGULAR-letter-spacing);\n  line-height: var(--BODY-REGULAR-line-height);\n  font-size: var(--BODY-REGULAR-font-size);\n}\n\n.frame-OTP .new-text-input {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame-OTP .text-wrapper-3 {\n  position: relative;\n  width: fit-content;\n  margin-top: -1px;\n  font-family: var(--BODY-SMALL-font-family);\n  font-weight: var(--BODY-SMALL-font-weight);\n  color: var(--text-900);\n  font-size: var(--BODY-SMALL-font-size);\n  letter-spacing: var(--BODY-SMALL-letter-spacing);\n  line-height: var(--BODY-SMALL-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-SMALL-font-style);\n}\n\n.frame-OTP .div-2 {\n  display: flex;\n  width: 300px;\n  justify-content: center;\n  gap: 10px;\n  flex: 0 0 auto;\n  align-items: center;\n  position: relative;\n}\n\n.frame-OTP .div-wrapper {\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  gap: 10px;\n  padding: 12px 10px;\n  flex: 1;\n  flex-grow: 1;\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: var(--text-200);\n  align-items: center;\n  position: relative;\n}\n\n.frame-OTP .text-wrapper-4 {\n  position: relative;\n  width: fit-content;\n  margin-top: -5px;\n  margin-bottom: -3px;\n  font-family: var(--BODY-SMALL-font-family);\n  font-weight: var(--BODY-SMALL-font-weight);\n  color: var(--text-700);\n  font-size: var(--BODY-SMALL-font-size);\n  letter-spacing: var(--BODY-SMALL-letter-spacing);\n  line-height: var(--BODY-SMALL-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-SMALL-font-style);\n}\n\n.frame-OTP .long-button {\n  all: unset;\n  box-sizing: border-box;\n  display: flex;\n  width: 304px;\n  height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px;\n  position: relative;\n  background-color: var(--primarypurple-900);\n  border-radius: 8px;\n}\n\n.frame-OTP .next {\n  position: relative;\n  width: fit-content;\n  margin-top: -3px;\n  margin-bottom: -1px;\n  font-family: var(--BODY-LARGE-medium-font-family);\n  font-weight: var(--BODY-LARGE-medium-font-weight);\n  color: var(--neutral-white50);\n  font-size: var(--BODY-LARGE-medium-font-size);\n  letter-spacing: var(--BODY-LARGE-medium-letter-spacing);\n  line-height: var(--BODY-LARGE-medium-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-LARGE-medium-font-style);\n}\n\n.frame-OTP .didn-t-get-email {\n  position: relative;\n  width: fit-content;\n  font-family: var(--BODY-SMALL-font-family);\n  font-weight: var(--BODY-SMALL-font-weight);\n  color: transparent;\n  font-size: var(--BODY-SMALL-font-size);\n  letter-spacing: var(--BODY-SMALL-letter-spacing);\n  line-height: var(--BODY-SMALL-line-height);\n  white-space: nowrap;\n  font-style: var(--BODY-SMALL-font-style);\n}\n\n.frame-OTP .text-wrapper-5 {\n  color: #050542;\n  font-family: var(--BODY-SMALL-font-family);\n  font-style: var(--BODY-SMALL-font-style);\n  font-weight: var(--BODY-SMALL-font-weight);\n  letter-spacing: var(--BODY-SMALL-letter-spacing);\n  line-height: var(--BODY-SMALL-line-height);\n  font-size: var(--BODY-SMALL-font-size);\n}\n\n.frame-OTP .text-wrapper-6 {\n  color: #000000;\n  font-family: var(--BODY-SMALL-font-family);\n  font-style: var(--BODY-SMALL-font-style);\n  font-weight: var(--BODY-SMALL-font-weight);\n  letter-spacing: var(--BODY-SMALL-letter-spacing);\n  line-height: var(--BODY-SMALL-line-height);\n  font-size: var(--BODY-SMALL-font-size);\n}\n\n.frame-OTP .text-wrapper-7 {\n  color: #3baefe;\n  font-family: var(--BODY-SMALL-font-family);\n  font-style: var(--BODY-SMALL-font-style);\n  font-weight: var(--BODY-SMALL-font-weight);\n  letter-spacing: var(--BODY-SMALL-letter-spacing);\n  line-height: var(--BODY-SMALL-line-height);\n  font-size: var(--BODY-SMALL-font-size);\n}\n\n.frame-OTP .div-3 {\n  display: inline-flex;\n  gap: 10px;\n  flex: 0 0 auto;\n  margin-bottom: -5.5px;\n  align-items: center;\n  position: relative;\n}\n\n.frame-OTP .secured-by-simplipay {\n  position: relative;\n  width: fit-content;\n  margin-top: -1px;\n  font-family: \"Inter\", Helvetica;\n  font-weight: 400;\n  color: #000000;\n  font-size: 16px;\n  letter-spacing: 0;\n  line-height: 16px;\n}\n\n.frame-OTP .text-wrapper-8 {\n  line-height: var(--PARAGRAPH-line-height);\n  font-family: var(--PARAGRAPH-font-family);\n  font-style: var(--PARAGRAPH-font-style);\n  font-weight: var(--PARAGRAPH-font-weight);\n  letter-spacing: var(--PARAGRAPH-letter-spacing);\n  font-size: var(--PARAGRAPH-font-size);\n}\n\n.frame-OTP .text-wrapper-9 {\n  font-weight: var(--BODY-REGULAR-font-weight);\n  line-height: var(--BODY-REGULAR-line-height);\n  font-family: var(--BODY-REGULAR-font-family);\n  font-style: var(--BODY-REGULAR-font-style);\n  letter-spacing: var(--BODY-REGULAR-letter-spacing);\n  font-size: var(--BODY-REGULAR-font-size);\n}\n\n  " }} />
         <div className="overlay">
            <div className="frame-OTP">
          <div className="div">
            <img className="icon-px" src="https://c.animaapp.com/LHJ7KIeN/img/icon---24-px---arrowcircleleft--1.svg" />
            <div className="text-wrapper">OTP</div>
            <img className="img" src="https://c.animaapp.com/LHJ7KIeN/img/icon---20-px---arrowcircleleft--1@2x.png" />
          </div>
          <p className="an-email-containing">
            <span className="span">An email containing a 6-digit code was sent to </span>
            <span className="text-wrapper-2">phone number.</span>
            <span className="span"> Enter the code below.</span>
          </p>
          <div className="new-text-input">
            <div className="text-wrapper-3">OTP</div>
            <div className="div-2">
              <div className="div-wrapper"><div className="text-wrapper-4">2</div></div>
              <div className="div-wrapper"><div className="text-wrapper-4">4</div></div>
              <div className="div-wrapper"><div className="text-wrapper-4">5</div></div>
              <div className="div-wrapper"><div className="text-wrapper-4">0</div></div>
              <div className="div-wrapper"><div className="text-wrapper-4">3</div></div>
              <div className="div-wrapper"><div className="text-wrapper-4">9</div></div>
            </div>
          </div>
          <button className="long-button"><div className="next" style={{cursor: 'poniter'}} onClick={proceed}>Proceed</div></button>
          <p className="didn-t-get-email">
            <span className="text-wrapper-5">Didn’t get email?</span>
            <span className="text-wrapper-6">&nbsp;</span>
            <span className="text-wrapper-7">Resend</span>
          </p>
          <div className="div-3">
            <img className="icon-px" src="https://c.animaapp.com/LHJ7KIeN/img/icon---24-px---shieldcheck--1.svg" />
            <p className="secured-by-simplipay">
              <span className="text-wrapper-8">Secured by</span> <span className="text-wrapper-9"> Simplipay</span>
            </p>
          </div>
        </div>
            </div>
            </div>
        )}


        {step == 4 && (

      <div>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="globals.css" />
        <link rel="stylesheet" href="styleguide.css" />
        <link rel="stylesheet" href="style.css" />
            <style dangerouslySetInnerHTML={{ __html: "\n\n    @import url(\"https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css\");\n@import url(\"https://fonts.googleapis.com/css?family=Inter:400\");\n* {\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  margin: 0px;\n  height: 100%;\n}\n/* a blue color as a generic focus style */\nbutton:focus-visible {\n  outline: 2px solid #4a90e2 !important;\n  outline: -webkit-focus-ring-color auto 5px !important;\n}\na {\n  text-decoration: none;\n}\n\n:root {\n  --primarypurple-50: rgba(246, 238, 255, 1);\n  --primarypurple-100: rgba(227, 202, 255, 1);\n  --primarypurple-200: rgba(214, 177, 255, 1);\n  --primarypurple-300: rgba(195, 141, 255, 1);\n  --primarypurple-400: rgba(184, 119, 255, 1);\n  --primarypurple-500: rgba(166, 85, 255, 1);\n  --primarypurple-600: rgba(151, 77, 232, 1);\n  --primarypurple-700: rgba(118, 60, 181, 1);\n  --primarypurple-800: rgba(91, 47, 140, 1);\n  --primarypurple-900: rgba(70, 36, 107, 1);\n  --secondaryblue-50: rgba(235, 247, 255, 1);\n  --secondaryblue-100: rgba(194, 230, 255, 1);\n  --secondaryblue-200: rgba(165, 218, 255, 1);\n  --secondaryblue-300: rgba(124, 201, 254, 1);\n  --secondaryblue-400: rgba(98, 190, 254, 1);\n  --secondaryblue-500: rgba(59, 174, 254, 1);\n  --secondaryblue-600: rgba(54, 158, 231, 1);\n  --secondaryblue-700: rgba(42, 124, 180, 1);\n  --secondaryblue-800: rgba(32, 96, 140, 1);\n  --secondaryblue-900: rgba(25, 73, 107, 1);\n  --text-50: rgba(230, 230, 237, 1);\n  --text-100: rgba(178, 178, 199, 1);\n  --text-200: rgba(140, 140, 171, 1);\n  --text-300: rgba(88, 88, 133, 1);\n  --text-400: rgba(55, 56, 109, 1);\n  --text-500: rgba(5, 6, 73, 1);\n  --text-600: rgba(5, 5, 66, 1);\n  --text-700: rgba(4, 4, 52, 1);\n  --text-800: rgba(3, 3, 40, 1);\n  --text-900: rgba(2, 3, 31, 1);\n  --neutral-white50: rgba(255, 255, 255, 1);\n  --neutral-white100: rgba(253, 253, 255, 1);\n  --neutral-white200: rgba(253, 253, 255, 1);\n  --neutral-white300: rgba(252, 252, 255, 1);\n  --neutral-white400: rgba(251, 251, 255, 1);\n  --neutral-white500: rgba(240, 240, 255, 1);\n  --neutral-white600: rgba(228, 228, 232, 1);\n  --neutral-white700: rgba(178, 178, 181, 1);\n  --neutral-white800: rgba(138, 138, 140, 1);\n  --neutral-white900: rgba(105, 105, 107, 1);\n  --h1-font-family: \"Inter-Bold\", Helvetica;\n  --h1-font-weight: 700;\n  --h1-font-size: 64px;\n  --h1-letter-spacing: 0px;\n  --h1-line-height: 72px;\n  --h1-font-style: normal;\n  --h2-font-family: \"Inter-SemiBold\", Helvetica;\n  --h2-font-weight: 600;\n  --h2-font-size: 56px;\n  --h2-letter-spacing: 0px;\n  --h2-line-height: 64px;\n  --h2-font-style: normal;\n  --h3-font-family: \"Inter-SemiBold\", Helvetica;\n  --h3-font-weight: 600;\n  --h3-font-size: 48px;\n  --h3-letter-spacing: 0px;\n  --h3-line-height: 56px;\n  --h3-font-style: normal;\n  --h4-font-family: \"Inter-SemiBold\", Helvetica;\n  --h4-font-weight: 600;\n  --h4-font-size: 40px;\n  --h4-letter-spacing: 0px;\n  --h4-line-height: 48px;\n  --h4-font-style: normal;\n  --h5-font-family: \"Inter-SemiBold\", Helvetica;\n  --h5-font-weight: 600;\n  --h5-font-size: 32px;\n  --h5-letter-spacing: 0px;\n  --h5-line-height: 40px;\n  --h5-font-style: normal;\n  --h6-font-family: \"Inter-SemiBold\", Helvetica;\n  --h6-font-weight: 600;\n  --h6-font-size: 24px;\n  --h6-letter-spacing: 0px;\n  --h6-line-height: 32px;\n  --h6-font-style: normal;\n  --BODY-REGULAR-font-family: \"Inter-Medium\", Helvetica;\n  --BODY-REGULAR-font-weight: 500;\n  --BODY-REGULAR-font-size: 16px;\n  --BODY-REGULAR-letter-spacing: 0px;\n  --BODY-REGULAR-line-height: 24px;\n  --BODY-REGULAR-font-style: normal;\n  --BODY-SMALL-font-family: \"Inter-Regular\", Helvetica;\n  --BODY-SMALL-font-weight: 400;\n  --BODY-SMALL-font-size: 14px;\n  --BODY-SMALL-letter-spacing: 0px;\n  --BODY-SMALL-line-height: 24px;\n  --BODY-SMALL-font-style: normal;\n  --PARAGRAPH-font-family: \"Inter-Regular\", Helvetica;\n  --PARAGRAPH-font-weight: 400;\n  --PARAGRAPH-font-size: 16px;\n  --PARAGRAPH-letter-spacing: 0px;\n  --PARAGRAPH-line-height: 32px;\n  --PARAGRAPH-font-style: normal;\n  --caption-font-family: \"Inter-Regular\", Helvetica;\n  --caption-font-weight: 400;\n  --caption-font-size: 10px;\n  --caption-letter-spacing: 0px;\n  --caption-line-height: 12px;\n  --caption-font-style: normal;\n  --caption-1-font-family: \"Inter-Regular\", Helvetica;\n  --caption-1-font-weight: 400;\n  --caption-1-font-size: 12px;\n  --caption-1-letter-spacing: 0px;\n  --caption-1-line-height: 16px;\n  --caption-1-font-style: normal;\n  --BODY-LARGE-medium-font-family: \"Inter-Medium\", Helvetica;\n  --BODY-LARGE-medium-font-weight: 500;\n  --BODY-LARGE-medium-font-size: 18px;\n  --BODY-LARGE-medium-letter-spacing: 0px;\n  --BODY-LARGE-medium-line-height: 32px;\n  --BODY-LARGE-medium-font-style: normal;\n  --card-shadow-1: 0px 1px 10px 0px rgba(0, 0, 0, 0.08);\n  --product-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.2);\n  --admin-nav-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);\n  --collection-1-colors-text: rgba(94, 113, 141, 1);\n  --collection-1-colors-hover-background: rgba(246, 238, 255, 1);\n  --collection-1-hover-text: rgba(70, 36, 107, 1);\n  --collection-1-color: rgba(255, 255, 255, 1);\n}\n\n\n    .frame-success {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 40px;\n  padding: 40px;\n  position: relative;\n  background-color: #ffffff;\n}\n\n.frame-success .div {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 15px;\n  position: relative;\n  align-self: stretch;\n  width: 100%;\n  flex: 0 0 auto;\n}\n\n.frame-success .img {\n  position: relative;\n  width: 24px;\n  height: 24px;\n}\n\n.frame-success .div-2 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 17px;\n  position: relative;\n  align-self: stretch;\n  width: 100%;\n  flex: 0 0 auto;\n}\n\n.frame-success .div-3 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  position: relative;\n  align-self: stretch;\n  width: 100%;\n  flex: 0 0 auto;\n}\n\n.frame-success .group-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 65px;\n  position: relative;\n  align-self: stretch;\n  width: 100%;\n  flex: 0 0 auto;\n}\n\n.frame-success .group {\n  position: relative;\n  width: 179.86px;\n  height: 60px;\n}\n\n.frame-success .img-2 {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  top: 0;\n  left: 56px;\n}\n\n.frame-success .div-4 {\n  position: absolute;\n  width: 53px;\n  height: 41px;\n  top: 4px;\n  left: 127px;\n}\n\n.frame-success .star {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: 27px;\n  left: 6px;\n}\n\n.frame-success .star-2 {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  top: 6px;\n  left: 35px;\n}\n\n.frame-success .rectangle {\n  width: 9px;\n  height: 9px;\n  top: 2px;\n  left: 2px;\n  background-color: #c1efa9;\n  position: absolute;\n  transform: rotate(45deg);\n}\n\n.frame-success .rectangle-2 {\n  width: 4px;\n  height: 4px;\n  top: 11px;\n  left: 21px;\n  background-color: #50992b;\n  position: absolute;\n  transform: rotate(45deg);\n}\n\n.frame-success .div-5 {\n  position: absolute;\n  width: 40px;\n  height: 44px;\n  top: 4px;\n  left: 0;\n}\n\n.frame-success .star-3 {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: 30px;\n  left: 10px;\n}\n\n.frame-success .rectangle-3 {\n  width: 9px;\n  height: 9px;\n  top: 9px;\n  left: 2px;\n  background-color: #77c94e;\n  position: absolute;\n  transform: rotate(45deg);\n}\n\n.frame-success .rectangle-4 {\n  width: 4px;\n  height: 4px;\n  top: 17px;\n  left: 22px;\n  background-color: #b3ec96;\n  position: absolute;\n  transform: rotate(45deg);\n}\n\n.frame-success .ellipse {\n  width: 10px;\n  height: 10px;\n  top: 0;\n  border-radius: 5px;\n  border-color: #b3ec96;\n  position: absolute;\n  left: 30px;\n  border: 2px solid;\n}\n\n.frame-success .ellipse-2 {\n  width: 8px;\n  height: 8px;\n  top: 27px;\n  border-radius: 4px;\n  border-color: #77c94e;\n  position: absolute;\n  left: 30px;\n  border: 2px solid;\n}\n\n.frame-success .div-6 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  align-self: stretch;\n  width: 100%;\n  flex: 0 0 auto;\n}\n\n.frame-success .text-wrapper {\n  position: relative;\n  width: fit-content;\n  margin-top: -1px;\n  font-family: var(--h6-font-family);\n  font-weight: var(--h6-font-weight);\n  color: var(--text-700);\n  font-size: var(--h6-font-size);\n  letter-spacing: var(--h6-letter-spacing);\n  line-height: var(--h6-line-height);\n  white-space: nowrap;\n  font-style: var(--h6-font-style);\n}\n\n.frame-success .icon-px {\n  position: relative;\n  width: 20px;\n  height: 20px;\n}\n\n.frame-success .p {\n  position: relative;\n  align-self: stretch;\n  font-family: var(--BODY-REGULAR-font-family);\n  font-weight: var(--BODY-REGULAR-font-weight);\n  color: #000000;\n  font-size: var(--BODY-REGULAR-font-size);\n  text-align: center;\n  letter-spacing: var(--BODY-REGULAR-letter-spacing);\n  line-height: var(--BODY-REGULAR-line-height);\n  font-style: var(--BODY-REGULAR-font-style);\n}\n\n.frame-success .div-7 {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.frame-success .secured-by-simplipay {\n  position: relative;\n  width: fit-content;\n  margin-top: -1px;\n  font-family: \"Inter\", Helvetica;\n  font-weight: 400;\n  color: #000000;\n  font-size: 16px;\n  letter-spacing: 0;\n  line-height: 16px;\n}\n\n.frame-success .span {\n  line-height: var(--PARAGRAPH-line-height);\n  font-family: var(--PARAGRAPH-font-family);\n  font-style: var(--PARAGRAPH-font-style);\n  font-weight: var(--PARAGRAPH-font-weight);\n  letter-spacing: var(--PARAGRAPH-letter-spacing);\n  font-size: var(--PARAGRAPH-font-size);\n}\n\n.frame-success .text-wrapper-2 {\n  font-weight: var(--BODY-REGULAR-font-weight);\n  line-height: var(--BODY-REGULAR-line-height);\n  font-family: var(--BODY-REGULAR-font-family);\n  font-style: var(--BODY-REGULAR-font-style);\n  letter-spacing: var(--BODY-REGULAR-letter-spacing);\n  font-size: var(--BODY-REGULAR-font-size);\n}\n\n  " }} />
                <div className="overlay">
        <div className="frame-success">
          <div className="div">
            <img className="img" src="https://c.animaapp.com/vKLlPErR/img/icon---24-px---xsquare--1.svg" />
            <div className="div-2">
              <div className="div-3">
                <div className="group-wrapper">
                  <div className="group">
                    <img className="img-2" src="https://c.animaapp.com/vKLlPErR/img/frame-success-9820.svg" />
                    <div className="div-4">
                      <img className="star" src="https://c.animaapp.com/vKLlPErR/img/star-3.svg" />
                      <img className="star-2" src="https://c.animaapp.com/vKLlPErR/img/star-4.svg" />
                      <div className="rectangle" />
                      <div className="rectangle-2" />
                    </div>
                    <div className="div-5">
                      <img className="star-3" src="https://c.animaapp.com/vKLlPErR/img/star-5.svg" />
                      <div className="rectangle-3" />
                      <div className="rectangle-4" />
                      <div className="ellipse" />
                      <div className="ellipse-2" />
                    </div>
                  </div>
                </div>
                <div className="div-6">
                  <img className="img" src="https://c.animaapp.com/vKLlPErR/img/icon---24-px---arrowcircleleft--1@2x.png" />
                  <div className="text-wrapper">Success!</div>
                  <img className="icon-px" src="https://c.animaapp.com/vKLlPErR/img/icon---20-px---arrowcircleleft--1@2x.png" />
                </div>
              </div>
              <p className="p">You paid NGN 1000 to simplify</p>
            </div>
          </div>
          <div className="div-7">
            <img className="img" src="https://c.animaapp.com/vKLlPErR/img/icon---24-px---shieldcheck--1.svg" />
            <p className="secured-by-simplipay">
              <span className="span">Secured by</span> <span className="text-wrapper-2"> Simplipay</span>
            </p>
          </div>
        </div>
      </div>
</div>
        )}
      </Modal>
    );
  };
  return (
    <>
      {
        !show &&  <button onClick={() => setShow(true)}>Pay</button>
 
      }
          {PageModal()}
    </>
  );
};

export default Frame;

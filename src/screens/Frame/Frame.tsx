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
    const isValidPan = /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(inputPan);

    if (inputPan.length <= 16) {
      setPan(formatPAN(inputPan));
      setIsValid(isValidPan);
      if (isValidPan) {
        // onPanChange(inputPan);
        console.log(inputPan);
      }
    }
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputExpiryDate = e.target.value.replace(/\s/g, ''); // Remove spaces from entered value
    const isValidExpiryDate = /^[0-9]{2}\/[0-9]{2}$/.test(inputExpiryDate); // Add your validation logic

    if (inputExpiryDate.length <= 5) {
      // Format input as MM / YY
      if (inputExpiryDate.length === 3 && !inputExpiryDate.includes(' / ')) {
        inputExpiryDate = `${inputExpiryDate.slice(
          0,
          2
        )}  / ${inputExpiryDate.slice(2)}`;
      }

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
        <div className="overlay">
          <div className="frame">
            {step === 1 && (
              <>
                <div className="frame-wrapper">
                  <div className="div">
                    <div className="div-wrapper">
                      <div className="text-wrapper">PAY WITH</div>
                    </div>
                    <div className="div-2">
                      <Icon24PxBrowsers1
                        className="icon-instance-node"
                        color="#A655FF"
                      />
                      <div className="text-wrapper">Card</div>
                    </div>
                    <div className="div-2">
                      <Icon24PxMoney
                        className="icon-instance-node"
                        color="#9CA3AF"
                      />
                      <div className="text-wrapper-2">Bank</div>
                    </div>
                  </div>
                </div>
                <div className="frame-wrapper-2">
                  <div className="div-3">
                    <div className="div-4">
                      <div className="div-5">
                        <SimplipayLogo className="simplipay-logo" />
                      </div>
                      <div className="div-6">
                        <div className="div-7">
                          <div className="text-wrapper-3">
                            harrymonte@gmail.com
                          </div>
                        </div>
                        <div className="text-wrapper-4">Pay NGN 1000</div>
                      </div>
                      <div className="div-wrapper-2">
                        <p className="p">
                          Provide card details to make payment
                        </p>
                      </div>
                      <div className="div-8">
                        <div className="div-9">
                          <div className="text-input-field">
                            <p className="div-10">
                              <span className="span">Card Number</span>
                              <span className="text-wrapper-5">&nbsp;</span>
                              <span className="text-wrapper-6">*</span>
                            </p>
                            <div className="frame-wrapper-3">
                              {/* <div className="div-11"> */}
                              {/* <input className="text-wrapper-7 " placeholder=" 0000 0000 0000 0000"/> */}
                              {/* <div className="text-wrapper-7">
                              0000 0000 0000 0000
                            </div> */}

                              <input
                                type="text"
                                className="input-con"
                                id="panInput"
                                value={pan}
                                onChange={handlePanChange}
                                placeholder="0000 0000 0000 0000"
                                style={{
                                  borderColor: isValid ? 'initial' : 'red',
                                  outline: 'none', // Remove the focus outline
                                  boxShadow: 'none', // Remove the focus box shadow
                                }}
                              />

                              <PaymentLogo
                                className="payment-logo-mastercard"
                                iconClassName="payment-logo-instance"
                                middle="https://c.animaapp.com/hjcXT6qK/img/middle.svg"
                                right="https://c.animaapp.com/hjcXT6qK/img/right.svg"
                              />
                            </div>
                            {/* {!isValid && <p style={{ color: "red" }}>Invalid PAN Card Number</p>} */}
                          </div>
                        </div>
                        <div className="div-12">
                          <div className="text-input-field-2">
                            <p className="div-10">
                              <span className="span">Expiry Date</span>
                              <span className="text-wrapper-5">&nbsp;</span>
                              <span className="text-wrapper-6">*</span>
                            </p>
                            <div className="div-wrapper-3">
                              <input
                                type="text"
                                id="expiryDateInput"
                                className="input-date"
                                value={expiryDate}
                                onChange={handleExpiryDateChange}
                                placeholder="MM / YY"
                                style={{
                                  borderColor: isValid ? 'initial' : 'red',
                                  outline: 'none',
                                  boxShadow: 'none',
                                }}
                              />
                            </div>
                          </div>
                          <div className="text-input-field-2">
                            <p className="div-10">
                              <span className="span">CCV</span>
                              <span className="text-wrapper-5">&nbsp;</span>
                              <span className="text-wrapper-6">*</span>
                            </p>
                            <div className="div-wrapper-3">
                              {/* <div className="text-wrapper-7">123</div> */}

                                <input
                                type="text"
                                id="expiryDateInput"
                                className="input-date"
                                placeholder="123"
                                style={{
                                  borderColor: isValid ? 'initial' : 'red',
                                  outline: 'none',
                                  boxShadow: 'none',
                                }}
                                maxLength={3}
                              />
                            </div>
                            {/* </div> */}
                          </div>
                        </div>
                        <LongButton
                          className="long-button-instance"
                          property1="filled"
                          text="Pay NGN 1000"
                          proceed={proceed}
                        />
                      </div>
                    </div>
                    <div className="div-7">
                      <Icon24PxShieldcheck
                        className="icon-instance-node"
                        color="#09C63E"
                      />
                      <p className="secured-by-simplipay">
                        <span className="text-wrapper-8">Secured by</span>
                        <span className="text-wrapper-9"> Simplipay</span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <TransactionPin proceed={proceed} />
              </>
            )}

            {step === 3 && (
              <>
                <OtpFrame proceed={proceed} />
              </>
            )}

            {step === 4 && (
              <>
                <Success />
              </>
            )}
          </div>
        </div>
      </Modal>
    );
  };
  return (
    <>
      <button onClick={() => setShow(true)}>Pay</button>
      {PageModal()}
    </>
  );
};

export default Frame;

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var LongButton_1 = require("./components/LongButton");
var PaymentLogo_1 = require("./components/PaymentLogo");
var Icon24PxBrowsers1_1 = require("./icons/Icon24PxBrowsers1");
var Icon24PxMoney_1 = require("./icons/Icon24PxMoney");
var Icon24PxShieldcheck_1 = require("./icons/Icon24PxShieldcheck");
var react_bootstrap_1 = require("react-bootstrap");
require("./style.css");
var OtpFrame_1 = require("./OTPFrame/OtpFrame");
var TransactionPin_1 = require("./OTPFrame/TransactionPin");
var Success_1 = require("./Success/Success");
var Frame = function () {
    var _a = (0, react_1.useState)(false), show = _a[0], setShow = _a[1];
    var handleShow = function () { return setShow(true); };
    var handleClose = function () { return setShow(false); };
    var _b = (0, react_1.useState)(''), otp = _b[0], setOtp = _b[1];
    var _c = (0, react_1.useState)(''), pan = _c[0], setPan = _c[1];
    var _d = (0, react_1.useState)(true), isValid = _d[0], setIsValid = _d[1];
    var _e = (0, react_1.useState)(''), expiryDate = _e[0], setExpiryDate = _e[1];
    var _f = (0, react_1.useState)(true), isValidDate = _f[0], setValidDate = _f[1];
    var formatPAN = function (inputPan) {
        // Add space after every 4 characters
        return inputPan.replace(/(.{4})/g, '$1 ').trim();
    };
    var handlePanChange = function (event) {
        var inputPan = event.target.value.toUpperCase().replace(/\s/g, ''); // Convert to uppercase and remove spaces for consistency
        // Basic PAN card number validation
        var isValidPan = /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(inputPan);
        if (inputPan.length <= 16) {
            setPan(formatPAN(inputPan));
            setIsValid(isValidPan);
            if (isValidPan) {
                // onPanChange(inputPan);
                console.log(inputPan);
            }
        }
    };
    var handleExpiryDateChange = function (e) {
        var inputExpiryDate = e.target.value.replace(/\s/g, ''); // Remove spaces from entered value
        var isValidExpiryDate = /^[0-9]{2}\/[0-9]{2}$/.test(inputExpiryDate); // Add your validation logic
        if (inputExpiryDate.length <= 5) {
            // Format input as MM / YY
            if (inputExpiryDate.length === 3 && !inputExpiryDate.includes(' / ')) {
                inputExpiryDate = "".concat(inputExpiryDate.slice(0, 2), "  / ").concat(inputExpiryDate.slice(2));
            }
            setExpiryDate(inputExpiryDate);
            setValidDate(isValidExpiryDate);
            if (isValidExpiryDate) {
                console.log(inputExpiryDate);
                // onExpiryDateChange(inputExpiryDate);
            }
        }
    };
    var _g = (0, react_1.useState)(1), step = _g[0], setStep = _g[1];
    var proceed = function () {
        setStep(step + 1);
    };
    var PageModal = function () {
        return (react_1.default.createElement(react_bootstrap_1.Modal, { dialogclassName: "m-auto px-5 modal-card", "aria-hidden": "true", show: show, onHide: function () { return setShow(false); }, animation: true, centered: true, size: "lg", backdrop: 'static', "aria-labelledby": "contained-modal-title-vcenter", keyboard: false },
            react_1.default.createElement("div", { className: "overlay" },
                react_1.default.createElement("div", { className: "frame" },
                    step === 1 && (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("div", { className: "frame-wrapper" },
                            react_1.default.createElement("div", { className: "div" },
                                react_1.default.createElement("div", { className: "div-wrapper" },
                                    react_1.default.createElement("div", { className: "text-wrapper" }, "PAY WITH")),
                                react_1.default.createElement("div", { className: "div-2" },
                                    react_1.default.createElement(Icon24PxBrowsers1_1.Icon24PxBrowsers1, { className: "icon-instance-node", color: "#A655FF" }),
                                    react_1.default.createElement("div", { className: "text-wrapper" }, "Card")),
                                react_1.default.createElement("div", { className: "div-2" },
                                    react_1.default.createElement(Icon24PxMoney_1.Icon24PxMoney, { className: "icon-instance-node", color: "#9CA3AF" }),
                                    react_1.default.createElement("div", { className: "text-wrapper-2" }, "Bank")))),
                        react_1.default.createElement("div", { className: "frame-wrapper-2" },
                            react_1.default.createElement("div", { className: "div-3" },
                                react_1.default.createElement("div", { className: "div-4" },
                                    react_1.default.createElement("div", { className: "div-5" }),
                                    react_1.default.createElement("div", { className: "div-6" },
                                        react_1.default.createElement("div", { className: "div-7" },
                                            react_1.default.createElement("div", { className: "text-wrapper-3" }, "harrymonte@gmail.com")),
                                        react_1.default.createElement("div", { className: "text-wrapper-4" }, "Pay NGN 1000")),
                                    react_1.default.createElement("div", { className: "div-wrapper-2" },
                                        react_1.default.createElement("p", { className: "p" }, "Provide card details to make payment")),
                                    react_1.default.createElement("div", { className: "div-8" },
                                        react_1.default.createElement("div", { className: "div-9" },
                                            react_1.default.createElement("div", { className: "text-input-field" },
                                                react_1.default.createElement("p", { className: "div-10" },
                                                    react_1.default.createElement("span", { className: "span" }, "Card Number"),
                                                    react_1.default.createElement("span", { className: "text-wrapper-5" }, "\u00A0"),
                                                    react_1.default.createElement("span", { className: "text-wrapper-6" }, "*")),
                                                react_1.default.createElement("div", { className: "frame-wrapper-3" },
                                                    react_1.default.createElement("input", { type: "text", className: "input-con", id: "panInput", value: pan, onChange: handlePanChange, placeholder: "0000 0000 0000 0000", style: {
                                                            borderColor: isValid ? 'initial' : 'red',
                                                            outline: 'none', // Remove the focus outline
                                                            boxShadow: 'none', // Remove the focus box shadow
                                                        } }),
                                                    react_1.default.createElement(PaymentLogo_1.PaymentLogo, { className: "payment-logo-mastercard", iconClassName: "payment-logo-instance", middle: "https://c.animaapp.com/hjcXT6qK/img/middle.svg", right: "https://c.animaapp.com/hjcXT6qK/img/right.svg" })))),
                                        react_1.default.createElement("div", { className: "div-12" },
                                            react_1.default.createElement("div", { className: "text-input-field-2" },
                                                react_1.default.createElement("p", { className: "div-10" },
                                                    react_1.default.createElement("span", { className: "span" }, "Expiry Date"),
                                                    react_1.default.createElement("span", { className: "text-wrapper-5" }, "\u00A0"),
                                                    react_1.default.createElement("span", { className: "text-wrapper-6" }, "*")),
                                                react_1.default.createElement("div", { className: "div-wrapper-3" },
                                                    react_1.default.createElement("input", { type: "text", id: "expiryDateInput", className: "input-date", value: expiryDate, onChange: handleExpiryDateChange, placeholder: "MM / YY", style: {
                                                            borderColor: isValid ? 'initial' : 'red',
                                                            outline: 'none',
                                                            boxShadow: 'none',
                                                        } }))),
                                            react_1.default.createElement("div", { className: "text-input-field-2" },
                                                react_1.default.createElement("p", { className: "div-10" },
                                                    react_1.default.createElement("span", { className: "span" }, "CCV"),
                                                    react_1.default.createElement("span", { className: "text-wrapper-5" }, "\u00A0"),
                                                    react_1.default.createElement("span", { className: "text-wrapper-6" }, "*")),
                                                react_1.default.createElement("div", { className: "div-wrapper-3" },
                                                    react_1.default.createElement("input", { type: "text", id: "expiryDateInput", className: "input-date", placeholder: "123", style: {
                                                            borderColor: isValid ? 'initial' : 'red',
                                                            outline: 'none',
                                                            boxShadow: 'none',
                                                        }, maxLength: 3 })))),
                                        react_1.default.createElement(LongButton_1.LongButton, { className: "long-button-instance", property1: "filled", text: "Pay NGN 1000", proceed: proceed }))),
                                react_1.default.createElement("div", { className: "div-7" },
                                    react_1.default.createElement(Icon24PxShieldcheck_1.Icon24PxShieldcheck, { className: "icon-instance-node", color: "#09C63E" }),
                                    react_1.default.createElement("p", { className: "secured-by-simplipay" },
                                        react_1.default.createElement("span", { className: "text-wrapper-8" }, "Secured by"),
                                        react_1.default.createElement("span", { className: "text-wrapper-9" }, " Simplipay"))))))),
                    step === 2 && (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(TransactionPin_1.TransactionPin, { proceed: proceed }))),
                    step === 3 && (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(OtpFrame_1.OtpFrame, { proceed: proceed }))),
                    step === 4 && (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(Success_1.Success, null)))))));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { onClick: function () { return setShow(true); } }, "Pay"),
        PageModal()));
};
exports.default = Frame;

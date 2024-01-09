"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpFrame = void 0;
var react_1 = __importDefault(require("react"));
var IconPx_1 = require("../components/otp/components/IconPx");
var LongButton_1 = require("../components/otp/components/LongButton");
var NewTextInput_1 = require("../components/otp/components/NewTextInput");
var Icon24PxShieldcheck_1 = require("../iconOtp/icons/Icon24PxShieldcheck");
require("./style.css");
var OtpFrame = function (_a) {
    var proceed = _a.proceed;
    return (react_1.default.createElement("div", { className: "frame2" },
        react_1.default.createElement("div", { className: "div-3" },
            react_1.default.createElement("div", { className: "text-wrapper-9" }, "OTP"),
            react_1.default.createElement(IconPx_1.IconPx, null)),
        react_1.default.createElement("p", { className: "an-email-containing" },
            react_1.default.createElement("span", { className: "text-wrapper-10" }, "An email containing a 6-digit code was sent to "),
            react_1.default.createElement("br", null),
            react_1.default.createElement("span", { className: "text-wrapper-11" }, "phone number."),
            react_1.default.createElement("span", { className: "text-wrapper-10" }, " Enter the code below.")),
        react_1.default.createElement(NewTextInput_1.NewTextInput, { className: "new-text-input-fields", property1: "OTP" }),
        react_1.default.createElement(LongButton_1.LongButton, { className: "long-button-instance", property1: "filled", text: "Proceed", proceed: proceed }),
        react_1.default.createElement("p", { className: "didn-t-get-email" },
            react_1.default.createElement("span", { className: "text-wrapper-12" }, "Didn\u2019t get email?"),
            react_1.default.createElement("span", { className: "text-wrapper-13" }, "\u00A0"),
            react_1.default.createElement("span", { className: "text-wrapper-14" }, "Resend")),
        react_1.default.createElement("div", { className: "div-4" },
            react_1.default.createElement(Icon24PxShieldcheck_1.Icon24PxShieldcheck, { className: "icon-px", color: "#09C63E" }),
            react_1.default.createElement("p", { className: "secured-by-simplipay" },
                react_1.default.createElement("span", { className: "text-wrapper-15" }, "Secured by"),
                react_1.default.createElement("span", { className: "text-wrapper-16" }, " Simplipay")))));
};
exports.OtpFrame = OtpFrame;

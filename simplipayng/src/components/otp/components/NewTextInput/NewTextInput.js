"use strict";
/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewTextInput = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
var Icon20PxCaretdown1_1 = require("../../../../iconOtp/icons/Icon20PxCaretdown1");
var Icon20PxX_1 = require("../../../../iconOtp/icons/Icon20PxX");
var NgNigeria_1 = require("../../../../iconOtp/icons/NgNigeria");
require("./style.css");
var NewTextInput = function (_a) {
    var property1 = _a.property1, className = _a.className;
    return (react_1.default.createElement("div", { className: "new-text-input ".concat(property1, " ").concat(className) },
        (property1 === "OTP" ||
            property1 === "PIN" ||
            property1 === "amount" ||
            property1 === "default" ||
            property1 === "dropdown" ||
            property1 === "list" ||
            property1 === "phone-number" ||
            property1 === "social-media" ||
            property1 === "upload" ||
            property1 === "uploaded" ||
            property1 === "variant-5") && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "business-name" },
                ["amount", "default", "dropdown", "list", "phone-number", "variant-5"].includes(property1) && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("span", { className: "span" },
                        ["default", "dropdown", "list", "variant-5"].includes(property1) && react_1.default.createElement(react_1.default.Fragment, null, "Business name"),
                        property1 === "amount" && react_1.default.createElement(react_1.default.Fragment, null, "Amount"),
                        property1 === "phone-number" && react_1.default.createElement(react_1.default.Fragment, null, "Phone number")),
                    react_1.default.createElement("p", { className: "span-wrapper" },
                        react_1.default.createElement("span", { className: "text-wrapper" }, "\u00A0")),
                    react_1.default.createElement("p", { className: "span-wrapper" },
                        react_1.default.createElement("span", { className: "text-wrapper-2" }, "*")))),
                property1 === "social-media" && react_1.default.createElement(react_1.default.Fragment, null, "Handle"),
                property1 === "OTP" && react_1.default.createElement(react_1.default.Fragment, null, "OTP"),
                property1 === "PIN" && react_1.default.createElement(react_1.default.Fragment, null, "PIN"),
                ["upload", "uploaded"].includes(property1) && (react_1.default.createElement("p", { className: "div" },
                    react_1.default.createElement("span", { className: "text-wrapper-3" }, "Business name"),
                    react_1.default.createElement("span", { className: "text-wrapper" }, "\u00A0"),
                    react_1.default.createElement("span", { className: "text-wrapper-2" }, "*")))),
            react_1.default.createElement("div", { className: "frame-2" },
                ["default", "list", "upload", "variant-5"].includes(property1) && (react_1.default.createElement("div", { className: "buyhomes-nigeria" },
                    ["default", "list", "variant-5"].includes(property1) && react_1.default.createElement(react_1.default.Fragment, null, "BuyHomes Nigeria Limited"),
                    property1 === "upload" && react_1.default.createElement("p", { className: "p" }, "Click here to upload document"))),
                ["amount", "phone-number", "social-media", "uploaded"].includes(property1) && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: "div-2" },
                        property1 === "amount" && react_1.default.createElement(react_1.default.Fragment, null, "\u20A6"),
                        property1 === "social-media" && react_1.default.createElement(react_1.default.Fragment, null, "@"),
                        property1 === "phone-number" && (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(NgNigeria_1.NgNigeria, { className: "NG-nigeria" }),
                            react_1.default.createElement("div", { className: "text-wrapper-4" }, "+234"),
                            react_1.default.createElement(Icon20PxCaretdown1_1.Icon20PxCaretdown1, { className: "instance-node" }))),
                        property1 === "uploaded" && react_1.default.createElement(react_1.default.Fragment, null, "document.pdf")),
                    react_1.default.createElement("div", { className: "element" },
                        property1 === "amount" && react_1.default.createElement(react_1.default.Fragment, null, "100,000,000.00"),
                        property1 === "social-media" && react_1.default.createElement(react_1.default.Fragment, null, "BuyHomes Nigeria Limited"),
                        property1 === "phone-number" && react_1.default.createElement(react_1.default.Fragment, null, "7031635772"),
                        property1 === "uploaded" && (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("div", { className: "text-wrapper-5" }, "Remove"),
                            react_1.default.createElement(Icon20PxX_1.Icon20PxX, { className: "instance-node" })))))),
                property1 === "OTP" && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: "div-wrapper" },
                        react_1.default.createElement("div", { className: "text-wrapper-6" }, "2")),
                    react_1.default.createElement("div", { className: "div-wrapper" },
                        react_1.default.createElement("div", { className: "text-wrapper-6" }, "4")),
                    react_1.default.createElement("div", { className: "div-wrapper" },
                        react_1.default.createElement("div", { className: "text-wrapper-6" }, "5")),
                    react_1.default.createElement("div", { className: "div-wrapper" },
                        react_1.default.createElement("div", { className: "text-wrapper-6" }, "0")),
                    react_1.default.createElement("div", { className: "div-wrapper" },
                        react_1.default.createElement("div", { className: "text-wrapper-6" }, "3")),
                    react_1.default.createElement("div", { className: "div-wrapper" },
                        react_1.default.createElement("div", { className: "text-wrapper-6" }, "9")))),
                property1 === "PIN" && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: "div-wrapper" },
                        react_1.default.createElement("div", { className: "text-wrapper-6" }, "2")),
                    react_1.default.createElement("div", { className: "div-wrapper" },
                        react_1.default.createElement("div", { className: "text-wrapper-6" }, "4")),
                    react_1.default.createElement("div", { className: "div-wrapper" },
                        react_1.default.createElement("div", { className: "text-wrapper-6" }, "5")),
                    react_1.default.createElement("div", { className: "div-wrapper" },
                        react_1.default.createElement("div", { className: "text-wrapper-6" }, "0")))),
                property1 === "dropdown" && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: "text-wrapper-7" }, "BuyHomes Nigeria Limited"),
                    react_1.default.createElement(Icon20PxCaretdown1_1.Icon20PxCaretdown1, { className: "icon-px-caretdown" })))))),
        property1 === "error-or-info" && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("p", { className: "div" },
                react_1.default.createElement("span", { className: "text-wrapper-3" }, "Business name"),
                react_1.default.createElement("span", { className: "text-wrapper" }, "\u00A0"),
                react_1.default.createElement("span", { className: "text-wrapper-2" }, "*")),
            react_1.default.createElement("div", { className: "frame-3" },
                react_1.default.createElement("div", { className: "text-wrapper-7" }, "BuyHomes Nigeria Limited"),
                react_1.default.createElement(Icon20PxCaretdown1_1.Icon20PxCaretdown1, { className: "instance-node" })),
            react_1.default.createElement("div", { className: "text-wrapper-8" }, "Passwords do not match")))));
};
exports.NewTextInput = NewTextInput;
exports.NewTextInput.propTypes = {
    property1: prop_types_1.default.oneOf([
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

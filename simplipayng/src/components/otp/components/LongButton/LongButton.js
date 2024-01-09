"use strict";
/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongButton = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
require("./style.css");
var LongButton = function (_a) {
    var property1 = _a.property1, className = _a.className, _b = _a.text, text = _b === void 0 ? "Next" : _b, proceed = _a.proceed;
    return (react_1.default.createElement("button", { className: "long-button ".concat(property1, " ").concat(className), onClick: proceed },
        react_1.default.createElement("div", { className: "next" }, text)));
};
exports.LongButton = LongButton;
exports.LongButton.propTypes = {
    property1: prop_types_1.default.oneOf(["variant-4", "filled", "outline", "inactive"]),
    text: prop_types_1.default.string,
};
